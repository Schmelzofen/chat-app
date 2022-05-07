const { connectToDB } = require("../db/connection");
const { generateToken } = require("./loginController");

// create a user document in the mongodb database

async function registerController(req, res) {
    let db = await connectToDB();
    let userList = await db.collection("users").find().toArray();
    let user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        image: "https://via.placeholder.com/150",
        friendsId: [],
        conversations: []
    }
    let doesUserExist = userList.find(element => element.email === user.email && element.username === user.username);
    if (doesUserExist) {
        return res.status(400).send({ error: "User already exists" })
    } else {
        db.collection("users").insertOne(user)
            .then((result) => {
                console.log(result);
                return res.status(200).send({
                    accessToken: generateToken(user)
                });
            })
    }
}

module.exports = {
    registerController
}