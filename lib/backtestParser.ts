// Parser pour les fichiers StrategyTester.htm de MT4

export interface Trade {
  id: number;
  time: Date;
  type: string;
  order: number;
  volume: number;
  price: number;
  sl: number;
  tp: number;
  profit: number;
  balance: number;
}

export interface BacktestSummary {
  symbol: string;
  period: string;
  dateRange: { start: Date; end: Date };
  initialDeposit: number;
  totalNetProfit: number;
  grossProfit: number;
  grossLoss: number;
  profitFactor: number;
  expectedPayoff: number;
  absoluteDrawdown: number;
  maxDrawdown: number;
  maxDrawdownPercent: number;
  relativeDrawdown: number;
  relativeDrawdownAmount: number;
  totalTrades: number;
  shortPositions: number;
  shortWinPercent: number;
  longPositions: number;
  longWinPercent: number;
  profitTrades: number;
  profitTradesPercent: number;
  lossTrades: number;
  lossTradesPercent: number;
  largestProfitTrade: number;
  largestLossTrade: number;
  averageProfitTrade: number;
  averageLossTrade: number;
}

export interface BacktestData {
  summary: BacktestSummary;
  trades: Trade[];
}

export function parseBacktestHTML(htmlContent: string): BacktestData {
  // Fonction helper pour extraire du texte entre balises
  const extractText = (regex: RegExp): string => {
    const match = htmlContent.match(regex);
    return match ? match[1].trim() : '';
  };

  // Fonction helper pour extraire un nombre
  const extractNumber = (regex: RegExp): number => {
    const text = extractText(regex);
    const num = parseFloat(text.replace(/[^\d.-]/g, ''));
    return isNaN(num) ? 0 : num;
  };

  // Extraction du symbole
  const symbol = extractText(/<tr align=left><td colspan=2>Symbole<\/td><td colspan=4>([^<]+)<\/td><\/tr>/);

  // Extraction de la période
  const periodMatch = htmlContent.match(/<tr align=left><td colspan=2>Période <\/td><td colspan=4>([^<]+)<\/td><\/tr>/);
  const period = periodMatch ? periodMatch[1].trim() : '';

  // Extraction des dates
  const dateMatch = period.match(/(\d{4}\.\d{2}\.\d{2})[^\d]+(\d{4}\.\d{2}\.\d{2})/);
  const startDate = dateMatch ? new Date(dateMatch[1].replace(/\./g, '-')) : new Date();
  const endDate = dateMatch ? new Date(dateMatch[2].replace(/\./g, '-')) : new Date();

  // Extraction des métriques principales
  const initialDeposit = extractNumber(/<tr align=left><td>Dépot initial<\/td><td align=right>([^<]+)<\/td>/);
  const totalNetProfit = extractNumber(/<tr align=left><td>Profit total net<\/td><td align=right>([^<]+)<\/td>/);
  const grossProfit = extractNumber(/<td>Profit brut<\/td><td align=right>([^<]+)<\/td>/);
  const grossLoss = extractNumber(/<td>Perte brute<\/td><td align=right>([^<]+)<\/td>/);
  const profitFactor = extractNumber(/<tr align=left><td>Facteur de profit<\/td><td align=right>([^<]+)<\/td>/);
  const expectedPayoff = extractNumber(/<td>Rémunération espérée<\/td><td align=right>([^<]+)<\/td>/);

  // Extraction du drawdown
  const absoluteDrawdown = extractNumber(/<tr align=left><td>Chute absolue<\/td><td align=right>([^<]+)<\/td>/);
  const maxDrawdownMatch = htmlContent.match(/<td>Chute maximale<\/td><td align=right>([^<]+)\s*\(([^)]+)%\)<\/td>/);
  const maxDrawdown = maxDrawdownMatch ? parseFloat(maxDrawdownMatch[1].replace(/[^\d.-]/g, '')) : 0;
  const maxDrawdownPercent = maxDrawdownMatch ? parseFloat(maxDrawdownMatch[2]) : 0;

  const relativeDrawdownMatch = htmlContent.match(/<td>Enfoncement relatif<\/td><td align=right>([^%]+)%\s*\(([^)]+)\)<\/td>/);
  const relativeDrawdown = relativeDrawdownMatch ? parseFloat(relativeDrawdownMatch[1]) : 0;
  const relativeDrawdownAmount = relativeDrawdownMatch ? parseFloat(relativeDrawdownMatch[2].replace(/[^\d.-]/g, '')) : 0;

  // Extraction des statistiques de trades
  const totalTrades = extractNumber(/<tr align=left><td>Total des Trades<\/td><td align=right>([^<]+)<\/td>/);
  
  const shortMatch = htmlContent.match(/<td>Positions SHORT[^>]*<\/td><td align=right>(\d+)\s*\(([^)]+)%\)<\/td>/);
  const shortPositions = shortMatch ? parseInt(shortMatch[1]) : 0;
  const shortWinPercent = shortMatch ? parseFloat(shortMatch[2]) : 0;

  const longMatch = htmlContent.match(/<td>Positions LONG[^>]*<\/td><td align=right>(\d+)\s*\(([^)]+)%\)<\/td>/);
  const longPositions = longMatch ? parseInt(longMatch[1]) : 0;
  const longWinPercent = longMatch ? parseFloat(longMatch[2]) : 0;

  const profitTradesMatch = htmlContent.match(/<td>Profits des Trades[^>]*<\/td><td align=right>(\d+)\s*\(([^)]+)%\)<\/td>/);
  const profitTrades = profitTradesMatch ? parseInt(profitTradesMatch[1]) : 0;
  const profitTradesPercent = profitTradesMatch ? parseFloat(profitTradesMatch[2]) : 0;

  const lossTradesMatch = htmlContent.match(/<td>Pertes des Trades[^>]*<\/td><td align=right>(\d+)\s*\(([^)]+)%\)<\/td>/);
  const lossTrades = lossTradesMatch ? parseInt(lossTradesMatch[1]) : 0;
  const lossTradesPercent = lossTradesMatch ? parseFloat(lossTradesMatch[2]) : 0;

  const largestProfitTrade = extractNumber(/<td>gains par trade<\/td><td align=right>([^<]+)<\/td><td>pertes par trade/);
  const largestLossTrade = extractNumber(/<td>pertes par trade<\/td><td align=right>([^<]+)<\/td><\/tr>/);
  const averageProfitTrade = extractNumber(/<td>Moyenne<\/td><td>gains par trade<\/td><td align=right>([^<]+)<\/td>/);
  const averageLossTrade = extractNumber(/<td>pertes par trade<\/td><td align=right>([^<]+)<\/td><\/tr>\s*<tr height=8><td colspan=6><\/td><\/tr>/);

  // Extraction des trades
  const trades: Trade[] = [];
  const tradeRegex = /<tr[^>]*align=right><td>(\d+)<\/td><td class=msdate>([^<]+)<\/td><td>([^<]+)<\/td><td>(\d+)<\/td><td class=mspt>([^<]+)<\/td><td[^>]*>([^<]+)<\/td><td[^>]*>([^<]*)<\/td><td[^>]*>([^<]*)<\/td><td class=mspt>([^<]*)<\/td><td class=mspt>([^<]*)<\/td><\/tr>/g;
  
  let match;
  while ((match = tradeRegex.exec(htmlContent)) !== null) {
    const profit = parseFloat(match[9].replace(/[^\d.-]/g, ''));
    const balance = parseFloat(match[10].replace(/[^\d.-]/g, ''));
    
    if (!isNaN(profit) && !isNaN(balance)) {
      trades.push({
        id: parseInt(match[1]),
        time: new Date(match[2].replace(/\./g, '-').replace(' ', 'T')),
        type: match[3].trim(),
        order: parseInt(match[4]),
        volume: parseFloat(match[5]),
        price: parseFloat(match[6]),
        sl: parseFloat(match[7]) || 0,
        tp: parseFloat(match[8]) || 0,
        profit,
        balance
      });
    }
  }

  return {
    summary: {
      symbol,
      period,
      dateRange: { start: startDate, end: endDate },
      initialDeposit,
      totalNetProfit,
      grossProfit,
      grossLoss,
      profitFactor,
      expectedPayoff,
      absoluteDrawdown,
      maxDrawdown,
      maxDrawdownPercent,
      relativeDrawdown,
      relativeDrawdownAmount,
      totalTrades,
      shortPositions,
      shortWinPercent,
      longPositions,
      longWinPercent,
      profitTrades,
      profitTradesPercent,
      lossTrades,
      lossTradesPercent,
      largestProfitTrade,
      largestLossTrade,
      averageProfitTrade,
      averageLossTrade
    },
    trades
  };
}
