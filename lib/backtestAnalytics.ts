// Fonctions d'analyse avancée pour les backtests

import { Trade } from './backtestParser';

export interface YearlyStats {
  year: number;
  netProfit: number;
  maxDrawdown: number;
  profitFactor: number;
  trades: number;
  winRate: number;
}

export interface MonthlyReturn {
  year: number;
  month: number;
  return: number;
  trades: number;
}

export interface HourlyStats {
  hour: number;
  profit: number;
  trades: number;
  winRate: number;
  avgProfit: number;
}

export interface DrawdownPeriod {
  start: Date;
  end: Date;
  depth: number;
  duration: number; // en jours
  recovery: number; // en jours
}

// Calcul du ratio de Sharpe
export function calculateSharpeRatio(trades: Trade[], riskFreeRate: number = 0.02): number {
  if (trades.length === 0) return 0;

  const returns = trades.map(t => t.profit / t.balance);
  const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
  const variance = returns.reduce((acc, r) => acc + Math.pow(r - avgReturn, 2), 0) / returns.length;
  const stdDev = Math.sqrt(variance);

  if (stdDev === 0) return 0;

  // Annualisé (252 jours de trading)
  const annualizedReturn = avgReturn * 252;
  const annualizedStdDev = stdDev * Math.sqrt(252);

  return (annualizedReturn - riskFreeRate) / annualizedStdDev;
}

// Analyse des performances annuelles
export function analyzeYearlyPerformance(trades: Trade[], initialBalance: number): YearlyStats[] {
  const yearlyData: { [year: number]: Trade[] } = {};

  trades.forEach(trade => {
    const year = trade.time.getFullYear();
    if (!yearlyData[year]) yearlyData[year] = [];
    yearlyData[year].push(trade);
  });

  return Object.keys(yearlyData).map(yearStr => {
    const year = parseInt(yearStr);
    const yearTrades = yearlyData[year];
    
    const netProfit = yearTrades.reduce((sum, t) => sum + t.profit, 0);
    const winningTrades = yearTrades.filter(t => t.profit > 0);
    const losingTrades = yearTrades.filter(t => t.profit < 0);
    
    const grossProfit = winningTrades.reduce((sum, t) => sum + t.profit, 0);
    const grossLoss = Math.abs(losingTrades.reduce((sum, t) => sum + t.profit, 0));
    const profitFactor = grossLoss === 0 ? grossProfit : grossProfit / grossLoss;
    
    const winRate = (winningTrades.length / yearTrades.length) * 100;

    // Calcul du drawdown max pour l'année
    let maxDrawdown = 0;
    let peak = yearTrades[0]?.balance || initialBalance;
    
    yearTrades.forEach(trade => {
      if (trade.balance > peak) peak = trade.balance;
      const drawdown = ((peak - trade.balance) / peak) * 100;
      if (drawdown > maxDrawdown) maxDrawdown = drawdown;
    });

    return {
      year,
      netProfit,
      maxDrawdown,
      profitFactor,
      trades: yearTrades.length,
      winRate
    };
  }).sort((a, b) => a.year - b.year);
}

// Analyse des rendements mensuels
export function analyzeMonthlyReturns(trades: Trade[]): MonthlyReturn[] {
  const monthlyData: { [key: string]: Trade[] } = {};

  trades.forEach(trade => {
    const key = `${trade.time.getFullYear()}-${trade.time.getMonth()}`;
    if (!monthlyData[key]) monthlyData[key] = [];
    monthlyData[key].push(trade);
  });

  return Object.keys(monthlyData).map(key => {
    const [year, month] = key.split('-').map(Number);
    const monthTrades = monthlyData[key];
    
    const startBalance = monthTrades[0].balance - monthTrades[0].profit;
    const endBalance = monthTrades[monthTrades.length - 1].balance;
    const returnPercent = ((endBalance - startBalance) / startBalance) * 100;

    return {
      year,
      month,
      return: returnPercent,
      trades: monthTrades.length
    };
  }).sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.month - b.month;
  });
}

// Analyse horaire
export function analyzeHourlyPerformance(trades: Trade[]): HourlyStats[] {
  const hourlyData: { [hour: number]: Trade[] } = {};

  // Initialiser toutes les heures
  for (let i = 0; i < 24; i++) {
    hourlyData[i] = [];
  }

  trades.forEach(trade => {
    const hour = trade.time.getHours();
    hourlyData[hour].push(trade);
  });

  return Object.keys(hourlyData).map(hourStr => {
    const hour = parseInt(hourStr);
    const hourTrades = hourlyData[hour];
    
    if (hourTrades.length === 0) {
      return { hour, profit: 0, trades: 0, winRate: 0, avgProfit: 0 };
    }

    const profit = hourTrades.reduce((sum, t) => sum + t.profit, 0);
    const winningTrades = hourTrades.filter(t => t.profit > 0).length;
    const winRate = (winningTrades / hourTrades.length) * 100;
    const avgProfit = profit / hourTrades.length;

    return {
      hour,
      profit,
      trades: hourTrades.length,
      winRate,
      avgProfit
    };
  }).sort((a, b) => a.hour - b.hour);
}

