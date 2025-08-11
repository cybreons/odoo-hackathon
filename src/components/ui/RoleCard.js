'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const RoleCard = ({
  title,
  description,
  icon: Icon,
  color,
  path,
  features = [],
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        scale: 1.02,
        y: -10,
      }}
      className="group relative"
    >
      <Link href={path}>
        <div className="relative overflow-hidden rounded-3xl p-8 h-full cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br"
            style={{
              background: `linear-gradient(135deg, rgba(${color}, 0.1) 0%, rgba(${color}, 0.3) 100%)`
            }}
          />
          
          <div className="relative z-10">
            {/* Icon */}
            <div 
              className="mb-6 p-4 rounded-2xl w-fit bg-gradient-to-r shadow-lg"
              style={{
                background: `linear-gradient(135deg, rgba(${color}, 0.8) 0%, rgba(${color}, 1) 100%)`
              }}
            >
              <Icon size={32} className="text-white" />
            </div>
            
            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
              {description}
            </p>
            
            {/* Features */}
            {features.length > 0 && (
              <div className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    {feature}
                  </div>
                ))}
              </div>
            )}
            
            {/* CTA */}
            <div className="flex items-center text-white/80 group-hover:text-white font-semibold transition-all duration-300 group-hover:translate-x-2">
              <span>Get Started</span>
              <ArrowRight size={20} className="ml-2" />
            </div>
          </div>
          
          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
    </motion.div>
  )
}

export default RoleCard