const { loginController } = require("../auth/loginController");
const { registerController } = require("../auth/registerController");
const { getUserList, getSpecificUser } = require("../db/connection");

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
}

module.exports = {
    routes
}