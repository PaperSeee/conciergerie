'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import { FaComments, FaHome, FaBroom, FaCamera, FaStar, FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      icon: <FaComments />,
      title: 'Communication 24/7',
      description: 'Réponses instantanées à vos voyageurs en français et anglais',
    },
    {
      icon: <FaHome />,
      title: 'Accueil Premium',
      description: 'Check-in personnalisé et remise des clés en main propre',
    },
    {
      icon: <FaBroom />,
      title: 'Ménage 5 étoiles',
      description: 'Nettoyage professionnel et changement du linge premium',
    },
    {
      icon: <FaCamera />,
      title: 'Photos Pro',
      description: 'Shooting professionnel pour maximiser vos réservations',
    },
  ]

  const stats = [
    { value: '98%', label: 'Taux de satisfaction' },
    { value: '+35%', label: 'Revenus en moyenne' },
    { value: '2h', label: 'Temps de réponse' },
    { value: '100+', label: 'Clients satisfaits' },
  ]

  const benefits = [
    'Tarifs transparents sans frais cachés',
    'Service dédié à votre appartement unique',
    'Expertise du marché Airbnb bruxellois',
    'Optimisation continue de vos revenus',
    'Disponibilité 7j/7 même les jours fériés',
    'Aucun engagement de durée',
  ]

  return (
    <>
      {/* Hero Unique et Organique */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        {/* Formes organiques animées */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-neutral-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-neutral-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge organique */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white px-5 py-2.5 rounded-full mb-8 shadow-sm border border-neutral-100"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-neutral-700">Disponible maintenant</span>
            </motion.div>

            <h1 className="mb-8 text-neutral-900">
              Votre appartement Airbnb
              <br />
              <span className="relative inline-block">
                géré avec passion
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 100 8 150 6C200 4 250 10 298 6" stroke="#525252" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Nous sommes une petite équipe passionnée qui traite chaque appartement 
              comme s'il était le nôtre. Service personnalisé, tarifs honnêtes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-10 py-4"
                >
                  <span>Discutons de votre projet</span>
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Comment ça marche ?
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats humanisées */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-neutral-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Premium */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-6">Service tout-en-un</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Une solution complète pour gérer votre appartement Airbnb sans effort
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Voir tous les services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8">Pourquoi nous choisir ?</h2>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Nous nous spécialisons exclusivement dans les propriétaires d'un seul appartement.
                Votre bien reçoit l'attention qu'il mérite.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-neutral-700 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-lg text-neutral-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">Prêt à maximiser vos revenus ?</h2>
            <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
              Rejoignez des centaines de propriétaires satisfaits qui nous font confiance
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-neutral-900 px-12 py-5 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all"
              >
                Démarrer gratuitement
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
