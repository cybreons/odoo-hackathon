'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Building2, Shield, Star, MapPin, Clock, TrendingUp, CheckCircle, ArrowRight, Play, Zap, Globe, Award, Heart, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/ui/Logo'
import RoleCard from '@/components/ui/RoleCard'
import StatCard from '@/components/ui/StatCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import FacilityCard from '@/components/ui/FacilityCard'

const stats = [
  { label: 'Active Users', value: '2.5M+', icon: Users, color: 'from-blue-500 to-blue-600' },
  { label: 'Sports Facilities', value: '15K+', icon: Building2, color: 'from-green-500 to-green-600' },
  { label: 'Cities Covered', value: '500+', icon: Globe, color: 'from-purple-500 to-purple-600' },
  { label: 'Bookings Made', value: '50M+', icon: Calendar, color: 'from-orange-500 to-orange-600' },
]

const features = [
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Book your favorite courts in seconds with our lightning-fast booking system.',
    color: 'text-yellow-500'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Bank-grade security with multiple payment options and instant confirmations.',
    color: 'text-green-500'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only verified, high-quality facilities that meet our strict standards.',
    color: 'text-blue-500'
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'Connect with fellow players and build lasting sporting relationships.',
    color: 'text-red-500'
  }
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Professional Badminton Player',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'QuickCourt has revolutionized how I book training sessions. The quality of facilities is exceptional!',
    rating: 5,
    location: 'Mumbai'
  },
  {
    name: 'Priya Sharma',
    role: 'Tennis Enthusiast',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Amazing platform! I can find and book courts near me instantly. The app is so user-friendly.',
    rating: 5,
    location: 'Delhi'
  },
  {
    name: 'Arjun Patel',
    role: 'Football Coach',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'As a coach, I need reliable venues for training. QuickCourt never disappoints with their quality.',
    rating: 5,
    location: 'Bangalore'
  }
]

const popularFacilities = [
  {
    id: '1',
    name: 'Elite Sports Arena',
    location: 'Bandra West, Mumbai',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: 1200,
    sports: ['Badminton', 'Tennis', 'Squash'],
    bookings: 2847
  },
  {
    id: '2',
    name: 'Champions Football Ground',
    location: 'Sector 18, Noida',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: 2500,
    sports: ['Football', '5v5', '7v7'],
    bookings: 1923
  },
  {
    id: '3',
    name: 'Royal Tennis Club',
    location: 'Koramangala, Bangalore',
    image: 'https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: 800,
    sports: ['Tennis', 'Coaching'],
    bookings: 3156
  }
]

const roles = [
  {
    title: 'Sports Player',
    description: 'Discover premium courts and facilities. Book instantly with flexible scheduling and competitive pricing.',
    icon: Users,
    color: '59, 130, 246',
    path: '/auth/player',
    features: ['Instant Booking', 'Best Price Guarantee', 'Flexible Cancellation', 'Community Features']
  },
  {
    title: 'Facility Owner',
    description: 'List your venues and maximize revenue with our advanced management tools and marketing reach.',
    icon: Building2,
    color: '34, 197, 94',
    path: '/auth/owner',
    features: ['Revenue Analytics', 'Automated Scheduling', 'Marketing Tools', 'Customer Management']
  },
  {
    title: 'Administrator',
    description: 'Manage the platform ecosystem with comprehensive tools for quality control and user experience.',
    icon: Shield,
    color: '249, 115, 22',
    path: '/auth/admin',
    features: ['Platform Analytics', 'Quality Control', 'User Management', 'Revenue Insights']
  }
]

export default function LandingPage() {
  const [showRoles, setShowRoles] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setShowRoles(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <AnimatePresence mode="wait">
        {!showRoles ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-screen px-6"
          >
            <Logo size="xl" animate={true} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-8"
            >
              <h1 className="text-2xl md:text-3xl text-white/90 font-light mb-4">
                India's Premier Sports Booking Platform
              </h1>
              <div className="flex items-center justify-center space-x-8 text-white/60">
                <div className="flex items-center space-x-2">
                  <Users size={20} />
                  <span>2.5M+ Players</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 size={20} />
                  <span>15K+ Venues</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe size={20} />
                  <span>500+ Cities</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen"
          >
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              
              <div className="relative z-10 max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-12"
                >
                  <Logo size="lg" />
                  <h1 className="text-5xl md:text-7xl font-bold text-white mt-8 mb-6 leading-tight">
                    Book Sports Venues
                    <span className="block gradient-text">Instantly</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Join millions of players who trust QuickCourt for premium sports facility bookings across India
                  </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                        <stat.icon size={28} className="text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Role Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Journey</h2>
                  <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                    Select your role to access personalized features and start your sports journey
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {roles.map((role, index) => (
                      <RoleCard
                        key={role.title}
                        {...role}
                        delay={0.8 + index * 0.1}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Why Choose QuickCourt?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience the future of sports facility booking with our cutting-edge platform
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-6`}>
                        <feature.icon size={32} className={feature.color} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Popular Facilities */}
            <section className="py-24 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Popular Venues
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Discover top-rated sports facilities trusted by thousands of players
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {popularFacilities.map((facility, index) => (
                    <FacilityCard
                      key={facility.id}
                      facility={facility}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Loved by Players Nationwide
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Join millions of satisfied players who have made QuickCourt their go-to platform
                  </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                  <AnimatePresence mode="wait">
                    <TestimonialCard
                      key={currentTestimonial}
                      testimonial={testimonials[currentTestimonial]}
                    />
                  </AnimatePresence>
                  
                  <div className="flex justify-center space-x-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700">
              <div className="max-w-4xl mx-auto text-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Play?
                  </h2>
                  <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                    Join the sports revolution. Book your next game in seconds and experience the difference.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/auth/player" className="btn-secondary">
                      Start Playing Now
                      <ArrowRight size={20} className="ml-2" />
                    </Link>
                    <Link href="/auth/owner" className="glass-effect text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:bg-white/20">
                      List Your Venue
                      <Building2 size={20} className="ml-2 inline" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="col-span-2">
                    <Logo size="sm" />
                    <p className="text-gray-400 mt-4 max-w-md">
                      India's leading sports facility booking platform. Connecting players with premium venues since 2024.
                    </p>
                    <div className="flex space-x-4 mt-6">
                      <div className="text-2xl font-bold">2.5M+</div>
                      <div className="text-gray-400">Happy Players</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                      <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                      <li><Link href="/press" className="hover:text-white transition-colors">Press</Link></li>
                      <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                      <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                      <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                      <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                  <p>&copy; 2024 QuickCourt. All rights reserved. Made with ❤️ in India.</p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}