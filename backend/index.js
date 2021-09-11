const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(cors());

app.get("/user", (req, res) => {
  prisma.user
    .findUnique({
      where: {
        email: "arindam@gmail.com",
      },
    })
    .then((user) => {
      res.json(user);
    });
});

app.get("/posts", async (req, res) => {
  prisma.post
    .findMany({
      include: { likes: true, comments: true, user: true },
    })
    .then((posts) => {
      res.json(posts);
    });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
