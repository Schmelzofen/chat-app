const { getUserList, listAllUser } = require("../db/connection");
var jwt = require('jsonwebtoken');

// function that takes user as an argument and returns a token
function generateToken(user) {
    const payload = {
        subject: user.id,
        email: user.email,
        username: user.username,
        id: user._id,
        image: user.image
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
    let userList = listAllUser();
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