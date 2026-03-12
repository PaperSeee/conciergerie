'use client';

import React from 'react';
import { HourlyStats } from '@/lib/backtestAnalytics';

interface HourlyChartProps {
  data: HourlyStats[];
}

export default function HourlyChart({ data }: HourlyChartProps) {
  // Trouver le profit max et min pour la mise à l'échelle
  const maxProfit = Math.max(...data.map(d => d.profit));
  const minProfit = Math.min(...data.map(d => d.profit));
  const range = maxProfit - minProfit;

  const getBarHeight = (profit: number) => {
    if (range === 0) return 50;
    return ((profit - minProfit) / range) * 100;
  };

  const getBestHours = () => {
    return data
      .filter(d => d.trades > 0)
      .sort((a, b) => b.profit - a.profit)
      .slice(0, 3)
      .map(d => d.hour);
  };

  const getWorstHours = () => {
    return data
      .filter(d => d.trades > 0)
      .sort((a, b) => a.profit - b.profit)
      .slice(0, 3)
      .map(d => d.hour);
  };

  const bestHours = getBestHours();
  const worstHours = getWorstHours();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Horaire</h3>
      
      <div className="space-y-6">
        {/* Graphique à barres */}
        <div className="relative h-64">
          <div className="absolute inset-0 flex items-end justify-between px-2">
            {data.map(hour => (
              <div key={hour.hour} className="flex-1 flex flex-col items-center justify-end px-0.5">
                <div className="w-full relative group">
                  {/* Barre */}
                  <div
                    className={`w-full rounded-t transition-all ${
                      hour.profit > 0 ? 'bg-green-500 hover:bg-green-600' : 
                      hour.profit < 0 ? 'bg-red-500 hover:bg-red-600' : 
                      'bg-gray-300'
                    }`}
                    style={{ 
                      height: `${getBarHeight(hour.profit)}%`,
                      minHeight: hour.trades > 0 ? '2px' : '0'
                    }}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    <div className="font-bold">{hour.hour}:00</div>
                    <div>Profit: ${hour.profit.toFixed(2)}</div>
                    <div>Trades: {hour.trades}</div>
                    <div>Win Rate: {hour.winRate.toFixed(1)}%</div>
                    <div>Avg: ${hour.avgProfit.toFixed(2)}</div>
                  </div>
                </div>
                
                {/* Label heure */}
                <div className={`text-xs mt-1 ${
                  bestHours.includes(hour.hour) ? 'text-green-600 font-bold' :
                  worstHours.includes(hour.hour) ? 'text-red-600 font-bold' :
                  'text-gray-500'
                }`}>
                  {hour.hour}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500 mb-1">Meilleures Heures</p>
            <div className="flex flex-wrap gap-1">
              {bestHours.map(hour => (
                <span key={hour} className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                  {hour}:00
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500 mb-1">Pires Heures</p>
            <div className="flex flex-wrap gap-1">
              {worstHours.map(hour => (
                <span key={hour} className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                  {hour}:00
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Total Heures Actives</p>
            <p className="text-2xl font-bold text-gray-900">
              {data.filter(d => d.trades > 0).length}
            </p>
          </div>
        </div>

        {/* Tableau détaillé */}
        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            Voir les détails par heure
          </summary>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left font-medium text-gray-500">Heure</th>
                  <th className="px-3 py-2 text-right font-medium text-gray-500">Profit</th>
                  <th className="px-3 py-2 text-right font-medium text-gray-500">Trades</th>
                  <th className="px-3 py-2 text-right font-medium text-gray-500">Win Rate</th>
                  <th className="px-3 py-2 text-right font-medium text-gray-500">Avg Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.filter(d => d.trades > 0).map(hour => (
                  <tr key={hour.hour} className="hover:bg-gray-50">
                    <td className="px-3 py-2 font-medium">{hour.hour}:00</td>
                    <td className={`px-3 py-2 text-right font-semibold ${
                      hour.profit >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${hour.profit.toFixed(2)}
                    </td>
                    <td className="px-3 py-2 text-right">{hour.trades}</td>
                    <td className="px-3 py-2 text-right">{hour.winRate.toFixed(1)}%</td>
                    <td className={`px-3 py-2 text-right ${
                      hour.avgProfit >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${hour.avgProfit.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}
