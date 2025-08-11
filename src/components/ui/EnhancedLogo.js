'use client'

import { motion } from 'framer-motion'

const EnhancedLogo = ({ size = 'md', animate = false, className = '' }) => {
  const sizeClasses = {
    xs: 'text-lg',
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl',
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    glow: {
      textShadow: [
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 40px rgba(34, 197, 94, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.5)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      className={`font-display font-bold ${sizeClasses[size]} ${className} relative`}
      variants={animate ? logoVariants : {}}
      initial={animate ? "hidden" : "visible"}
      animate={animate ? ["visible", "pulse", "glow"] : "visible"}
      style={{ perspective: "1000px" }}
    >
      <motion.span 
        className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Quick
      </motion.span>
      <motion.span 
        className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
      >
        Court
      </motion.span>
      
      {/* Enhanced background effects */}
      {animate && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-300/20 to-green-400/20 blur-xl -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-300/10 to-orange-400/10 blur-2xl -z-20"
            animate={{
              scale: [1.2, 1.5, 1.2],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}
      
      {/* Startup badge */}
      <motion.div
        className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        PRO
      </motion.div>
    </motion.div>
  )
}

export default EnhancedLogo