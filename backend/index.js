const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.get("/user", (req, res) => {
  const Getuser = prisma.user
    .findUnique({
      where: {
        email: "arindam@gmail.com",
      },
    })
    .then((user) => {
      res.json(user);
    });
});

app.post("/user", async (req, res) => {});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
