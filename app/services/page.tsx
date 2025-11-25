'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaComments, FaKey, FaBroom, FaCamera, FaCalendar, FaStar, FaGift, FaChartLine } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaComments />,
      title: 'Communication 24/7',
      description: 'Réponses professionnelles à vos voyageurs en moins de 2h, 7j/7, en français et anglais. Gestion des demandes de réservation, questions pré-arrivée et pendant le séjour.',
      features: [
        'Réponse sous 2h maximum',
        'Communication en français et anglais',
        'Disponibilité 7j/7',
        'Validation des demandes de réservation',
      ],
    },
    {
      icon: <FaKey />,
      title: 'Check-in / Check-out',
      description: 'Accueil personnalisé de vos voyageurs avec remise des clés en main propre. Présentation du logement et de ses équipements. État des lieux d\'entrée et de sortie.',
      features: [
        'Accueil en personne',
        'Remise des clés sécurisée',
        'Visite complète du logement',
        'État des lieux détaillé',
      ],
    },
    {
      icon: <FaBroom />,
      title: 'Ménage Premium',
      description: 'Nettoyage professionnel et complet de votre appartement entre chaque séjour. Changement et lavage du linge de lit et de toilette. Contrôle qualité systématique.',
      features: [
        'Ménage complet professionnel',
        'Changement du linge',
        'Lavage et repassage inclus',
        'Contrôle qualité photo',
      ],
    },
    {
      icon: <FaChartLine />,
      title: 'Optimisation continue',
      description: 'Amélioration continue de votre annonce Airbnb : titre accrocheur, description optimisée, tarification dynamique, gestion du calendrier et des disponibilités.',
      features: [
        'Rédaction optimisée SEO',
        'Tarification dynamique',
        'Gestion du calendrier',
        'Conseils d\'amélioration',
      ],
    },
    {
      icon: <FaCamera />,
      title: 'Photos Pro',
      description: 'Séance photo professionnelle de votre bien avec matériel haut de gamme. Retouches et optimisation des images pour maximiser l\'attractivité de votre annonce.',
      features: [
        'Photographe professionnel',
        'Matériel haut de gamme',
        '20-30 photos retouchées',
        'Mise en valeur du bien',
      ],
    },
    {
      icon: <FaCalendar />,
      title: 'Gestion du calendrier',
      description: 'Synchronisation multi-plateformes, optimisation des prix selon la saison, gestion des périodes de blocage et maintenance de votre logement.',
      features: [
        'Synchronisation calendriers',
        'Prix dynamiques',
        'Gestion des blocages',
        'Planification entretien',
      ],
    },
    {
      icon: <FaGift />,
      title: 'Packs d\'accueil',
      description: 'Création de packs d\'accueil personnalisés pour vos voyageurs : produits d\'hygiène, snacks de bienvenue, guide local, recommandations personnalisées.',
      features: [
        'Produits de qualité',
        'Guide local personnalisé',
        'Recommandations ciblées',
        'Présentation soignée',
      ],
    },
    {
      icon: <FaStar />,
      title: 'Gestion des avis',
      description: 'Réponse professionnelle à tous les commentaires, positifs comme négatifs. Stratégie pour améliorer votre note globale et votre réputation sur Airbnb.',
      features: [
        'Réponses sous 24h',
        'Gestion des avis négatifs',
        'Amélioration de la note',
        'Stratégie de réputation',
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-neutral-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
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
              <FaStar className="text-neutral-700" />
              <span className="text-sm font-medium text-neutral-700">Service tout-en-un</span>
            </motion.div>

            <h1 className="mb-6 text-neutral-900">
              Services complets pour
              <br />
              <span className="relative inline-block">
                votre appartement
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 100 8 150 6C200 4 250 10 298 6" stroke="#525252" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Une gestion de A à Z pour maximiser vos revenus et vous libérer de toutes contraintes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-neutral-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-neutral-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">{service.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">Prêt à simplifier votre vie ?</h2>
            <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
              Appelez-nous au 0489 57 65 65 ou remplissez notre formulaire
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-neutral-900 px-12 py-5 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              >
                Demander un devis gratuit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
