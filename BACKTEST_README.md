# 📊 Analyseur de Backtest MT4

Un outil professionnel pour analyser en profondeur vos backtests MetaTrader 4.

## 🎯 Fonctionnalités

### Dashboard Complet
- **Métriques Clés** : Profit net, Sharpe ratio, Profit factor, Win rate
- **Analyse Avancée** : Recovery factor, Profit-to-Drawdown ratio, Expected payoff

### Analyses Détaillées

#### 📅 Performance Annuelle
Tableau récapitulatif avec pour chaque année :
- Profit net
- Drawdown maximum
- Profit factor
- Nombre de trades
- Win rate

#### 🌡️ Heatmap Mensuelle
Matrice colorée montrant les rendements mensuels en pourcentage :
- Vert : Mois profitables
- Rouge : Mois perdants
- Code couleur selon l'intensité de la performance

#### 📉 Analyse du Risque
- **Top 10 des Drawdowns** avec dates, profondeur et temps de récupération
- **Séries de Pertes** : Nombre maximum de pertes consécutives
- **Temps de Récupération** : Moyenne après un drawdown
- **Insights Automatiques** avec recommandations

#### 🕐 Performance Horaire
- Graphique à barres pour chaque heure (0-23h)
- Identification des meilleures et pires heures de trading
- Stats détaillées : profit, win rate, moyenne par heure
- Tableau détaillé accessible en un clic

#### 📆 Performance Hebdomadaire
- Analyse par jour de la semaine
- Profit total, nombre de trades et win rate par jour
- Identification des meilleurs jours pour trader

#### 📊 Métriques Professionnelles
- **Sharpe Ratio** : Mesure du rendement ajusté au risque
- **Recovery Factor** : Capacité de récupération après les pertes
- **Profit-to-Drawdown Ratio** : Ratio profit/risque
- **Expected Payoff** : Gain moyen par trade

### 💡 Recommandations Intelligentes
- Identification automatique des points forts
- Suggestions d'amélioration basées sur les métriques
- Alertes sur les zones à risque

## 🚀 Comment utiliser

### 1. Obtenir votre fichier de backtest

1. Ouvrez **MetaTrader 4**
2. Allez dans **View** → **Strategy Tester** (ou `Ctrl+R`)
3. Lancez votre backtest
4. Clic droit sur un résultat → **Save as Report**
5. Choisissez le format **HTML** et sauvegardez

### 2. Analyser votre backtest

1. Naviguez vers `/backtest` dans l'application
2. **Glissez-déposez** votre fichier `StrategyTester.htm`
   - Ou cliquez sur "Choisir un fichier"
3. L'analyse se lance **automatiquement**
4. Explorez tous les tableaux et graphiques

### 3. Mettre à jour avec un nouveau fichier

- Cliquez sur **"Nouveau fichier"** en haut à droite
- Uploadez votre nouveau rapport
- Les analyses se mettent à jour instantanément

## 📁 Structure du Projet

```
lib/
├── backtestParser.ts       # Parse les fichiers HTML MT4
└── backtestAnalytics.ts    # Calculs et analyses avancées

components/
├── FileUpload.tsx          # Upload avec drag & drop
├── MetricCard.tsx          # Cartes de métriques
├── YearlyTable.tsx         # Tableau performance annuelle
├── MonthlyHeatmap.tsx      # Heatmap mensuelle
├── HourlyChart.tsx         # Graphique horaire
└── DrawdownAnalysis.tsx    # Analyse des drawdowns

app/
└── backtest/
    └── page.tsx            # Page principale du dashboard
```

## 🎨 Fonctionnalités Techniques

### Parser Intelligent
- Extraction automatique de toutes les métriques MT4
- Support des formats HTML en français
- Gestion robuste des données manquantes

### Analyses Statistiques
- Calcul du Sharpe Ratio annualisé
- Détection automatique des périodes de drawdown
- Analyse des patterns temporels (horaires, hebdomadaires)
- Statistiques de séries (gains/pertes consécutifs)

### Interface Utilisateur
- **Responsive Design** : Fonctionne sur mobile, tablette et desktop
- **Animations Fluides** : Transitions élégantes
- **Code Couleur Intuitif** : Vert = profit, Rouge = perte
- **Tooltips Informatifs** : Survol pour détails supplémentaires

## 🔧 Personnalisation

### Modifier le seuil du Sharpe Ratio
Dans `backtestAnalytics.ts` :
```typescript
calculateSharpeRatio(trades, 0.02) // 0.02 = 2% taux sans risque
```

### Ajuster les couleurs de la heatmap
Dans `MonthlyHeatmap.tsx`, modifiez la fonction `getColor()`.

### Changer le nombre de top drawdowns
Dans `backtestAnalytics.ts` :
```typescript
return drawdowns.slice(0, 10); // Affiche top 10
```

## 📈 Interprétation des Métriques

### Sharpe Ratio
- **> 1.0** : Excellent
- **0.5 - 1.0** : Bon
- **< 0.5** : À améliorer

### Profit Factor
- **> 2.0** : Excellent
- **1.5 - 2.0** : Très bon
- **1.0 - 1.5** : Acceptable
- **< 1.0** : Perdant

### Drawdown Maximum
- **< 10%** : Excellent contrôle du risque
- **10% - 20%** : Acceptable
- **> 20%** : Risqué

### Win Rate
- **> 50%** : Positif (avec bon risk/reward)
- **< 50%** : Acceptable si ratio gain/perte > 2

## 🆕 Prochaines Fonctionnalités

- [ ] Export PDF du rapport complet
- [ ] Comparaison de plusieurs backtests
- [ ] Graphique d'équité interactif
- [ ] Analyse Monte Carlo
- [ ] Détection de patterns de trading
- [ ] Sauvegarde des analyses dans le navigateur

## 💼 Cas d'Usage

### Pour les Traders
- Valider une stratégie avant le trading réel
- Identifier les meilleures heures/jours de trading
- Optimiser le money management

### Pour les Développeurs d'EA
- Analyser la robustesse d'un Expert Advisor
- Détecter les faiblesses dans différentes conditions
- Comparer plusieurs versions d'un algorithme

### Pour les Gestionnaires de Fonds
- Présenter les performances aux investisseurs
- Évaluer le risque d'une stratégie
- Documenter les résultats de backtests

## 📞 Support

Pour toute question ou suggestion d'amélioration, n'hésitez pas à créer une issue sur le repository.

---

**Fait avec ❤️ pour les traders algorithmiques**
