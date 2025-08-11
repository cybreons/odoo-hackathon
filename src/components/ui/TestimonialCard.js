'use client'

import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import Image from 'next/image'

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="card p-8 text-center max-w-2xl mx-auto"
    >
      <div className="mb-6">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full mx-auto mb-4 object-cover"
        />
        <div className="flex justify-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={20} className="text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      
      <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.content}"
      </blockquote>
      
      <div>
        <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
        <p className="text-gray-600">{testimonial.role}</p>
        <div className="flex items-center justify-center mt-2 text-gray-500">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{testimonial.location}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard