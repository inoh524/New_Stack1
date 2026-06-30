const express = require("express");
const cors = require("cors");
const prisma = require("./prismaClient");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

// GET all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

// CREATE task
app.post("/tasks", async (req, res) => {
  const { title } = req.body;

  const task = await prisma.task.create({
    data: { title },
  });

  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);

  await prisma.task.delete({
    where: { id },
  });

  res.json({ message: "Deleted" });
});


// recently added to test Prisma connection and error handling

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.testUser.findMany();
    res.json(users);
  } catch (err) {
    console.error("PRISMA ERROR:", err); // 👈 IMPORTANT
    res.status(500).json({
      error: err.message,
    });
  }
});

// Post api route for creating a new user
app.post("/users", async (req, res) => {
  try {
    const { username, email, address, age } = req.body;

    const newUser = await prisma.testUser.create({
      data: {
        username,
        email,
        address,
        age: Number(age),
      },
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

// must be at last
app.listen(3000, () => {
  console.log("Server running on port 3000");
});