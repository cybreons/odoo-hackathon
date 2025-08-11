import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Search, 
  Calendar, 
  User, 
  MapPin,
  Star,
  Clock,
  Filter,
  Heart,
  TrendingUp
} from 'lucide-react';
import { DashboardLayout } from '../components/DashboardLayout';
import { StatCard } from '../components/StatCard';
import { mockFacilities, mockBookings } from '../data/mockData';

export const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search Venues', icon: Search },
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const renderSidebar = () => (
    <nav className="mt-8">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors ${
            activeTab === item.id
              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          <item.icon size={20} />
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeContent />;
      case 'search':
        return <SearchContent />;
      case 'bookings':
        return <BookingsContent />;
      case 'profile':
        return <ProfileContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <DashboardLayout sidebar={renderSidebar()}>
      {renderContent()}
    </DashboardLayout>
  );
};

const HomeContent: React.FC = () => {
  const stats = [
    {
      title: 'Total Bookings',
      value: '24',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      trend: { value: 12, isUp: true },
    },
    {
      title: 'Favorite Venues',
      value: '8',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Hours Played',
      value: '156',
      icon: Clock,
      color: 'from-green-500 to-green-600',
      trend: { value: 8, isUp: true },
    },
    {
      title: 'This Month',
      value: '12',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-600 mt-1">Ready for your next game?</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            trend={stat.trend}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Popular Venues */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Venues</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFacilities.slice(0, 3).map((facility) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <img
                src={facility.images[0]}
                alt={facility.name}
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-gray-900">{facility.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin size={14} className="mr-1" />
                {facility.location}
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-medium ml-1">{facility.rating}</span>
                </div>
                <span className="text-sm font-semibold text-blue-600">₹{facility.pricePerHour}/hr</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Bookings</h2>
        <div className="space-y-4">
          {mockBookings.slice(0, 3).map((booking) => {
            const facility = mockFacilities.find(f => f.id === booking.facilityId);
            return (
              <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{facility?.name}</h3>
                  <p className="text-sm text-gray-600">{booking.date} • {booking.timeSlot}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{booking.totalPrice}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SearchContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const sports = ['All Sports', 'Badminton', 'Tennis', 'Football', 'Basketball', 'Cricket'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Find Sports Venues</h1>
        <p className="text-gray-600 mt-1">Discover and book the perfect court for your game</p>
      </div>

      {/* Search Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Location</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter location or venue name"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sport</label>
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {sports.map(sport => (
                <option key={sport} value={sport}>{sport}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any Price</option>
              <option value="0-25">₹0 - ₹25</option>
              <option value="25-50">₹25 - ₹50</option>
              <option value="50+">₹50+</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Filter size={16} className="mr-2" />
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockFacilities.map((facility) => (
          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={facility.images[0]}
              alt={facility.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{facility.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {facility.sports.map((sport) => (
                  <span key={sport} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {sport}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-medium ml-1">{facility.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">(120 reviews)</span>
                </div>
                <span className="text-lg font-bold text-blue-600">₹{facility.pricePerHour}/hr</span>
              </div>
              
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const BookingsContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
        <p className="text-gray-600 mt-1">Manage your court reservations</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
              All Bookings
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg">
              Upcoming
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg">
              Completed
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {mockBookings.map((booking) => {
              const facility = mockFacilities.find(f => f.id === booking.facilityId);
              return (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={facility?.images[0]}
                        alt={facility?.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{facility?.name}</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Calendar size={14} className="mr-1" />
                          {booking.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock size={14} className="mr-1" />
                          {booking.timeSlot}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold text-gray-900">₹{booking.totalPrice}</p>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.status}
                      </span>
                      {booking.status === 'confirmed' && (
                        <button className="mt-2 text-xs text-red-600 hover:text-red-800 block">
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600 mt-1">Manage your account settings</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-6 mb-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700">
                <User size={12} />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">John Player</h2>
              <p className="text-gray-600">Sports Enthusiast</p>
              <p className="text-sm text-gray-500">Member since January 2024</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  defaultValue="Player"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                defaultValue="+91 9876543210"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Favorite Sports</label>
              <div className="flex flex-wrap gap-2">
                {['Badminton', 'Tennis', 'Football', 'Basketball', 'Cricket'].map(sport => (
                  <label key={sport} className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked={sport === 'Badminton'} />
                    <span className="text-sm">{sport}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};