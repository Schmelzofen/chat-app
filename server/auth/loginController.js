const { getUserList } = require("../db/connection");
var jwt = require('jsonwebtoken');

// function that takes user as an argument and returns a token
function generateToken(user) {
    const payload = {
        subject: user.id,
        email: user.email,
        id: user._id
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
};


function loginController(req, res) {
    const { email, password } = req.body;
    const user = {
        email,
        password
    };
    let userList = getUserList();
    userList.then(data => {
        data.forEach(element => {
            if (element.email === user.email && element.password === user.password) {
                return res.status(200).send({
                    accessToken: generateToken(element)
                });
            }
        });
    });
}

module.exports = {
    loginController,
    generateToken
}