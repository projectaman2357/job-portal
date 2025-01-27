// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };

// const registerUser = async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         const userExists = await User.findOne({ email });
//         if (userExists) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const user = await User.create({ name, email, password });
//         res.status(201).json({
//             _id: user.id,
//             name: user.name,
//             email: user.email,
//             token: generateToken(user._id),
//         });
//     } catch (error) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// };

// const loginUser = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (user && (await bcrypt.compare(password, user.password))) {
//             res.status(200).json({
//                 _id: user.id,
//                 name: user.name,
//                 email: user.email,
//                 token: generateToken(user._id),
//             });
//         } else {
//             res.status(401).json({ message: 'Invalid credentials' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// };

// module.exports = { registerUser, loginUser };
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register Candidate
const registerCandidate = async (req, res) => {
    const { name, email, password, repeatPassword, subscribe } = req.body;

    try {
        // Check if passwords match
        if (password !== repeatPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const user = await User.create({
            name,
            email,
            password,
            subscribe,
        });

        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                subscribe: user.subscribe,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { registerCandidate };
