const express = require('express');
const dotemv = require('dotenv')
dotemv.config({ path: "./config.env" })
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 4000;
require('./DB/connection');
const User = require("./models/userDetailsSchema")


app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true

}));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})



// adding user to MongoDB databse
app.post('/adduser', async (req, res) => {
    const { name, email, address, city, state, zip } = req.body;

    // checking wheter user provided all the inputs or not
    if (!name || !email || !address || !city || !state || !zip) {
        return res.status(422).json({ error: "Please fill all the fields" })
    }

    // creating user in databse
    try {
        const user = new User({
            name, email, address, city, state, zip
        })

        // waiting untill data is saved to DB
        let userAdd = await user.save();
        console.log("successfully added")
        res.status(201).json({ message: "User added success" })
    }
    catch (err) {
        console.log(err);
    }
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})