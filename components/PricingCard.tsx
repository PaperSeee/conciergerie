import { motion } from 'framer-motion'
import Button from './Button'
import { FaCheck } from 'react-icons/fa'

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  delay?: number
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-white p-8 rounded-xl shadow-lg ${
        highlighted ? 'ring-4 ring-primary-500 transform scale-105' : ''
      }`}
    >
      {highlighted && (
        <div className="bg-primary-600 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
          POPULAIRE
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold text-primary-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button href="/contact" variant={highlighted ? 'primary' : 'outline'} className="w-full">
        Choisir cette offre
      </Button>
    </motion.div>
  )
}
