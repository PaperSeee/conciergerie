import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ]

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ]

  const services = [
    'Gestion complète',
    'Check-in / Check-out',
    'Ménage professionnel',
    'Photos premium',
    'Optimisation annonce',
  ]

  return (
    <footer className="bg-neutral-900 text-neutral-300 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
      
      <div className="container-custom py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-neutral-900 text-lg font-bold">I</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-none">Ilias</span>
                <span className="text-xs text-neutral-400">Conciergerie Airbnb</span>
              </div>
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
              La conciergerie qui redéfinit la gestion Airbnb à Bruxelles. 
              Spécialisés dans les propriétaires d'un seul appartement.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 transition-transform duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-neutral-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <FaEnvelope className="text-neutral-500 mt-1 flex-shrink-0" />
                <a href="mailto:contact@alfred-conciergerie.be" className="text-neutral-400 hover:text-white transition-colors">
                  contact@alfred-conciergerie.be
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <FaPhone className="text-neutral-500 mt-1 flex-shrink-0" />
                <a href="tel:+32489576565" className="text-neutral-400 hover:text-white transition-colors">
                  0489 57 65 65
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <FaMapMarkerAlt className="text-neutral-500 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">
                  Bruxelles & Région
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Ilias Conciergerie. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  )
}
