const express = require("express");
const app = express();
const connectMongo = require("./connection");
const urlMongo = require("./models/url");

const urlRoute = require("./routes/url");

// connection with database
connectMongo("mongodb://127.0.0.1:27017/URL-Shortner")
  .then(() => console.log("connection is succussful"))

  .catch((err) => console.log("error on connection", err));

// middlewares
app.use(express.json());

// routes
app.use("/url", urlRoute);
app.use("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await urlMongo.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl) ; 
});

const port = 8001;
app.listen(port, () => console.log("port is running at port", port));
