'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Zap, Shield, Crown } from 'lucide-react'

const EnhancedRoleCard = ({
  title,
  description,
  icon: Icon,
  color,
  path,
  features = [],
  delay = 0,
  isPremium = false,
  userCount = '0'
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100
      }
    }
  }

  const hoverVariants = {
    hover: {
      scale: 1.03,
      y: -15,
      rotateY: 5,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group relative h-full"
      style={{ perspective: "1000px" }}
    >
      <Link href={path}>
        <motion.div
          variants={hoverVariants}
          className="relative overflow-hidden rounded-3xl p-8 h-full cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-2xl"
        >
          {/* Premium badge */}
          {isPremium && (
            <motion.div
              className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: delay + 0.5, type: "spring", stiffness: 200 }}
            >
              <Crown size={12} className="mr-1" />
              PREMIUM
            </motion.div>
          )}

          {/* Enhanced gradient background */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, rgba(${color}, 0.1) 0%, rgba(${color}, 0.4) 50%, rgba(${color}, 0.1) 100%)`
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="relative z-10">
            {/* Enhanced icon with multiple effects */}
            <motion.div 
              className="mb-6 p-4 rounded-2xl w-fit relative"
              style={{
                background: `linear-gradient(135deg, rgba(${color}, 0.8) 0%, rgba(${color}, 1) 100%)`
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                boxShadow: `0 10px 30px rgba(${color.split(',')[0]}, ${color.split(',')[1]}, ${color.split(',')[2]}, 0.4)`
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={36} className="text-white relative z-10" />
              
              {/* Icon glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, rgba(${color}, 0.6) 0%, rgba(${color}, 0.8) 100%)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* User count badge */}
            <motion.div
              className="mb-4 inline-flex items-center bg-white/20 rounded-full px-3 py-1 text-sm text-white/90"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3 }}
            >
              <Star size={14} className="mr-1 text-yellow-400" />
              {userCount} active users
            </motion.div>
            
            {/* Enhanced title */}
            <motion.h3 
              className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-white/80 leading-relaxed mb-6 group-hover:text-white/90 transition-colors"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {description}
            </motion.p>
            
            {/* Enhanced features list */}
            {features.length > 0 && (
              <motion.div 
                className="space-y-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.4 }}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center text-sm text-white/70 group-hover:text-white/90 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle size={16} className="mr-3 text-green-400 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Enhanced CTA button */}
            <motion.div 
              className="flex items-center justify-between"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex items-center text-white/80 group-hover:text-white font-semibold transition-all duration-300 group-hover:translate-x-2"
                whileHover={{ x: 5 }}
              >
                <Zap size={18} className="mr-2" />
                <span>Get Started</span>
                <ArrowRight size={20} className="ml-2" />
              </motion.div>
              
              <motion.div
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={20} className="text-white" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Multiple hover effects */}
          <motion.div 
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          />
          
          {/* Animated particles */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default EnhancedRoleCard