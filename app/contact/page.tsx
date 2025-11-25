'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    if (!formData.nom || !formData.email || !formData.telephone) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setTimeout(() => {
      console.log('Formulaire soumis:', formData)
      setStatus('success')
      setFormData({ nom: '', email: '', telephone: '', adresse: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Téléphone',
      value: '0489 57 65 65',
      subtitle: 'Lun-Ven 9h-19h',
      color: 'blue',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'contact@alfred-conciergerie.be',
      subtitle: 'Réponse sous 24h',
      color: 'purple',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Zone',
      value: 'Bruxelles & Région',
      subtitle: 'Toute la région bruxelloise',
      color: 'pink',
    },
    {
      icon: FaClock,
      title: 'Disponibilité',
      value: '7 jours sur 7',
      subtitle: 'Service d\'urgence',
      color: 'green',
    },
  ]

  const guarantees = [
    'Réponse sous 24h maximum',
    'Premier rendez-vous gratuit',
    'Devis détaillé et transparent',
    'Aucun engagement',
    'Satisfaction 100% garantie',
  ]

  const faqItems = [
    {
      question: 'Sous combien de temps puis-je avoir une réponse ?',
      answer: 'Nous répondons à tous les messages sous 24 heures maximum, généralement bien plus rapidement. Pour les demandes urgentes, n\'hésitez pas à nous appeler directement au 0489 57 65 65.',
    },
    {
      question: 'Le premier rendez-vous est-il payant ?',
      answer: 'Non, le premier rendez-vous et l\'établissement du devis sont entièrement gratuits et sans aucun engagement de votre part.',
    },
    {
      question: 'Où intervenez-vous ?',
      answer: 'Nous intervenons principalement sur Bruxelles et toute la région bruxelloise. Pour d\'autres zones, contactez-nous pour étudier les possibilités ensemble.',
    },
    {
      question: 'Combien de temps faut-il pour démarrer ?',
      answer: 'Une fois que nous sommes d\'accord sur les modalités de collaboration, nous pouvons démarrer la gestion de votre appartement sous 7 jours seulement.',
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      pink: 'from-pink-500 to-pink-600',
      green: 'from-green-500 to-green-600',
    }
    return colors[color] || 'from-primary-500 to-primary-600'
  }

  return (
    <>
      {/* Hero Organique */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-neutral-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
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
              <FaEnvelope className="text-primary-500" />
              <span className="text-sm font-medium text-neutral-700">Réponse sous 24h</span>
            </motion.div>

            <h1 className="mb-6 text-neutral-900">
              Une question ?
              <br />
              <span className="relative inline-block">
                Parlons-en ensemble
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 100 8 150 6C200 4 250 10 298 6" stroke="#FF385C" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Contactez-nous par téléphone, email ou via le formulaire ci-dessous
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cartes de contact rapides */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-neutral-50 rounded-3xl p-6 border border-neutral-100 hover:shadow-xl transition-all duration-500 group text-center"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${getColorClasses(item.color)} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>
                  <h3 className="font-bold text-lg mb-1 text-neutral-900">{item.title}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{item.value}</p>
                  <p className="text-sm text-neutral-600">{item.subtitle}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulaire et Garanties */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
                <h2 className="text-3xl font-bold mb-3 text-neutral-900">
                  Envoyez-nous un message
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Remplissez ce formulaire, nous vous répondons rapidement
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nom" className="block text-base font-medium mb-2 text-neutral-800">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="input-premium"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-base font-medium mb-2 text-neutral-800">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-premium"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telephone" className="block text-base font-medium mb-2 text-neutral-800">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="input-premium"
                        placeholder="0489 57 65 65"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="adresse" className="block text-base font-medium mb-2 text-neutral-800">
                      Adresse de votre appartement
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      className="input-premium"
                      placeholder="Rue de..., 1000 Bruxelles"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base font-medium mb-2 text-neutral-800">
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-6 py-4 text-lg border border-neutral-200 rounded-2xl focus:border-neutral-900 focus:ring-2 focus:ring-neutral-100 outline-none resize-none transition-all bg-white"
                      placeholder="Parlez-nous de votre projet..."
                    />
                  </div>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 text-green-800 px-5 py-3 rounded-2xl"
                    >
                      ✓ Message envoyé ! Nous vous recontactons sous 24h.
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-800 px-5 py-3 rounded-2xl"
                    >
                      ✗ Veuillez remplir tous les champs obligatoires.
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'loading'}
                    className="w-full bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </motion.button>

                  <p className="text-sm text-neutral-500 text-center">
                    * Champs obligatoires
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Garanties */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100">
                <h3 className="text-xl font-bold mb-4 text-neutral-900">Nos garanties</h3>
                <div className="space-y-3">
                  {guarantees.map((guarantee, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-neutral-700">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-3xl border-2 border-primary-100">
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Besoin d'aide ?</h3>
                <p className="text-neutral-700 mb-4">
                  Notre équipe est disponible pour répondre à toutes vos questions.
                </p>
                <a
                  href="tel:+32489576565"
                  className="block w-full bg-neutral-900 text-white text-center px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Appelez-nous : 0489 57 65 65
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Notre zone d'intervention</h2>
            <p className="text-xl text-neutral-600">Bruxelles et toute la région bruxelloise</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <iframe
              title="Carte Bruxelles"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40447.72386440259!2d4.3517103!3d50.8503396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBruxelles!5e0!3m2!1sfr!2sbe!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-neutral-50">
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
            {faqItems.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all group border border-neutral-100"
              >
                <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-neutral-900">
                  {faq.question}
                  <span className="text-2xl text-primary-600 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-neutral-700 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
