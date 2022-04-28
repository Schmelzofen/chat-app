const { loginController } = require("../auth/loginController");

const routes = (app) => {
    app.route("/")
        .get((req, res) => {
            res.send("Hello World!");
        });
    app.route("/api/login")
        .post(loginController)
}

module.exports = {
    routes
}