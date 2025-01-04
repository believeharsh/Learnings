const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 8002;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        return cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
})
const uploads = multer({storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    return res.render("homepage");
});

app.post("/uploads", uploads.single("profileImage"), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/")
})

app.listen(PORT, () => console.log(`server is runninn at port :8002 `)); 