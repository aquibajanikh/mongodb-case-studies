// Collection: Users
db.users.insertOne({
  name: "John Doe",
  contact: {
    email: "johndoe@example.com",
    phone: "1234567890",
  },
});

// Collection: Flights
db.flights.insertOne({
  airline: "Airline A",
  source: "City A",
  destination: "City B",
  time: "10:00 AM",
  price: 200,
});

// Collection: Hotels
db.hotels.insertOne({
  name: "Hotel X",
  location: "City C",
  price: 100,
  availability: true,
});

// Collection: Bookings
db.bookings.insertOne({
  userId: ObjectId("user_id_1"),
  flightId: ObjectId("flight_id_1"),
  hotelId: ObjectId("hotel_id_1"),
  bookingDate: ISODate("2022-01-01"),
  status: "Confirmed",
});

// Collection: Reviews
db.reviews.insertOne({
  userId: ObjectId("user_id_1"),
  content: "Great flight experience!",
  rating: 4,
  reviewType: "flight",
});

// Relationship Examples:

// One-to-Many between Users and Bookings:
// 1. Find all bookings of a specific user:
db.bookings.find({ userId: "user_1_id" });

// One-to-Many between Flights/Hotels and Bookings:
// 2. Find all bookings for a specific flight:
db.bookings.find({ flightId: "flight_id_1" });

// 3. Find all bookings for a specific hotel:
db.bookings.find({ hotelId: "hotel_id_1" });

// One-to-Many between Users and Reviews:
// 4. Find all reviews by a specific user:
db.reviews.find({ userId: "user_1_id" });