// Analyse des périodes de drawdown
export function analyzeDrawdownPeriods(trades: Trade[], initialBalance: number): DrawdownPeriod[] {
  const drawdowns: DrawdownPeriod[] = [];
  let peak = initialBalance;
  let peakDate = trades[0]?.time || new Date();
  let inDrawdown = false;
  let drawdownStart: Date | null = null;
  let maxDrawdownDepth = 0;

  trades.forEach(trade => {
    if (trade.balance > peak) {
      // Nouveau sommet
      if (inDrawdown && drawdownStart) {
        // Fin du drawdown
        const recoveryDays = (trade.time.getTime() - peakDate.getTime()) / (1000 * 60 * 60 * 24);
        const drawdownDays = (peakDate.getTime() - drawdownStart.getTime()) / (1000 * 60 * 60 * 24);
        
        drawdowns.push({
          start: drawdownStart,
          end: trade.time,
          depth: maxDrawdownDepth,
          duration: drawdownDays,
          recovery: recoveryDays - drawdownDays
        });
        
        inDrawdown = false;
        maxDrawdownDepth = 0;
      }
      peak = trade.balance;
      peakDate = trade.time;
    } else if (trade.balance < peak) {
      // En drawdown
      if (!inDrawdown) {
        inDrawdown = true;
        drawdownStart = trade.time;
      }
      
      const currentDrawdown = ((peak - trade.balance) / peak) * 100;
      if (currentDrawdown > maxDrawdownDepth) {
        maxDrawdownDepth = currentDrawdown;
      }
    }
  });

  return drawdowns.sort((a, b) => b.depth - a.depth).slice(0, 10); // Top 10 drawdowns
}

// Calcul de la série de pertes consécutives
export function calculateConsecutiveLosses(trades: Trade[]): number {
  let maxLosses = 0;
  let currentLosses = 0;

  trades.forEach(trade => {
    if (trade.profit < 0) {
      currentLosses++;
      if (currentLosses > maxLosses) {
        maxLosses = currentLosses;
      }
    } else {
      currentLosses = 0;
    }
  });

  return maxLosses;
}

// Temps moyen de récupération après un drawdown
export function calculateAverageRecoveryTime(drawdowns: DrawdownPeriod[]): number {
  if (drawdowns.length === 0) return 0;
  const totalRecovery = drawdowns.reduce((sum, dd) => sum + dd.recovery, 0);
  return totalRecovery / drawdowns.length;
}

// Analyse des jours de la semaine
export function analyzeWeekdayPerformance(trades: Trade[]): { day: string; profit: number; trades: number; winRate: number }[] {
  const weekdays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const weekdayData: { [key: number]: Trade[] } = {};

  for (let i = 0; i < 7; i++) {
    weekdayData[i] = [];
  }

  trades.forEach(trade => {
    const day = trade.time.getDay();
    weekdayData[day].push(trade);
  });

  return Object.keys(weekdayData).map(dayStr => {
    const dayNum = parseInt(dayStr);
    const dayTrades = weekdayData[dayNum];
    
    if (dayTrades.length === 0) {
      return { day: weekdays[dayNum], profit: 0, trades: 0, winRate: 0 };
    }

    const profit = dayTrades.reduce((sum, t) => sum + t.profit, 0);
    const winningTrades = dayTrades.filter(t => t.profit > 0).length;
    const winRate = (winningTrades / dayTrades.length) * 100;

    return {
      day: weekdays[dayNum],
      profit,
      trades: dayTrades.length,
      winRate
    };
  });
}

// Calcul du ratio de récupération (Recovery Factor)
export function calculateRecoveryFactor(totalProfit: number, maxDrawdown: number): number {
  if (maxDrawdown === 0) return 0;
  return totalProfit / maxDrawdown;
}

// Calcul du Profit-to-Drawdown Ratio
export function calculateProfitToDrawdownRatio(trades: Trade[], initialBalance: number): number {
  const totalProfit = trades.reduce((sum, t) => sum + t.profit, 0);
  
  let maxDrawdown = 0;
  let peak = initialBalance;
  
  trades.forEach(trade => {
    if (trade.balance > peak) peak = trade.balance;
    const drawdown = peak - trade.balance;
    if (drawdown > maxDrawdown) maxDrawdown = drawdown;
  });

  return maxDrawdown === 0 ? 0 : totalProfit / maxDrawdown;
}
