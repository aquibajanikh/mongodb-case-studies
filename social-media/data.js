db.users.insertMany([
  {
    _id: ObjectId("64b6215beae0ab4c8344cdd4"),
    username: "john_doe",
    name: "John Doe",
    email: "johndoe@example.com",
    followers: [
      ObjectId("64b6215beae0ab4c8344cdd5"),
      ObjectId("64b6215beae0ab4c8344cdd6"),
    ],
    following: [ObjectId("64b6215beae0ab4c8344cdd5")],
    posts: [
      {
        content: "Hello, this is my first post!",
        likes: 10,
        comments: [
          {
            userId: ObjectId("64b6215beae0ab4c8344cdd4"),
            content: "Nice post!",
          },
          {
            userId: ObjectId("64b6215beae0ab4c8344cdd4"),
            content: "Keep it up!",
          },
        ],
      },
    ],
  },
  {
    _id: ObjectId("64b6215beae0ab4c8344cdd5"),
    username: "jane_smith",
    name: "Jane Smith",
    email: "janesmith@example.com",
    followers: [ObjectId("64b6215beae0ab4c8344cdd4")],
    following: [
      ObjectId("64b6215beae0ab4c8344cdd5"),
      ObjectId("64b6215beae0ab4c8344cdd6"),
    ],
    posts: [
      {
        content: "Having a great day!",
        likes: 5,
        comments: [
          {
            userId: ObjectId("64b6215beae0ab4c8344cdd5"),
            content: "Glad to hear that!",
          },
        ],
      },
    ],
  },
  {
    _id: ObjectId("64b6215beae0ab4c8344cdd6"),
    username: "mike_johnson",
    name: "Mike Johnson",
    email: "mikejohnson@example.com",
    followers: [],
    following: [],
    posts: [
      {
        content: "Feeling excited about the weekend!",
        likes: 8,
        comments: [
          {
            userId: ObjectId("64b6215beae0ab4c8344cdd6"),
            content: "Me too!",
          },
          {
            userId: ObjectId("64b6215beae0ab4c8344cdd6"),
            content: "Can't wait!",
          },
        ],
      },
    ],
  },
  {
    _id: ObjectId("64b6215beae0ab4c8344cdd7"),
    username: "alex_wilson",
    name: "Alex Wilson",
    email: "alexwilson@example.com",
    followers: [ObjectId("64b6215beae0ab4c8344cdd6")],
    following: [
      ObjectId("64b6215beae0ab4c8344cdd5"),
      ObjectId("64b6215beae0ab4c8344cdd6"),
    ],
    posts: [],
  },
  {
    _id: ObjectId("64b6215beae0ab4c8344cdd8"),
    username: "emma_thompson",
    name: "Emma Thompson",
    email: "emmathompson@example.com",
    followers: [ObjectId("64b6215beae0ab4c8344cdd5")],
    following: [ObjectId("64b6215beae0ab4c8344cdd5")],
    posts: [
      {
        content: "Enjoying the sunny weather!",
        likes: 3,
        comments: [],
      },
    ],
  },
]);
