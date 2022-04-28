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

// return userlist from db connection
async function getUserList() {
    const db = await connectToDB();
    const userList = await db.collection("users").find().toArray();
    return userList;
}


module.exports = {
    connect,
    connectToDB,
    getUserList
}