ObjectId("64b6215beae0ab4c8344cdd4"),
  ObjectId("64b6215beae0ab4c8344cdd5"),
  ObjectId("64b6215beae0ab4c8344cdd6"),
  ObjectId("64b6215beae0ab4c8344cdd7"),
  ObjectId("64b6215beae0ab4c8344cdd8");

db.users.insertMany([
  {
    username: "john_doe",
    name: "John Doe",
    email: "johndoe@example.com",
    followers: ["user_id_2", "user_id_3"],
    following: ["user_id_2", "user_id_4"],
    posts: [
      {
        content: "Hello, this is my first post!",
        likes: 10,
        comments: [
          {
            userId: "user_id_2",
            content: "Nice post!",
          },
          {
            userId: "user_id_3",
            content: "Keep it up!",
          },
        ],
      },
    ],
  },
  {
    username: "jane_smith",
    name: "Jane Smith",
    email: "janesmith@example.com",
    followers: ["user_id_1"],
    following: ["user_id_1", "user_id_3"],
    posts: [
      {
        content: "Having a great day!",
        likes: 5,
        comments: [
          {
            userId: "user_id_1",
            content: "Glad to hear that!",
          },
        ],
      },
    ],
  },
  {
    username: "mike_johnson",
    name: "Mike Johnson",
    email: "mikejohnson@example.com",
    followers: ["user_id_1", "user_id_2"],
    following: ["user_id_1"],
    posts: [
      {
        content: "Feeling excited about the weekend!",
        likes: 8,
        comments: [
          {
            userId: "user_id_1",
            content: "Me too!",
          },
          {
            userId: "user_id_2",
            content: "Can't wait!",
          },
        ],
      },
    ],
  },
  {
    username: "alex_wilson",
    name: "Alex Wilson",
    email: "alexwilson@example.com",
    followers: ["user_id_1"],
    following: ["user_id_2", "user_id_3"],
    posts: [],
  },
  {
    username: "emma_thompson",
    name: "Emma Thompson",
    email: "emmathompson@example.com",
    followers: [],
    following: ["user_id_1", "user_id_2"],
    posts: [
      {
        content: "Enjoying the sunny weather!",
        likes: 3,
        comments: [],
      },
    ],
  },
]);
