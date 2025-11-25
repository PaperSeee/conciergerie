'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaHeart, FaUsers, FaTrophy, FaHandshake } from 'react-icons/fa'

export default function APropos() {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'Je suis passionné par l\'hospitalité et la satisfaction client',
    },
    {
      icon: <FaUsers />,
      title: 'Proximité',
      description: 'Relation directe et personnalisée avec chaque propriétaire',
    },
    {
      icon: <FaTrophy />,
      title: 'Excellence',
      description: 'Service de qualité professionnelle pour chaque prestation',
    },
    {
      icon: <FaHandshake />,
      title: 'Confiance',
      description: 'Transparence totale et engagement sur les résultats',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-neutral-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white px-5 py-2.5 rounded-full mb-8 shadow-sm border border-neutral-100"
            >
              <FaHeart className="text-neutral-700" />
              <span className="text-sm font-medium text-neutral-700">Notre histoire</span>
            </motion.div>

            <h1 className="mb-6 text-neutral-900">
              Une conciergerie
              <br />
              <span className="relative inline-block">
                qui vous comprend
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 100 8 150 6C200 4 250 10 298 6" stroke="#525252" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Spécialisés dans les propriétaires d'un seul appartement à Bruxelles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mon histoire */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center">Mon parcours</h2>
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                J'ai lancé MaConciergerie après avoir moi-même été propriétaire d'un appartement sur
                Airbnb. J'ai rapidement compris que la gestion quotidienne pouvait devenir
                chronophage : messages à toute heure, check-ins le weekend, coordination du ménage,
                gestion des imprévus...
              </p>
              <p>
                En cherchant une conciergerie pour m'aider, j'ai constaté que la plupart
                s'intéressaient uniquement aux grands portefeuilles de biens. Les tarifs étaient
                élevés, le service impersonnel, et je me sentais comme un client secondaire.
              </p>
              <p>
                C'est à ce moment que j'ai décidé de créer <strong>la conciergerie que j'aurais
                aimé avoir</strong> : spécialisée dans les petits propriétaires, avec un service
                personnalisé, des tarifs transparents et accessibles, et une vraie relation de
                confiance.
              </p>
              <p>
                Aujourd'hui, je mets mon expérience et ma passion au service de propriétaires comme
                vous, qui possèdent un seul appartement et veulent maximiser leurs revenus tout en
                gardant l'esprit tranquille.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mes valeurs */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Nos valeurs</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Ce qui guide notre travail au quotidien
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi spécialisé */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center">Pourquoi 100% petits propriétaires ?</h2>
            <div className="bg-neutral-100 p-10 rounded-3xl border-2 border-neutral-200">
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  <strong>Parce que vous méritez une attention particulière.</strong> Contrairement
                  aux investisseurs qui possèdent des dizaines d'appartements, vous avez un lien
                  émotionnel avec votre bien. C'est peut-être votre premier investissement, un
                  héritage familial, ou un projet que vous avez soigneusement aménagé.
                </p>
                <p>
                  <strong>Votre appartement est unique</strong>, et il mérite d'être traité comme
                  tel. Je refuse de le considérer comme un simple numéro dans un portefeuille.
                </p>
                <p>
                  <strong>Mes tarifs sont étudiés pour vous</strong> : pas besoin de gérer 10 biens
                  pour rentabiliser mes services. Un seul appartement à Bruxelles suffit.
                </p>
                <p>
                  <strong>Ma disponibilité est totale</strong> : avec un nombre limité de clients,
                  je peux répondre rapidement et personnaliser chaque prestation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">Discutons de votre projet</h2>
            <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
              Chaque appartement mérite une attention particulière
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-neutral-900 px-12 py-5 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              >
                Parlons de votre projet
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
