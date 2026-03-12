export const SAMPLE_BACKTEST_DATA = {
  summary: {
    symbol: "XAUUSD (Gold)",
    period: "30 Minutes (M30) 2021.01.04 - 2026.03.11",
    dateRange: { 
      start: new Date("2021-01-04"), 
      end: new Date("2026-03-11") 
    },
    initialDeposit: 50000,
    totalNetProfit: 23248.80,
    grossProfit: 116261.63,
    grossLoss: -93012.83,
    profitFactor: 1.25,
    expectedPayoff: 44.71,
    absoluteDrawdown: 4914.57,
    maxDrawdown: 7408.59,
    maxDrawdownPercent: 9.32,
    relativeDrawdown: 12.20,
    relativeDrawdownAmount: 6263.67,
    totalTrades: 520,
    shortPositions: 247,
    shortWinPercent: 29.96,
    longPositions: 273,
    longWinPercent: 45.42,
    profitTrades: 198,
    profitTradesPercent: 38.08,
    lossTrades: 322,
    lossTradesPercent: 61.92,
    largestProfitTrade: 1557.03,
    largestLossTrade: -784.92,
    averageProfitTrade: 587.18,
    averageLossTrade: -288.86
  },
  
  insights: {
    bestYear: 2025,
    worstYear: 2023,
    bestMonth: { year: 2025, month: 10, return: 28.5 },
    worstMonth: { year: 2023, month: 6, return: -15.3 },
    bestHour: 14,
    worstHour: 3,
    bestDay: "Vendredi",
    avgRecoveryDays: 12,
    maxConsecutiveLosses: 8
  }
};

// Exemples de données pour la démo
export const DEMO_YEARLY_STATS = [
  { year: 2021, netProfit: -1261.24, maxDrawdown: 8.5, profitFactor: 0.98, trades: 104, winRate: 35.6 },
  { year: 2022, netProfit: 1525.38, maxDrawdown: 7.2, profitFactor: 1.15, trades: 98, winRate: 38.8 },
  { year: 2023, netProfit: -3184.67, maxDrawdown: 12.2, profitFactor: 0.85, trades: 112, winRate: 32.1 },
  { year: 2024, netProfit: 8956.42, maxDrawdown: 6.8, profitFactor: 1.52, trades: 96, winRate: 44.8 },
  { year: 2025, netProfit: 15892.15, maxDrawdown: 5.1, profitFactor: 1.85, trades: 88, winRate: 48.9 },
  { year: 2026, netProfit: 1320.76, maxDrawdown: 4.2, profitFactor: 1.28, trades: 22, winRate: 40.9 }
];

export const DEMO_INSIGHTS = {
  strengths: [
    "Excellent Profit Factor en 2025 (1.85)",
    "Très bon Sharpe Ratio (1.43)",
    "Drawdown bien contrôlé (<10%)",
    "Tendance d'amélioration continue 2021-2025"
  ],
  
  improvements: [
    "Win rate bas (38%) - Optimiser les points d'entrée",
    "Année 2023 très négative - Analyser les conditions",
    "Ratio gains/pertes pourrait être meilleur",
    "Trop de trades perdants consécutifs (8 max)"
  ],
  
  recommendations: [
    "Éviter les trades entre 2h-6h du matin (horaires peu profitables)",
    "Favoriser les trades le vendredi (meilleur jour)",
    "Augmenter le take-profit pour améliorer le ratio",
    "Considérer un filtre additionnel pour réduire les faux signaux"
  ]
};
