const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// const users = require("./Data.json");
const fs = require("fs");


mongoose
  .connect("mongodb://127.0.0.1:27017/NodeLearn-1")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log("mongo err", err));

// mongoDb Basics

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {timestamps : true }
);

const userMongo = mongoose.model("user", userSchema);

// Middle ware
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("Hello from Middleware 1");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Hello from Middleware 2");
//   // next() ;
//   // return res.end("hey")
//   next();
// });

// Routes

app.get("/api/users", async (req, res) => {
    const allDbUsers = await userMongo.find({}) ; 
    res.setHeader("X-myName" , "Harsh Dahiya") ; 
  return res.json(allDbUsers);
});

app.get("/users", async (req, res) => {
    const allDbUsers = await userMongo.find({}) ; 
  const html = `<ul>
        ${allDbUsers.map((item) => `<li>${item.firstName }  ${item.lastName} - ${item.email} - ${item.jobTitle}</li>`).join("")}
    </ul>`;
  return res.send(html);
});

// app.get("/users/:id" , (req, res) => {

// })
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// post routes

// app.post("/api/users", (req, res) => {
//     return res.json({Status : "pending"}) ;
// })
// app.patch("/api/users/:id", (req, res) => {
//     return res.json({Status : "pending"}) ;
// })
// app.delete("/api/users/:id", (req, res) => {
//     return res.json({Status : "pending"}) ;
// })

// since above code is too much repetative so that we use like this

app
  .route("/api/users/:id")
  .get( async (req, res) => {
    const user = await userMongo.findById(req.params.id) ; 
    if(!user) return res.status(404).json({error : "user not found"}) ; 
    return res.json(user);
  })

  .delete(async (req, res) => {
    const user = await userMongo.findByIdAndDelete(req.params.id) ; 
    if(!user) return res.status(404).json({error : "user not found"}) ; 
    return res.json(user);
  })

  .patch( async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from URL
        const updateData = req.body; // Extract update data from request body
    
        // Find user by ID and update
        const user = await userMongo.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    
        // Handle case if user is not found
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
    
        // Return the updated user
        return res.json(user);
      } catch (err) {
        // Handle errors (e.g., invalid ObjectId, database issues)
        return res.status(500).json({ error: "An error occurred", details: err.message });
      }
  });

// app.post("/api/users", (req, res) => {
//   const body = req.body;
//   console.log(body);
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile("./Data.json", JSON.stringify(users), (err, data) => {
//     return res.status(201).json({ status: "succuss", id: users.length });
//   });
// });

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "all fields are required" });
  }

  const result = await userMongo.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });

  return res.status(201).json({ msg: "succussfully user is created" });
});

app.listen(PORT, () => console.log("server Started at Port" + PORT));
