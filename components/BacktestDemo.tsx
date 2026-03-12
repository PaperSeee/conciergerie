'use client';

import React from 'react';
import Link from 'next/link';

export default function BacktestDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            📊 Analyseur de Backtest MT4
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transformez vos données de backtest en insights actionnables
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/backtest"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Commencer l'Analyse
            </Link>
            <a
              href="#features"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Voir les Fonctionnalités
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Analyse Complète</h3>
            <p className="text-gray-600">
              Performance annuelle, heatmap mensuelle, statistiques horaires et bien plus encore.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instantané</h3>
            <p className="text-gray-600">
              Uploadez votre fichier et obtenez votre analyse en quelques secondes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Recommandations</h3>
            <p className="text-gray-600">
              Insights automatiques et suggestions d'amélioration personnalisées.
            </p>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ce que vous obtenez
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📊</span> Analyses Visuelles
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Tableau de bord avec métriques clés (Sharpe, Profit Factor, Win Rate)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Heatmap mensuelle colorée par performance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Graphique de performance horaire interactif</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Analyse des jours de la semaine</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🔍</span> Analyses Avancées
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Top 10 des périodes de drawdown avec dates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Calcul du Sharpe Ratio annualisé</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Séries de pertes consécutives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Temps moyen de récupération</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Comment ça marche</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Exportez</h3>
              <p className="text-sm text-blue-100">
                Depuis MT4, sauvegardez votre backtest en HTML
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Uploadez</h3>
              <p className="text-sm text-blue-100">
                Glissez-déposez votre fichier dans l'application
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Analysez</h3>
              <p className="text-sm text-blue-100">
                L'outil génère automatiquement toutes les analyses
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Optimisez</h3>
              <p className="text-sm text-blue-100">
                Utilisez les insights pour améliorer votre stratégie
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à analyser votre stratégie ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            C'est gratuit, rapide et ne nécessite aucune inscription
          </p>
          <Link
            href="/backtest"
            className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Lancer l'Analyseur 🚀
          </Link>
        </div>
      </div>
    </div>
  );
}
