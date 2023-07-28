const express = require('express');
const jwt = require("jsonwebtoken");

const login = express.Router()


login.post("/login", async (req, res) => {
    if (!user) {
        return res.status(404).send({
            statusCode: 404,
            message: "Email o Password errati",
        });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
        return res.status(404).send({
            statusCode: 404,
            message: "Email o Password errati",
        });
    }


    const token = jwt.sign({
        name: user.name,
        surname: user.surname,
        email: user.email,
        avatar: user.avatar


    },

        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );

    res.header('Authorization', token).status(200).send({
        statusCode: 200,
        message: "Login effettuato con successo!",
        token,
    })

});

module.exports = login