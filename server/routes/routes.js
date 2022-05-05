const { loginController } = require("../auth/loginController");
const { registerController } = require("../auth/registerController");
const { getUserList, getSpecificUser, getFeedConversation, postFeedConversation } = require("../db/connection");

const routes = (app) => {
    app.route("/")
        .get((req, res) => {
            res.send("Hello World!");
        });
    app.route("/api/login")
        .post(loginController)
    app.route("/api/register")
        .post(registerController)
    app.route("/api/users")
        .get(getUserList)
    app.route("/api/user/:id")
        .get(getSpecificUser)
    app.route("/api/social/feed")
        .get(getFeedConversation)
        .post(postFeedConversation)
}

module.exports = {
    routes
}