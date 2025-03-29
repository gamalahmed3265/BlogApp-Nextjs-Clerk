const mockUsers = [
  {
    id: "user1",
    email: "alice@example.com",
    firstName: "Alice",
    lastName: "Johnson",
    profileImage: "https://example.com/profiles/alice.jpg",
    createAt: new Date("2023-01-15T10:00:00Z"),
    updateAt: new Date("2023-01-15T10:00:00Z"),
  },
  {
    id: "user2",
    email: "bob@example.com",
    firstName: "Bob",
    lastName: "Smith",
    profileImage: "https://example.com/profiles/bob.jpg",
    createAt: new Date("2023-02-20T14:30:00Z"),
    updateAt: new Date("2023-02-20T14:30:00Z"),
  },
  {
    id: "user3",
    email: "charlie@example.com",
    firstName: "Charlie",
    lastName: "Brown",
    profileImage: "https://example.com/profiles/charlie.jpg",
    createAt: new Date("2023-03-10T08:15:00Z"),
    updateAt: new Date("2023-03-10T08:15:00Z"),
  },
];

const mockPosts = [
  {
    id: "post1",
    title: "My First Blog Post",
    content:
      "<h2 style='color:red !important; font-weight:bold'>This is the content of my very first blog post. I'm excited to start sharing my thoughts!</h2>",
    authorId: "user1",
    createAt: new Date("2023-01-16T09:00:00Z"),
    updateAt: new Date("2023-01-16T09:00:00Z"),
  },
  {
    id: "post2",
    title: "Learning Prisma",
    content:
      "<h2>Today I learned how to use Prisma with my database. The type safety is amazing!</h2>",
    authorId: "user1",
    createAt: new Date("2023-01-18T11:30:00Z"),
    updateAt: new Date("2023-01-18T11:30:00Z"),
  },
  {
    id: "post3",
    title: "The Art of Programming",
    content:
      "<h2>Programming is not just about writing code, it's about solving problems creatively.</h2>",
    authorId: "user2",
    createAt: new Date("2023-02-21T16:45:00Z"),
    updateAt: new Date("2023-02-22T10:20:00Z"), // Updated the next day
  },
  {
    id: "post4",
    title: "My Thoughts on TypeScript",
    content:
      "<h2>TypeScript has completely changed how I write JavaScript. The type system is invaluable.</h2>",
    authorId: "user2",
    createAt: new Date("2023-02-25T13:15:00Z"),
    updateAt: new Date("2023-02-25T13:15:00Z"),
  },
  {
    id: "post5",
    title: "Getting Started with Next.js",
    content:
      "<h2>Here's a beginner's guide to Next.js and why it's my favorite React framework.</h2>",
    authorId: "user3",
    createAt: new Date("2023-03-11T10:00:00Z"),
    updateAt: new Date("2023-03-12T14:30:00Z"), // Updated the next day
  },
  {
    id: "post6",
    title: "The Future of Web Development",
    content:
      "<h2>Predictions about where web development is heading in the next 5 years.</h2>",
    authorId: "user3",
    createAt: new Date("2023-03-15T15:20:00Z"),
    updateAt: new Date("2023-03-15T15:20:00Z"),
  },
];

// To use this data with the relationships intact, you might combine them like this:
export const postList = {
  users: mockUsers.map((user) => ({
    ...user,
    Posts: mockPosts.filter((post) => post.authorId === user.id),
  })),
  posts: mockPosts.map((post) => ({
    ...post,
    author: mockUsers.find((user) => user.id === post.authorId),
  })),
};
