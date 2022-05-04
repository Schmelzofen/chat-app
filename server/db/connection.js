const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const connect = mongoose.connect(process.env.URL);

// configure mongodb connection

let _db;
const uri = process.env.URL;
const client = new MongoClient(uri, { useNewUrlParser: true });

async function connectToDB() {
    if (_db) return _db

    const URL = process.env.URL
    const client = new MongoClient(URL)
    const connected_client = await client.connect()
    _db = connected_client.db("sc")

    return _db
}

// API Call - list all User
async function getUserList(req, res) {
    const db = await connectToDB();
    await db.collection("users").find().toArray()
        .then((users) => {
            console.log(users)
            return res.status(200).send(users)
        })
}

// API Call - get specific user
async function getSpecificUser(req, res) {
    const db = await connectToDB();
    await db.collection("users").findOne({ _id: req.params.id })
        .then((user) => {
            console.log(user)
            return res.status(200).send(user)
        })
}

// return userlist from db connection
async function listAllUser() {
    const db = await connectToDB();
    let listOfUsers = await db.collection("users").find().toArray()
    return listOfUsers
}

module.exports = {
    connect,
    connectToDB,
    getUserList,
    getSpecificUser,
    listAllUser
}