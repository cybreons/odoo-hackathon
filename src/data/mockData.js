// Comprehensive mock data for the platform

export const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
  'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal',
  'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana',
  'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali', 'Vasai-Virar',
  'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad',
  'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur',
  'Madurai', 'Raipur', 'Kota', 'Chandigarh', 'Guwahati', 'Solapur', 'Hubli-Dharwad'
]

export const sports = [
  'Badminton', 'Tennis', 'Football', 'Basketball', 'Cricket', 'Table Tennis',
  'Squash', 'Volleyball', 'Swimming', 'Gym', 'Boxing', 'Martial Arts',
  'Hockey', 'Golf', 'Baseball', 'Rugby', 'Handball', 'Kabaddi'
]

export const amenities = [
  'Parking', 'Changing Rooms', 'Cafeteria', 'AC', 'Equipment Rental',
  'Floodlights', 'First Aid', 'Spectator Seating', 'Coaching Available',
  'Locker Facilities', 'Shower', 'WiFi', 'Water Cooler', 'Towel Service',
  'Pro Shop', 'Physiotherapy', 'Steam Room', 'Sauna', 'Massage',
  'Restaurant', 'Bar', 'Kids Play Area', 'Swimming Pool', 'Spa'
]

// Generate comprehensive facility data
export const generateFacilities = (count = 1000) => {
  const facilities = []
  const facilityTypes = [
    'Sports Complex', 'Arena', 'Club', 'Academy', 'Ground', 'Court',
    'Stadium', 'Center', 'Hub', 'Zone', 'Park', 'Field'
  ]
  
  const adjectives = [
    'Elite', 'Premium', 'Royal', 'Champions', 'Victory', 'Star', 'Golden',
    'Diamond', 'Platinum', 'Supreme', 'Ultimate', 'Pro', 'Master', 'Grand',
    'Imperial', 'Crown', 'Ace', 'Prime', 'Deluxe', 'Luxury', 'Executive'
  ]

  const images = [
    'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800'
  ]

  for (let i = 0; i < count; i++) {
    const city = cities[Math.floor(Math.random() * cities.length)]
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const type = facilityTypes[Math.floor(Math.random() * facilityTypes.length)]
    const facilitySports = sports.slice(0, Math.floor(Math.random() * 4) + 1)
    const facilityAmenities = amenities.slice(0, Math.floor(Math.random() * 8) + 3)
    
    facilities.push({
      id: `facility_${i + 1}`,
      name: `${adjective} ${facilitySports[0]} ${type}`,
      location: `${city}, ${getRandomArea(city)}`,
      description: generateDescription(facilitySports, type),
      sports: facilitySports,
      amenities: facilityAmenities,
      images: [images[Math.floor(Math.random() * images.length)]],
      rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 to 5.0
      pricePerHour: Math.floor(Math.random() * 2000) + 500, // 500 to 2500
      ownerId: `owner_${Math.floor(Math.random() * 100) + 1}`,
      status: Math.random() > 0.1 ? 'approved' : 'pending',
      createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
      bookingsCount: Math.floor(Math.random() * 5000) + 100,
      city: city,
      coordinates: generateCoordinates(city)
    })
  }
  
  return facilities
}

// Generate user data
export const generateUsers = (count = 10000) => {
  const users = []
  const firstNames = [
    'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan',
    'Krishna', 'Ishaan', 'Shaurya', 'Atharv', 'Advik', 'Pranav', 'Rishabh',
    'Ananya', 'Diya', 'Priya', 'Kavya', 'Anika', 'Ira', 'Myra', 'Sara',
    'Zara', 'Kiara', 'Aadhya', 'Avni', 'Riya', 'Saanvi', 'Navya'
  ]
  
  const lastNames = [
    'Sharma', 'Verma', 'Gupta', 'Kumar', 'Singh', 'Patel', 'Agarwal', 'Jain',
    'Bansal', 'Mittal', 'Agrawal', 'Goyal', 'Jindal', 'Mahajan', 'Chopra',
    'Malhotra', 'Kapoor', 'Arora', 'Bhatia', 'Sethi', 'Khanna', 'Sood'
  ]

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const city = cities[Math.floor(Math.random() * cities.length)]
    
    users.push({
      id: `user_${i + 1}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`,
      name: `${firstName} ${lastName}`,
      role: 'user',
      avatar: `https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`,
      createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
      city: city,
      favoriteSports: sports.slice(0, Math.floor(Math.random() * 3) + 1),
      totalBookings: Math.floor(Math.random() * 100) + 1,
      totalSpent: Math.floor(Math.random() * 50000) + 1000,
      isActive: Math.random() > 0.05,
      lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
    })
  }
  
  return users
}

