'use client';

import React from 'react';
import { MonthlyReturn } from '@/lib/backtestAnalytics';

interface MonthlyHeatmapProps {
  data: MonthlyReturn[];
}

export default function MonthlyHeatmap({ data }: MonthlyHeatmapProps) {
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  
  // Organiser les données par année et mois
  const heatmapData: { [year: number]: { [month: number]: number } } = {};
  
  data.forEach(item => {
    if (!heatmapData[item.year]) {
      heatmapData[item.year] = {};
    }
    heatmapData[item.year][item.month] = item.return;
  });

  const years = Object.keys(heatmapData).map(Number).sort();

  // Fonction pour obtenir la couleur en fonction du rendement
  const getColor = (value: number | undefined) => {
    if (value === undefined) return 'bg-gray-100';
    if (value > 10) return 'bg-green-600';
    if (value > 5) return 'bg-green-500';
    if (value > 2) return 'bg-green-400';
    if (value > 0) return 'bg-green-200';
    if (value === 0) return 'bg-gray-200';
    if (value > -2) return 'bg-red-200';
    if (value > -5) return 'bg-red-400';
    if (value > -10) return 'bg-red-500';
    return 'bg-red-600';
  };

  const getTextColor = (value: number | undefined) => {
    if (value === undefined) return 'text-gray-400';
    if (Math.abs(value) > 5) return 'text-white';
    return 'text-gray-900';
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Matrice de Performance Mensuelle (%)</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase">Année</th>
              {months.map(month => (
                <th key={month} className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase">
                  {month}
                </th>
              ))}
              <th className="px-2 py-2 text-right text-xs font-medium text-gray-500 uppercase">Total</th>
            </tr>
          </thead>
          <tbody>
            {years.map(year => {
              const yearData = heatmapData[year];
              const yearTotal = Object.values(yearData).reduce((sum, val) => sum + val, 0);
              
              return (
                <tr key={year}>
                  <td className="px-2 py-2 font-medium text-sm text-gray-900">{year}</td>
                  {[...Array(12)].map((_, monthIndex) => {
                    const value = yearData[monthIndex];
                    return (
                      <td
                        key={monthIndex}
                        className={`px-2 py-3 text-center text-xs font-medium ${getColor(value)} ${getTextColor(value)}`}
                      >
                        {value !== undefined ? value.toFixed(1) : '-'}
                      </td>
                    );
                  })}
                  <td className={`px-2 py-3 text-right text-sm font-bold ${
                    yearTotal >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {yearTotal.toFixed(1)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-end space-x-4 text-xs text-gray-600">
        <span>Légende:</span>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-600 rounded"></div>
          <span>&gt;10%</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-400 rounded"></div>
          <span>2-10%</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <span>0%</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-400 rounded"></div>
          <span>-2 à -10%</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-600 rounded"></div>
          <span>&lt;-10%</span>
        </div>
      </div>
    </div>
  );
}
