'use client'

import { motion } from 'framer-motion'
import { Star, MapPin, Users, Heart } from 'lucide-react'
import Image from 'next/image'

const FacilityCard = ({ facility, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card overflow-hidden group cursor-pointer"
    >
      <div className="relative">
        <Image
          src={facility.image}
          alt={facility.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex flex-wrap gap-1">
            {facility.sports.slice(0, 2).map((sport, index) => (
              <span key={index} className="text-xs bg-white/90 text-gray-800 px-2 py-1 rounded-full font-medium">
                {sport}
              </span>
            ))}
            {facility.sports.length > 2 && (
              <span className="text-xs bg-white/90 text-gray-800 px-2 py-1 rounded-full font-medium">
                +{facility.sports.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {facility.name}
          </h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-current mr-1" />
            <span className="text-sm font-medium text-gray-700">{facility.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{facility.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <Users size={16} className="mr-1" />
            <span className="text-sm">{facility.bookings.toLocaleString()} bookings</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-primary-600">₹{facility.price}</span>
            <span className="text-gray-500 text-sm">/hour</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FacilityCard