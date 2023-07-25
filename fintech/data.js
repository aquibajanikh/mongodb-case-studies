db.usersFintech.insertMany([
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
  {
    name: "Emily Davis",
    email: "emilydavis@example.com",
    address: "987 Pine Street",
  },
  {
    name: "David Wilson",
    email: "davidwilson@example.com",
    address: "654 Cedar Avenue",
  },
]);

ObjectId("64b64786d26fe5feea66b38b"),
  ObjectId("64b64786d26fe5feea66b38c"),
  ObjectId("64b64786d26fe5feea66b38d"),
  ObjectId("64b64786d26fe5feea66b38e"),
  ObjectId("64b64786d26fe5feea66b38f");

// ----------------------------------

db.transactions.insertMany([
  {
    userId: ObjectId("64b64786d26fe5feea66b38b"),
    type: "debit",
    amount: 500,
    description: "Grocery Shopping",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38b"),
    type: "credit",
    amount: 1000,
    description: "Salary Deposit",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38b"),
    type: "debit",
    amount: 200,
    description: "Online Purchase",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38b"),
    type: "credit",
    amount: 300,
    description: "Refund",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38c"),
    type: "debit",
    amount: 50,
    description: "Coffee Shop",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38c"),
    type: "credit",
    amount: 1500,
    description: "Investment Dividend",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38c"),
    type: "debit",
    amount: 100,
    description: "Transportation",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38d"),
    type: "credit",
    amount: 500,
    description: "Bonus",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38d"),
    type: "debit",
    amount: 300,
    description: "Dinner at Restaurant",
  },
  {
    userId: ObjectId("64b64786d26fe5feea66b38e"),
    type: "credit",
    amount: 2000,
    description: "Loan Repayment",
  },
]);

ObjectId("64b647c6d26fe5feea66b390"),
  ObjectId("64b647c6d26fe5feea66b391"),
  ObjectId("64b647c6d26fe5feea66b392"),
  ObjectId("64b647c6d26fe5feea66b393"),
  ObjectId("64b647c6d26fe5feea66b394"),
  ObjectId("64b647c6d26fe5feea66b395"),
  ObjectId("64b647c6d26fe5feea66b396"),
  ObjectId("64b647c6d26fe5feea66b397"),
  ObjectId("64b647c6d26fe5feea66b398"),
  ObjectId("64b647c6d26fe5feea66b399");
