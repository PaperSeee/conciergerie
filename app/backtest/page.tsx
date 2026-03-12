'use client';

import React, { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import MetricCard from '@/components/MetricCard';
import YearlyTable from '@/components/YearlyTable';
import MonthlyHeatmap from '@/components/MonthlyHeatmap';
import HourlyChart from '@/components/HourlyChart';
import DrawdownAnalysis from '@/components/DrawdownAnalysis';
import { parseBacktestHTML } from '@/lib/backtestParser';
import {
  analyzeYearlyPerformance,
  analyzeMonthlyReturns,
  analyzeHourlyPerformance,
  analyzeDrawdownPeriods,
  calculateSharpeRatio,
  calculateConsecutiveLosses,
  calculateAverageRecoveryTime,
  calculateRecoveryFactor,
  calculateProfitToDrawdownRatio,
  analyzeWeekdayPerformance
} from '@/lib/backtestAnalytics';

export default function BacktestAnalyzer() {
  const [backtestData, setBacktestData] = useState<any>(null);
  const [analytics, setAnalytics] = useState<any>(null);

  const handleFileUploaded = (content: string) => {
    try {
      const data = parseBacktestHTML(content);
      setBacktestData(data);

      // Calculer toutes les analyses
      const yearlyStats = analyzeYearlyPerformance(data.trades, data.summary.initialDeposit);
      const monthlyReturns = analyzeMonthlyReturns(data.trades);
      const hourlyStats = analyzeHourlyPerformance(data.trades);
      const drawdowns = analyzeDrawdownPeriods(data.trades, data.summary.initialDeposit);
      const sharpeRatio = calculateSharpeRatio(data.trades);
      const maxConsecutiveLosses = calculateConsecutiveLosses(data.trades);
      const avgRecoveryTime = calculateAverageRecoveryTime(drawdowns);
      const recoveryFactor = calculateRecoveryFactor(data.summary.totalNetProfit, data.summary.maxDrawdown);
      const profitToDrawdown = calculateProfitToDrawdownRatio(data.trades, data.summary.initialDeposit);
      const weekdayStats = analyzeWeekdayPerformance(data.trades);

      setAnalytics({
        yearlyStats,
        monthlyReturns,
        hourlyStats,
        drawdowns,
        sharpeRatio,
        maxConsecutiveLosses,
        avgRecoveryTime,
        recoveryFactor,
        profitToDrawdown,
        weekdayStats
      });
    } catch (error) {
      console.error('Erreur lors de l\'analyse:', error);
      alert('Erreur lors de l\'analyse du fichier. Assurez-vous qu\'il s\'agit d\'un fichier StrategyTester.htm valide.');
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  if (!backtestData) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📊 Analyseur de Backtest MT4
            </h1>
            <p className="text-lg text-gray-600">
              Téléchargez votre fichier StrategyTester.htm pour obtenir une analyse complète
            </p>
          </div>
          
          <FileUpload onFileUploaded={handleFileUploaded} />
        </div>
      </div>
    );
  }

  const { summary, trades } = backtestData;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Analyse de Backtest: {summary.symbol}
            </h1>
            <p className="text-gray-600">
              {summary.dateRange.start.toLocaleDateString('fr-FR')} - {summary.dateRange.end.toLocaleDateString('fr-FR')}
            </p>
          </div>
          <button
            onClick={() => {
              setBacktestData(null);
              setAnalytics(null);
            }}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Nouveau fichier
          </button>
        </div>

        {/* Métriques principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <MetricCard
            title="Profit Total Net"
            value={formatCurrency(summary.totalNetProfit)}
            trend={summary.totalNetProfit >= 0 ? 'up' : 'down'}
            icon="💰"
          />
          <MetricCard
            title="Ratio de Sharpe"
            value={analytics.sharpeRatio.toFixed(2)}
            subtitle={analytics.sharpeRatio > 1 ? 'Excellent' : analytics.sharpeRatio > 0.5 ? 'Bon' : 'À améliorer'}
            trend={analytics.sharpeRatio > 1 ? 'up' : analytics.sharpeRatio > 0 ? 'neutral' : 'down'}
            icon="📈"
          />
          <MetricCard
            title="Profit Factor"
            value={summary.profitFactor.toFixed(2)}
            subtitle={`${summary.profitTrades} wins / ${summary.lossTrades} losses`}
            trend={summary.profitFactor > 1.5 ? 'up' : summary.profitFactor > 1 ? 'neutral' : 'down'}
            icon="🎯"
          />
          <MetricCard
            title="Win Rate"
            value={formatPercent(summary.profitTradesPercent)}
            subtitle={`${summary.totalTrades} trades au total`}
            trend={summary.profitTradesPercent > 50 ? 'up' : 'down'}
            icon="✅"
          />
        </div>

        {/* Métriques secondaires */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <MetricCard
            title="Drawdown Max"
            value={formatPercent(summary.maxDrawdownPercent)}
            subtitle={formatCurrency(summary.maxDrawdown)}
            trend="down"
            icon="📉"
          />
          <MetricCard
            title="Recovery Factor"
            value={analytics.recoveryFactor.toFixed(2)}
            subtitle="Profit / Max DD"
            trend={analytics.recoveryFactor > 3 ? 'up' : 'neutral'}
            icon="🔄"
          />
          <MetricCard
            title="Avg Win / Avg Loss"
            value={(summary.averageProfitTrade / Math.abs(summary.averageLossTrade)).toFixed(2)}
            subtitle={`${formatCurrency(summary.averageProfitTrade)} / ${formatCurrency(summary.averageLossTrade)}`}
            trend={summary.averageProfitTrade > Math.abs(summary.averageLossTrade) ? 'up' : 'down'}
            icon="⚖️"
          />
          <MetricCard
            title="Expected Payoff"
            value={formatCurrency(summary.expectedPayoff)}
            subtitle="Par trade"
            trend={summary.expectedPayoff > 0 ? 'up' : 'down'}
            icon="💵"
          />
        </div>

        {/* Tableau annuel */}
        <div className="mb-8">
          <YearlyTable data={analytics.yearlyStats} />
        </div>

        {/* Heatmap mensuelle */}
        <div className="mb-8">
          <MonthlyHeatmap data={analytics.monthlyReturns} />
        </div>

        {/* Analyse du risque */}
        <div className="mb-8">
          <DrawdownAnalysis
            drawdowns={analytics.drawdowns}
            maxConsecutiveLosses={analytics.maxConsecutiveLosses}
            avgRecoveryTime={analytics.avgRecoveryTime}
          />
        </div>

        {/* Performance horaire */}
        <div className="mb-8">
          <HourlyChart data={analytics.hourlyStats} />
        </div>

        {/* Performance par jour de la semaine */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance par Jour de la Semaine</h3>
            <div className="grid grid-cols-7 gap-2">
              {analytics.weekdayStats.map((day: any) => (
                <div key={day.day} className="text-center">
                  <div className={`p-4 rounded-lg ${
                    day.profit > 0 ? 'bg-green-100' : day.profit < 0 ? 'bg-red-100' : 'bg-gray-100'
                  }`}>
                    <p className="text-xs font-medium text-gray-600 mb-1">{day.day}</p>
                    <p className={`text-lg font-bold ${
                      day.profit > 0 ? 'text-green-600' : day.profit < 0 ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      ${day.profit.toFixed(0)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{day.trades} trades</p>
                    <p className="text-xs text-gray-600">{day.winRate.toFixed(0)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommandations */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">🎯 Recommandations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Points Forts 💪</h4>
              <ul className="space-y-1 text-sm">
                {summary.profitFactor > 1.5 && <li>✓ Excellent Profit Factor ({summary.profitFactor.toFixed(2)})</li>}
                {analytics.sharpeRatio > 1 && <li>✓ Très bon Sharpe Ratio ({analytics.sharpeRatio.toFixed(2)})</li>}
                {summary.maxDrawdownPercent < 10 && <li>✓ Drawdown bien contrôlé (&lt;10%)</li>}
                {summary.profitTradesPercent > 50 && <li>✓ Win rate supérieur à 50%</li>}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Points à Améliorer 🔧</h4>
              <ul className="space-y-1 text-sm">
                {summary.profitFactor < 1.3 && <li>⚠ Profit Factor faible - Réduire les pertes</li>}
                {analytics.sharpeRatio < 0.5 && <li>⚠ Sharpe Ratio bas - Optimiser le risk/reward</li>}
                {summary.maxDrawdownPercent > 20 && <li>⚠ Drawdown élevé - Réduire la taille des positions</li>}
                {analytics.maxConsecutiveLosses > 10 && <li>⚠ Trop de pertes consécutives - Revoir la stratégie</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
