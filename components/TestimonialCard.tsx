import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

interface TestimonialCardProps {
  name: string
  location: string
  text: string
  rating: number
  delay?: number
}

export default function TestimonialCard({ name, location, text, rating, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">&ldquo;{text}&rdquo;</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </motion.div>
  )
}
