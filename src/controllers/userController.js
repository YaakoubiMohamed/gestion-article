const User = require("../models/user");

const getAllUsers = async (req, res) =>{
    try{
        const users = await User.findAll();
        res.json(users)
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

const getUserById = async (req, res) =>{
    const  id = req.params.userId;
    try{
        const user = await User.findByPk(id);
        if(user){
            res.json(user)
        } else {
            res.status(404).json({message:`No user found with the given ID ${id}`})
        }
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

