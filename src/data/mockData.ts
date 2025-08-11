import { Facility, Booking, Court } from '../types';

export const mockFacilities: Facility[] = [
  {
    id: '1',
    name: 'Elite Sports Complex',
    location: 'Downtown Arena, City Center',
    description: 'Premium sports facility with state-of-the-art equipment and professional courts.',
    sports: ['Badminton', 'Tennis', 'Basketball'],
    amenities: ['Parking', 'Changing Rooms', 'Cafeteria', 'AC', 'Equipment Rental'],
    images: [
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    pricePerHour: 25,
    ownerId: 'owner_1',
    status: 'approved',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Green Field Football Turf',
    location: 'Sports Valley, North District',
    description: 'Artificial turf football ground perfect for 5v5 and 7v7 matches.',
    sports: ['Football', 'Cricket'],
    amenities: ['Parking', 'Floodlights', 'Changing Rooms', 'First Aid'],
    images: [
      'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.5,
    pricePerHour: 35,
    ownerId: 'owner_2',
    status: 'approved',
    createdAt: new Date('2024-02-10'),
  },
  {
    id: '3',
    name: 'Royal Badminton Academy',
    location: 'Heritage Club, East Wing',
    description: 'Professional badminton courts with wooden flooring and perfect lighting.',
    sports: ['Badminton'],
    amenities: ['AC', 'Parking', 'Equipment Rental', 'Coaching Available', 'Spectator Seating'],
    images: [
      'https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    pricePerHour: 20,
    ownerId: 'owner_3',
    status: 'approved',
    createdAt: new Date('2024-01-28'),
  },
];

export const mockCourts: Court[] = [
  { id: '1', facilityId: '1', name: 'Court A1', sport: 'Badminton', pricePerHour: 20, isActive: true },
  { id: '2', facilityId: '1', name: 'Court A2', sport: 'Badminton', pricePerHour: 20, isActive: true },
  { id: '3', facilityId: '1', name: 'Tennis Court 1', sport: 'Tennis', pricePerHour: 30, isActive: true },
  { id: '4', facilityId: '2', name: 'Main Turf', sport: 'Football', pricePerHour: 35, isActive: true },
  { id: '5', facilityId: '3', name: 'Court 1', sport: 'Badminton', pricePerHour: 20, isActive: true },
  { id: '6', facilityId: '3', name: 'Court 2', sport: 'Badminton', pricePerHour: 20, isActive: true },
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    userId: 'user_1',
    facilityId: '1',
    courtId: '1',
    date: '2024-12-25',
    timeSlot: '10:00-11:00',
    duration: 1,
    totalPrice: 20,
    status: 'confirmed',
    createdAt: new Date('2024-12-20'),
  },
  {
    id: '2',
    userId: 'user_1',
    facilityId: '2',
    courtId: '4',
    date: '2024-12-28',
    timeSlot: '16:00-17:00',
    duration: 1,
    totalPrice: 35,
    status: 'confirmed',
    createdAt: new Date('2024-12-21'),
  },
];

export const timeSlots = [
  '06:00-07:00', '07:00-08:00', '08:00-09:00', '09:00-10:00',
  '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00',
  '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00',
  '18:00-19:00', '19:00-20:00', '20:00-21:00', '21:00-22:00',
];