// Generate booking data
export const generateBookings = (count = 100000) => {
  const bookings = []
  const statuses = ['confirmed', 'completed', 'cancelled']
  const timeSlots = [
    '06:00-07:00', '07:00-08:00', '08:00-09:00', '09:00-10:00',
    '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00',
    '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00',
    '18:00-19:00', '19:00-20:00', '20:00-21:00', '21:00-22:00'
  ]

  for (let i = 0; i < count; i++) {
    const facilityId = `facility_${Math.floor(Math.random() * 1000) + 1}`
    const userId = `user_${Math.floor(Math.random() * 10000) + 1}`
    const bookingDate = new Date(Date.now() + (Math.random() - 0.5) * 60 * 24 * 60 * 60 * 1000)
    const duration = Math.floor(Math.random() * 3) + 1
    const pricePerHour = Math.floor(Math.random() * 2000) + 500
    
    bookings.push({
      id: `booking_${i + 1}`,
      userId: userId,
      facilityId: facilityId,
      courtId: `court_${Math.floor(Math.random() * 5) + 1}`,
      date: bookingDate.toISOString().split('T')[0],
      timeSlot: timeSlots[Math.floor(Math.random() * timeSlots.length)],
      duration: duration,
      totalPrice: pricePerHour * duration,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: new Date(bookingDate.getTime() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      paymentMethod: Math.random() > 0.5 ? 'card' : 'upi',
      bookingSource: Math.random() > 0.3 ? 'app' : 'web'
    })
  }
  
  return bookings
}

// Generate owner data
export const generateOwners = (count = 1000) => {
  const owners = []
  const businessTypes = [
    'Sports Complex', 'Private Club', 'Academy', 'Community Center',
    'Corporate Facility', 'School', 'University', 'Resort'
  ]

  for (let i = 0; i < count; i++) {
    const city = cities[Math.floor(Math.random() * cities.length)]
    
    owners.push({
      id: `owner_${i + 1}`,
      email: `owner${i + 1}@business.com`,
      name: `Business Owner ${i + 1}`,
      role: 'owner',
      businessName: `${businessTypes[Math.floor(Math.random() * businessTypes.length)]} ${i + 1}`,
      city: city,
      facilitiesCount: Math.floor(Math.random() * 5) + 1,
      totalRevenue: Math.floor(Math.random() * 1000000) + 50000,
      joinedDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
      isVerified: Math.random() > 0.1,
      rating: (Math.random() * 2 + 3).toFixed(1)
    })
  }
  
  return owners
}

// Helper functions
function getRandomArea(city) {
  const areas = {
    'Mumbai': ['Bandra', 'Andheri', 'Powai', 'Worli', 'Colaba', 'Juhu', 'Malad', 'Goregaon'],
    'Delhi': ['Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'Saket', 'Dwarka', 'Rohini'],
    'Bangalore': ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'Jayanagar'],
    'Chennai': ['T. Nagar', 'Anna Nagar', 'Adyar', 'Velachery', 'OMR', 'Nungambakkam'],
    'Hyderabad': ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City', 'Secunderabad'],
    'Pune': ['Koregaon Park', 'Hinjewadi', 'Baner', 'Viman Nagar', 'Kothrud', 'Hadapsar']
  }
  
  const cityAreas = areas[city] || ['Central Area', 'North Zone', 'South Zone', 'East Zone', 'West Zone']
  return cityAreas[Math.floor(Math.random() * cityAreas.length)]
}

function generateDescription(sports, type) {
  const descriptions = [
    `Premium ${type.toLowerCase()} offering world-class facilities for ${sports.join(', ')}. Experience professional-grade courts with modern amenities.`,
    `State-of-the-art ${type.toLowerCase()} designed for ${sports.join(' and ')} enthusiasts. Book now for an exceptional sporting experience.`,
    `Modern ${type.toLowerCase()} featuring top-quality ${sports.join(', ')} facilities. Perfect for both casual players and serious athletes.`,
    `Professional ${type.toLowerCase()} with excellent ${sports.join(' & ')} courts. Enjoy premium amenities and expert maintenance.`
  ]
  
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}

function generateCoordinates(city) {
  const cityCoords = {
    'Mumbai': { lat: 19.0760, lng: 72.8777 },
    'Delhi': { lat: 28.7041, lng: 77.1025 },
    'Bangalore': { lat: 12.9716, lng: 77.5946 },
    'Chennai': { lat: 13.0827, lng: 80.2707 },
    'Hyderabad': { lat: 17.3850, lng: 78.4867 },
    'Pune': { lat: 18.5204, lng: 73.8567 }
  }
  
  const baseCoord = cityCoords[city] || { lat: 20.5937, lng: 78.9629 }
  
  return {
    lat: baseCoord.lat + (Math.random() - 0.5) * 0.1,
    lng: baseCoord.lng + (Math.random() - 0.5) * 0.1
  }
}

// Analytics data
export const generateAnalytics = () => {
  return {
    totalUsers: 2547832,
    totalOwners: 15647,
    totalFacilities: 45231,
    totalBookings: 12456789,
    totalRevenue: 845200000,
    monthlyGrowth: {
      users: 12.5,
      bookings: 18.3,
      revenue: 22.1
    },
    topSports: [
      { name: 'Badminton', bookings: 3245678, percentage: 26.1 },
      { name: 'Football', bookings: 2156432, percentage: 17.3 },
      { name: 'Tennis', bookings: 1876543, percentage: 15.1 },
      { name: 'Basketball', bookings: 1234567, percentage: 9.9 },
      { name: 'Cricket', bookings: 987654, percentage: 7.9 }
    ],
    topCities: [
      { name: 'Mumbai', facilities: 5234, bookings: 1234567 },
      { name: 'Delhi', facilities: 4567, bookings: 1098765 },
      { name: 'Bangalore', facilities: 3890, bookings: 987654 },
      { name: 'Chennai', facilities: 2345, bookings: 765432 },
      { name: 'Hyderabad', facilities: 2123, bookings: 654321 }
    ]
  }
}

// Export generated data
export const mockFacilities = generateFacilities(1000)
export const mockUsers = generateUsers(10000)
export const mockBookings = generateBookings(100000)
export const mockOwners = generateOwners(1000)
export const mockAnalytics = generateAnalytics()

// Time slots
export const timeSlots = [
  '06:00-07:00', '07:00-08:00', '08:00-09:00', '09:00-10:00',
  '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00',
  '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00',
  '18:00-19:00', '19:00-20:00', '20:00-21:00', '21:00-22:00'
]

// Payment methods
export const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'upi', name: 'UPI', icon: '📱' },
  { id: 'wallet', name: 'Digital Wallet', icon: '👛' },
  { id: 'netbanking', name: 'Net Banking', icon: '🏦' }
]