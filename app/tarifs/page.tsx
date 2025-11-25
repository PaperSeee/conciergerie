'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PricingCard from '@/components/PricingCard'
import { FaCheckCircle } from 'react-icons/fa'

export default function Tarifs() {
  const plans = [
    {
      title: 'Commission',
      price: '15-18%',
      description: 'des revenus générés par location',
      features: [
        'Gestion complète des messages',
        'Check-in et check-out',
        'Ménage professionnel',
        'Gestion du calendrier',
        'Optimisation de l\'annonce',
        'Support 7j/7',
        'Pas de frais fixes',
        'Idéal pour débuter',
      ],
      highlighted: false,
    },
    {
      title: 'Pack Mensuel',
      price: '299€',
      description: 'par mois, tarif fixe',
      features: [
        'Tous les services inclus',
        'Gestion illimitée',
        'Ménage après chaque séjour',
        'Photos professionnelles (1x)',
        'Pack d\'accueil premium',
        'Tarification dynamique',
        'Rapport mensuel détaillé',
        'Prévisibilité des coûts',
      ],
      highlighted: true,
    },
    {
      title: 'Full Premium',
      price: 'Sur devis',
      description: 'service VIP sur-mesure',
      features: [
        'Service 100% personnalisé',
        'Conciergerie VIP',
        'Décoration et aménagement',
        'Stock permanent de consommables',
        'Maintenance préventive',
        'Multi-plateformes (Airbnb, Booking, etc.)',
        'Reporting en temps réel',
        'Assistance juridique',
      ],
      highlighted: false,
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-neutral-900">
              Tarifs transparents
              <br />
              <span className="relative inline-block">
                et adaptés à vous
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 100 8 150 6C200 4 250 10 298 6" stroke="#FF385C" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choisissez la formule qui correspond le mieux à vos besoins et à votre budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Quelle formule choisir ?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="font-bold text-xl mb-3 text-primary-600">Commission</h3>
              <p className="text-gray-700">
                Parfait si vous débutez sur Airbnb ou si votre taux d'occupation est encore faible.
                Vous ne payez que lorsque votre bien génère des revenus.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-6 rounded-xl border-2 border-primary-300"
            >
              <h3 className="font-bold text-xl mb-3 text-primary-600">Pack Mensuel ⭐</h3>
              <p className="text-gray-700">
                Le meilleur rapport qualité-prix pour un appartement bien loué. Budget fixe et
                maîtrisé, services premium inclus.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="font-bold text-xl mb-3 text-primary-600">Full Premium</h3>
              <p className="text-gray-700">
                Pour les propriétaires exigeants qui veulent un service haut de gamme et sur-mesure.
                Gestion complète sans aucune intervention de votre part.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Questions fréquentes</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              {
                q: 'Y a-t-il des frais cachés ?',
                a: 'Absolument aucun. Les tarifs affichés sont tout compris. Le seul coût supplémentaire éventuel concerne le ménage si vous optez pour des prestations spécifiques.',
              },
              {
                q: 'Puis-je changer de formule en cours d\'année ?',
                a: 'Oui, vous pouvez passer d\'une formule à une autre avec un préavis de 30 jours.',
              },
              {
                q: 'Comment est calculé le taux de commission ?',
                a: 'Le taux varie de 15% à 18% selon le niveau de revenus générés. Plus votre bien performe, plus le taux est avantageux.',
              },
              {
                q: 'Le Pack Mensuel est-il sans engagement ?',
                a: 'Engagement minimum de 3 mois, puis résiliation possible avec préavis d\'1 mois.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
