'use client'

import { motion } from 'framer-motion'

const Logo = ({ size = 'md', animate = false, className = '' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl',
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      className={`font-display font-bold ${sizeClasses[size]} ${className}`}
      variants={animate ? logoVariants : {}}
      initial={animate ? "hidden" : "visible"}
      animate={animate ? ["visible", "pulse"] : "visible"}
    >
      <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
        Quick
      </span>
      <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
        Court
      </span>
      {animate && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-300/20 to-green-400/20 blur-xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  )
}

export default Logo