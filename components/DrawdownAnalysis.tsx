'use client';

import React from 'react';
import { DrawdownPeriod } from '@/lib/backtestAnalytics';

interface DrawdownAnalysisProps {
  drawdowns: DrawdownPeriod[];
  maxConsecutiveLosses: number;
  avgRecoveryTime: number;
}

export default function DrawdownAnalysis({ 
  drawdowns, 
  maxConsecutiveLosses, 
  avgRecoveryTime 
}: DrawdownAnalysisProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Analyse du Risque</h3>
      
      {/* Métriques principales */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Pire Drawdown</p>
          <p className="text-2xl font-bold text-red-600">
            {drawdowns[0] ? drawdowns[0].depth.toFixed(2) : '0.00'}%
          </p>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Pertes Consécutives Max</p>
          <p className="text-2xl font-bold text-orange-600">{maxConsecutiveLosses}</p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Temps Récupération Moyen</p>
          <p className="text-2xl font-bold text-blue-600">{avgRecoveryTime.toFixed(0)} jours</p>
        </div>
      </div>

      {/* Top 10 Drawdowns */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Top 10 des Périodes de Drawdown</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-500">#</th>
                <th className="px-4 py-2 text-left font-medium text-gray-500">Début</th>
                <th className="px-4 py-2 text-left font-medium text-gray-500">Fin</th>
                <th className="px-4 py-2 text-right font-medium text-gray-500">Profondeur</th>
                <th className="px-4 py-2 text-right font-medium text-gray-500">Durée</th>
                <th className="px-4 py-2 text-right font-medium text-gray-500">Récupération</th>
                <th className="px-4 py-2 text-right font-medium text-gray-500">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {drawdowns.map((dd, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{index + 1}</td>
                  <td className="px-4 py-3 text-gray-600">{formatDate(dd.start)}</td>
                  <td className="px-4 py-3 text-gray-600">{formatDate(dd.end)}</td>
                  <td className="px-4 py-3 text-right">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      dd.depth > 15 ? 'bg-red-100 text-red-800' :
                      dd.depth > 10 ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {dd.depth.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {dd.duration.toFixed(0)} j
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {dd.recovery.toFixed(0)} j
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-gray-900">
                    {(dd.duration + dd.recovery).toFixed(0)} j
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">💡 Insights</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          {drawdowns[0] && drawdowns[0].depth > 20 && (
            <li>⚠️ Attention: Le drawdown maximum dépasse 20%, envisagez de réduire la taille des positions.</li>
          )}
          {maxConsecutiveLosses > 10 && (
            <li>⚠️ {maxConsecutiveLosses} pertes consécutives est élevé. Vérifiez les conditions de marché lors de ces périodes.</li>
          )}
          {avgRecoveryTime > 30 && (
            <li>📊 Le temps de récupération moyen est de {avgRecoveryTime.toFixed(0)} jours. Patience requise après les pertes.</li>
          )}
          {drawdowns[0] && drawdowns[0].depth < 10 && (
            <li>✅ Excellent contrôle du risque avec un drawdown maximum inférieur à 10%.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
