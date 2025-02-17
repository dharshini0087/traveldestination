const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const Destination = require("./models/destinationSchema"); // Importing the destination schema
dotenv.config();
const app = express();
app.use(express.json());

mdb
  .connect("mongodb+srv://mern:mern123@mern.xwo4u.mongodb.net/")
  .then(() => {
    console.log("MongoDB Connection Sucessfull");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsucessfull", err);
  });

app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend my friend\n Your RollerCoster starts from now on\n Fasten your codabase so you can catchup of what is been taught"
  );
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup", (req, res) => {
  var { firstName, lastName, username, email, password } = req.body;
  try {
    console.log("Inside try");
    const newCustomer = new Signup({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    });
    newCustomer.save();
    res.status(201).send("signup successfull");
  } catch (err) {
    res.status(400).send("Signup Unsuccessfull", err);
  }
});

// Adding new route for creating a destination
app.post("/destination", (req, res) => {
  var { name, location, description, imageURL } = req.body;
  try {
    console.log("Inside try for destination");
    const newDestination = new Destination({
      name: name,
      location: location,
      description: description,
      imageURL: imageURL,
    });
    newDestination.save();
    res.status(201).send("Destination creation successful");
  } catch (err) {
    res.status(400).send("Destination creation unsuccessful", err);
  }
});

app.listen(3001, () => {
  console.log("Server Started");
});
