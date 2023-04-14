export function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          userId: "thomas123",
          name: "Thomas King",
          email: "thomas@gmail.com",
          phoneNumber: "9876543210",
        },
        {
          userId: "john123",
          name: "John Player",
          email: "john@gmail.com",
          phoneNumber: "9876543210",
        },
        {
          userId: "jake12",
          name: "Jake Singh",
          email: "jake@gmail.com",
          phoneNumber: "9876543210",
        },
        {
          userId: "jack13",
          name: "Jack Knight",
          email: "jack@gmail.com",
          phoneNumber: "9876543210",
        },
      ]);
    }, 1000);
  });
}
