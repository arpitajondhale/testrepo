
const express = require('express');
const app = express();


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



const authMiddleware = (req, res, next) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).send("Password is required");
    }

    if (password === 'Arpita123') {
        next();
    } else {
        return res.status(401).send("Unauthorized: Wrong password");
    }
};

app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/login.html");
});


app.post('/login', authMiddleware, (req, res) => {
    res.status(200).send( "Authenticated successfully!");
});


app.listen(3000, function() {
    console.log("Server running on port 3000");
});
