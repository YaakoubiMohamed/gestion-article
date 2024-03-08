const User = require("../models/user");
const fs = require('fs');

const getAllUsers = async (req, res) => {
    const page = parseInt(req.query.page) ;
    const limit = parseInt(req.query.limit) ;
    const offset = (page - 1) * 10;
    console.log(page, limit, offset)
    try {
        const users = await User.findAll({
            offset,
            limit,
            raw: true
        });
        const totalUsers = await User.count();
        console.log(users, totalUsers)
        res.json({
            users,
            pagination: {
                page,
                limit,
                totalPages: Math.ceil(totalUsers / limit),
            },
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getUserById = async (req, res) => {
    const id = req.params.userId;
    try {
        const user = await User.findByPk(id);
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({ message: `No user found with the given ID ${id}` })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser
}
