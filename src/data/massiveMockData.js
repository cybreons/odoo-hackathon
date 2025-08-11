// Massive mock data for startup-level platform

export const TOTAL_USERS = 2547832
export const TOTAL_FACILITIES = 45231
export const TOTAL_BOOKINGS = 12456789
export const TOTAL_CITIES = 847

// Extended cities list for India
export const cities = [
  // Tier 1 Cities
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
  
  // Tier 2 Cities
  'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal',
  'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana',
  'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali', 'Vasai-Virar',
  'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad',
  'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur',
  'Madurai', 'Raipur', 'Kota', 'Chandigarh', 'Guwahati', 'Solapur', 'Hubli-Dharwad',
  
  // Tier 3 Cities
  'Tiruchirappalli', 'Bareilly', 'Mysore', 'Tiruppur', 'Gurgaon', 'Aligarh', 'Jalandhar',
  'Bhubaneswar', 'Salem', 'Warangal', 'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur',
  'Bikaner', 'Amravati', 'Noida', 'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad',
  'Kochi', 'Nellore', 'Bhavnagar', 'Dehradun', 'Durgapur', 'Asansol', 'Rourkela',
  'Nanded', 'Kolhapur', 'Ajmer', 'Akola', 'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni',
  'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu', 'Sangli-Miraj', 'Mangalore', 'Erode',
  'Belgaum', 'Ambattur', 'Tirunelveli', 'Malegaon', 'Gaya', 'Jalgaon', 'Udaipur',
  'Maheshtala', 'Davanagere', 'Kozhikode', 'Kurnool', 'Rajpur Sonarpur', 'Rajahmundry',
  'Bokaro', 'South Dumdum', 'Bellary', 'Patiala', 'Gopalpur', 'Agartala', 'Bhagalpur',
  'Muzaffarnagar', 'Bhatpara', 'Panihati', 'Latur', 'Dhule', 'Rohtak', 'Korba',
  'Bhilwara', 'Berhampur', 'Muzaffarpur', 'Ahmednagar', 'Mathura', 'Kollam', 'Avadi',
  'Kadapa', 'Kamarhati', 'Sambalpur', 'Bilaspur', 'Shahjahanpur', 'Satara', 'Bijapur',
  'Rampur', 'Shivamogga', 'Chandrapur', 'Junagadh', 'Thrissur', 'Alwar', 'Bardhaman',
  'Kulti', 'Kakinada', 'Nizamabad', 'Parbhani', 'Tumkur', 'Khammam', 'Ozhukarai',
  'Bihar Sharif', 'Panipat', 'Darbhanga', 'Bally', 'Aizawl', 'Dewas', 'Ichalkaranji'
]

// Comprehensive sports categories
export const sportsCategories = {
  racquet: ['Badminton', 'Tennis', 'Squash', 'Table Tennis'],
  team: ['Football', 'Basketball', 'Cricket', 'Volleyball', 'Hockey', 'Kabaddi'],
  individual: ['Swimming', 'Gym', 'Boxing', 'Martial Arts', 'Athletics', 'Cycling'],
  adventure: ['Rock Climbing', 'Archery', 'Shooting', 'Golf'],
  fitness: ['Yoga', 'Pilates', 'Zumba', 'CrossFit', 'Aerobics'],
  water: ['Swimming', 'Water Polo', 'Diving', 'Aqua Aerobics'],
  combat: ['Boxing', 'MMA', 'Karate', 'Taekwondo', 'Judo', 'Wrestling']
}

export const allSports = Object.values(sportsCategories).flat()

// Premium amenities
export const premiumAmenities = [
  'Premium Parking', 'VIP Changing Rooms', 'Gourmet Cafeteria', 'Central AC', 
  'Professional Equipment Rental', 'LED Floodlights', 'Medical Center', 
  'Stadium Seating', 'Personal Coaching', 'Smart Lockers', 'Luxury Showers', 
  'High-Speed WiFi', 'Filtered Water Systems', 'Premium Towel Service',
  'Pro Shop', 'Sports Physiotherapy', 'Steam Room', 'Finnish Sauna', 
  'Sports Massage', 'Fine Dining Restaurant', 'Sports Bar', 'Kids Zone', 
  'Olympic Pool', 'Luxury Spa', 'Valet Parking', 'Concierge Service',
  'Live Streaming Setup', 'Professional Photography', 'Event Management',
  'Corporate Boxes', 'Player Lounge', 'Recovery Center', 'Nutrition Center'
]

