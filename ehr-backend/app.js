const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// PostgreSQL Connection
const sequelize = new Sequelize('ehr_system', 'postgres', 'pass0114', {
    host: 'localhost',
    dialect: 'postgres',
});

// User Model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sync database
sequelize.sync();

// Signup Route
app.post('/signup', async (req, res) => {
    const { email, password, user_type } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            password: hashedPassword,
            user_type,
        });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id, user_type: user.user_type }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

// Patient Data Route (Admin or Client based access)
app.get('/patient-data', async (req, res) => {
    // Add token verification logic here (using middleware)
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send('Access denied.');

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const user = await User.findByPk(decoded.id);
        // Logic to fetch patient data based on user type
        // Return patient data for admin or specific client
    } catch (error) {
        res.status(401).send('Invalid token');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
