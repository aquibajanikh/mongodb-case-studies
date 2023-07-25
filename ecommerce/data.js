db.products.insertMany([
  {
    name: "Smartphone",
    category: "Electronics",
    price: 500,
    quantity: 10,
    ratings: [4, 5, 4, 3, 5],
  },
  {
    name: "Laptop",
    category: "Electronics",
    price: 1000,
    quantity: 5,
    ratings: [5, 5, 4, 5, 4],
  },
  {
    name: "Headphones",
    category: "Electronics",
    price: 100,
    quantity: 20,
    ratings: [4, 3, 4, 4, 5],
  },
  {
    name: "Shirt",
    category: "Clothing",
    price: 30,
    quantity: 50,
    ratings: [5, 4, 5, 3, 4],
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    price: 80,
    quantity: 15,
    ratings: [4, 4, 3, 5, 5],
  },
  {
    name: "Watch",
    category: "Accessories",
    price: 200,
    quantity: 8,
    ratings: [5, 5, 5, 4, 4],
  },
  {
    name: "Camera",
    category: "Electronics",
    price: 800,
    quantity: 3,
    ratings: [4, 4, 3, 5, 5],
  },
  {
    name: "Backpack",
    category: "Accessories",
    price: 50,
    quantity: 25,
    ratings: [5, 5, 4, 3, 4],
  },
  {
    name: "Bookshelf",
    category: "Furniture",
    price: 150,
    quantity: 10,
    ratings: [4, 4, 5, 5, 3],
  },
  {
    name: "Gaming Console",
    category: "Electronics",
    price: 400,
    quantity: 6,
    ratings: [5, 5, 4, 4, 3],
  },
]);

ObjectId("64b63f237ee83e3b88c7391c"),
  ObjectId("64b63f237ee83e3b88c7391d"),
  ObjectId("64b63f237ee83e3b88c7391e"),
  ObjectId("64b63f237ee83e3b88c7391f"),
  ObjectId("64b63f237ee83e3b88c73920"),
  ObjectId("64b63f237ee83e3b88c73921"),
  ObjectId("64b63f237ee83e3b88c73922"),
  ObjectId("64b63f237ee83e3b88c73923"),
  ObjectId("64b63f237ee83e3b88c73924"),
  ObjectId("64b63f237ee83e3b88c73925");

// ---------------------------------------------

db.customers.insertMany([
  {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    address: "456 Elm Avenue",
  },
  {
    name: "Mike Johnson",
    email: "mikejohnson@example.com",
    address: "789 Oak Road",
  },
]);

ObjectId("64b63f357ee83e3b88c73926"),
  ObjectId("64b63f357ee83e3b88c73927"),
  ObjectId("64b63f357ee83e3b88c73928");
//----------------------------

db.orders.insertMany([
  {
    customerId: ObjectId("64b63f357ee83e3b88c73926"),
    products: [
      { productId: ObjectId("64b63f237ee83e3b88c7391c"), quantity: 2 },
      { productId: ObjectId("64b63f237ee83e3b88c73921"), quantity: 1 },
    ],
    totalAmount: 1000,
  },
  {
    customerId: ObjectId("64b63f357ee83e3b88c73926"),
    products: [
      { productId: ObjectId("64b63f237ee83e3b88c7391f"), quantity: 3 },
      { productId: ObjectId("64b63f237ee83e3b88c73921"), quantity: 2 },
    ],
    totalAmount: 210,
  },
  {
    customerId: ObjectId("64b63f357ee83e3b88c73927"),
    products: [
      { productId: ObjectId("64b63f237ee83e3b88c7391c"), quantity: 1 },
      { productId: ObjectId("64b63f237ee83e3b88c7391f"), quantity: 1 },
    ],
    totalAmount: 280,
  },
  {
    customerId: ObjectId("64b63f357ee83e3b88c73927"),
    products: [
      { productId: ObjectId("64b63f237ee83e3b88c7391c"), quantity: 1 },
    ],
    totalAmount: 800,
  },
  {
    customerId: ObjectId("64b63f357ee83e3b88c73928"),
    products: [
      { productId: ObjectId("64b63f237ee83e3b88c7391c"), quantity: 4 },
    ],
    totalAmount: 200,
  },
]);

ObjectId("64b63fb47ee83e3b88c73929"),
  ObjectId("64b63fb47ee83e3b88c7392a"),
  ObjectId("64b63fb47ee83e3b88c7392b"),
  ObjectId("64b63fb47ee83e3b88c7392c"),
  ObjectId("64b63fb47ee83e3b88c7392d");
