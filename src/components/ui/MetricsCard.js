'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Activity, Zap } from 'lucide-react'

const MetricsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color,
  delay = 0,
  isLive = false,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      className={`relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 ${className}`}
    >
      {/* Live indicator */}
      {isLive && (
        <motion.div
          className="absolute top-3 right-3 flex items-center space-x-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs text-green-600 font-medium">LIVE</span>
        </motion.div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1 flex items-center">
            {title}
            {isLive && <Activity size={14} className="ml-1 text-green-500" />}
          </p>
          <motion.p 
            className="text-3xl font-bold text-gray-900"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
          >
            {value}
          </motion.p>
          {trend && (
            <motion.div 
              className={`flex items-center mt-2 text-sm ${trend.isUp ? 'text-green-600' : 'text-red-600'}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.4 }}
            >
              {trend.isUp ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
              <span className="font-semibold">{trend.isUp ? '+' : '-'}{Math.abs(trend.value)}%</span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className={`p-4 rounded-xl bg-gradient-to-r ${color} shadow-lg relative`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon size={28} className="text-white" />
          {isLive && (
            <motion.div
              className="absolute inset-0 rounded-xl bg-white/20"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* Enhanced background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 hover:opacity-5 transition-opacity duration-300`}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        whileHover={{
          borderImage: "linear-gradient(45deg, #3b82f6, #10b981, #f59e0b) 1"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default MetricsCard