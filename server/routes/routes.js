const { loginController } = require("../auth/loginController");
const { registerController } = require("../auth/registerController");

const routes = (app) => {
    app.route("/")
        .get((req, res) => {
            res.send("Hello World!");
        });
    app.route("/api/login")
        .post(loginController)
    app.route("/api/register")
        .post(registerController)
}

module.exports = {
    routes
}