// Generate realistic user data
export const generateMassiveUserData = () => {
  const indianNames = {
    male: [
      'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan',
      'Krishna', 'Ishaan', 'Shaurya', 'Atharv', 'Advik', 'Pranav', 'Rishabh',
      'Karthik', 'Rohan', 'Vikram', 'Rahul', 'Amit', 'Suresh', 'Rajesh', 'Deepak',
      'Ankit', 'Nikhil', 'Varun', 'Abhishek', 'Akash', 'Harsh', 'Yash', 'Dev'
    ],
    female: [
      'Ananya', 'Diya', 'Priya', 'Kavya', 'Anika', 'Ira', 'Myra', 'Sara',
      'Zara', 'Kiara', 'Aadhya', 'Avni', 'Riya', 'Saanvi', 'Navya', 'Ishika',
      'Shreya', 'Pooja', 'Neha', 'Sneha', 'Divya', 'Meera', 'Sanya', 'Tanya',
      'Aditi', 'Nisha', 'Ritika', 'Simran', 'Preeti', 'Swati', 'Sunita', 'Rekha'
    ]
  }

  const surnames = [
    'Sharma', 'Verma', 'Gupta', 'Kumar', 'Singh', 'Patel', 'Agarwal', 'Jain',
    'Bansal', 'Mittal', 'Agrawal', 'Goyal', 'Jindal', 'Mahajan', 'Chopra',
    'Malhotra', 'Kapoor', 'Arora', 'Bhatia', 'Sethi', 'Khanna', 'Sood',
    'Reddy', 'Rao', 'Nair', 'Menon', 'Iyer', 'Krishnan', 'Pillai', 'Das'
  ]

  return {
    totalUsers: TOTAL_USERS,
    activeUsers: Math.floor(TOTAL_USERS * 0.73),
    premiumUsers: Math.floor(TOTAL_USERS * 0.12),
    userGrowthRate: 23.5,
    avgSessionTime: '24 minutes',
    userRetention: '68%'
  }
}

// Generate facility data with realistic distribution
export const generateMassiveFacilityData = () => {
  const facilityTypes = [
    'Sports Complex', 'Arena', 'Club', 'Academy', 'Ground', 'Court',
    'Stadium', 'Center', 'Hub', 'Zone', 'Park', 'Field', 'Dome',
    'Pavilion', 'Gymnasium', 'Pool', 'Track', 'Range'
  ]
  
  const premiumAdjectives = [
    'Elite', 'Premium', 'Royal', 'Champions', 'Victory', 'Star', 'Golden',
    'Diamond', 'Platinum', 'Supreme', 'Ultimate', 'Pro', 'Master', 'Grand',
    'Imperial', 'Crown', 'Ace', 'Prime', 'Deluxe', 'Luxury', 'Executive',
    'Signature', 'Prestige', 'Excellence', 'Pinnacle', 'Summit', 'Apex'
  ]

  return {
    totalFacilities: TOTAL_FACILITIES,
    verifiedFacilities: Math.floor(TOTAL_FACILITIES * 0.89),
    premiumFacilities: Math.floor(TOTAL_FACILITIES * 0.34),
    facilitiesGrowthRate: 18.7,
    avgRating: 4.3,
    avgUtilization: '76%'
  }
}

// Booking analytics
export const generateBookingAnalytics = () => {
  return {
    totalBookings: TOTAL_BOOKINGS,
    monthlyBookings: Math.floor(TOTAL_BOOKINGS / 12),
    avgBookingValue: 1247,
    bookingGrowthRate: 31.2,
    peakHours: ['18:00-20:00', '19:00-21:00', '20:00-22:00'],
    popularSports: [
      { name: 'Badminton', percentage: 28.4, bookings: Math.floor(TOTAL_BOOKINGS * 0.284) },
      { name: 'Football', percentage: 19.7, bookings: Math.floor(TOTAL_BOOKINGS * 0.197) },
      { name: 'Tennis', percentage: 16.3, bookings: Math.floor(TOTAL_BOOKINGS * 0.163) },
      { name: 'Basketball', percentage: 12.1, bookings: Math.floor(TOTAL_BOOKINGS * 0.121) },
      { name: 'Cricket', percentage: 9.8, bookings: Math.floor(TOTAL_BOOKINGS * 0.098) },
      { name: 'Swimming', percentage: 7.2, bookings: Math.floor(TOTAL_BOOKINGS * 0.072) },
      { name: 'Gym', percentage: 6.5, bookings: Math.floor(TOTAL_BOOKINGS * 0.065) }
    ]
  }
}

// Revenue analytics
export const generateRevenueAnalytics = () => {
  const totalRevenue = 2847500000 // 2.84 billion INR
  
  return {
    totalRevenue,
    monthlyRevenue: Math.floor(totalRevenue / 12),
    revenueGrowthRate: 42.3,
    avgRevenuePerUser: Math.floor(totalRevenue / TOTAL_USERS),
    avgRevenuePerBooking: Math.floor(totalRevenue / TOTAL_BOOKINGS),
    revenueByCategory: [
      { category: 'Court Bookings', amount: Math.floor(totalRevenue * 0.67), percentage: 67 },
      { category: 'Premium Services', amount: Math.floor(totalRevenue * 0.18), percentage: 18 },
      { category: 'Equipment Rental', amount: Math.floor(totalRevenue * 0.08), percentage: 8 },
      { category: 'Coaching Fees', amount: Math.floor(totalRevenue * 0.07), percentage: 7 }
    ]
  }
}

