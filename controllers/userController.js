const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        res.status(201).send('User registered!');

    } catch (error) {
        res.status(500).send(error.message);
    }
}