// Geographic distribution
export const generateGeographicData = () => {
  return {
    totalCities: TOTAL_CITIES,
    tier1Cities: 8,
    tier2Cities: 47,
    tier3Cities: 156,
    ruralAreas: 636,
    topPerformingCities: [
      { city: 'Mumbai', users: 347821, facilities: 2847, revenue: 428500000 },
      { city: 'Delhi', users: 312456, facilities: 2634, revenue: 387200000 },
      { city: 'Bangalore', users: 289734, facilities: 2156, revenue: 356800000 },
      { city: 'Chennai', users: 234567, facilities: 1876, revenue: 298400000 },
      { city: 'Hyderabad', users: 198432, facilities: 1654, revenue: 245600000 },
      { city: 'Pune', users: 176543, facilities: 1432, revenue: 218700000 },
      { city: 'Kolkata', users: 165432, facilities: 1298, revenue: 198500000 },
      { city: 'Ahmedabad', users: 143256, facilities: 1156, revenue: 176800000 }
    ]
  }
}

// Time-based analytics
export const generateTimeAnalytics = () => {
  return {
    peakDays: ['Saturday', 'Sunday', 'Friday'],
    peakHours: ['18:00-19:00', '19:00-20:00', '20:00-21:00'],
    seasonalTrends: [
      { season: 'Summer', bookingIncrease: 23 },
      { season: 'Winter', bookingIncrease: 18 },
      { season: 'Monsoon', bookingDecrease: -12 },
      { season: 'Post-Monsoon', bookingIncrease: 15 }
    ],
    hourlyDistribution: [
      { hour: '06:00', bookings: 2.3 },
      { hour: '07:00', bookings: 4.1 },
      { hour: '08:00', bookings: 6.8 },
      { hour: '09:00', bookings: 8.2 },
      { hour: '10:00', bookings: 7.9 },
      { hour: '11:00', bookings: 6.4 },
      { hour: '12:00', bookings: 5.1 },
      { hour: '13:00', bookings: 4.8 },
      { hour: '14:00', bookings: 5.9 },
      { hour: '15:00', bookings: 7.3 },
      { hour: '16:00', bookings: 8.7 },
      { hour: '17:00', bookings: 11.2 },
      { hour: '18:00', bookings: 15.8 },
      { hour: '19:00', bookings: 18.4 },
      { hour: '20:00', bookings: 16.9 },
      { hour: '21:00', bookings: 12.3 }
    ]
  }
}

// Competition analysis
export const generateCompetitionData = () => {
  return {
    marketShare: 34.7,
    competitors: [
      { name: 'PlaySpot', marketShare: 18.2, users: '1.2M+' },
      { name: 'SportEasy', marketShare: 15.6, users: '980K+' },
      { name: 'BookMyCourt', marketShare: 12.4, users: '750K+' },
      { name: 'Others', marketShare: 19.1, users: '1.1M+' }
    ],
    competitiveAdvantages: [
      'Largest facility network',
      'Best pricing algorithm',
      'Superior user experience',
      'Advanced booking technology',
      'Strong brand recognition'
    ]
  }
}

// Export all analytics
export const massiveAnalytics = {
  users: generateMassiveUserData(),
  facilities: generateMassiveFacilityData(),
  bookings: generateBookingAnalytics(),
  revenue: generateRevenueAnalytics(),
  geographic: generateGeographicData(),
  temporal: generateTimeAnalytics(),
  competition: generateCompetitionData()
}

// Sample facilities for display
export const sampleFacilities = [
  {
    id: 'fac_001',
    name: 'Elite Sports Arena Mumbai',
    location: 'Bandra West, Mumbai',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: 1200,
    sports: ['Badminton', 'Tennis', 'Squash'],
    bookings: 2847,
    verified: true,
    premium: true
  },
  {
    id: 'fac_002',
    name: 'Champions Football Ground',
    location: 'Sector 18, Noida',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: 2500,
    sports: ['Football', '5v5', '7v7'],
    bookings: 1923,
    verified: true,
    premium: false
  },
  {
    id: 'fac_003',
    name: 'Royal Tennis Club Bangalore',
    location: 'Koramangala, Bangalore',
    image: 'https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: 800,
    sports: ['Tennis', 'Coaching'],
    bookings: 3156,
    verified: true,
    premium: true
  }
]

// Real-time metrics (simulated)
export const generateRealTimeMetrics = () => {
  return {
    activeUsers: Math.floor(Math.random() * 50000) + 25000,
    liveBookings: Math.floor(Math.random() * 500) + 200,
    revenue24h: Math.floor(Math.random() * 2000000) + 1000000,
    newSignups24h: Math.floor(Math.random() * 1000) + 500,
    facilitiesOnline: Math.floor(TOTAL_FACILITIES * 0.87) + Math.floor(Math.random() * 1000)
  }
}