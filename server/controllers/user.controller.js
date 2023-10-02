const User=require("../models/user.model")

module.exports.getAllUsers=(req,res)=>{
    User.find()
    .then((allUsers)=>{
        res.json(allUsers);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}

module.exports.getSingleUser=(req,res)=>{
    User.findOne({_id:req.params.id})
    .then((singleUser)=>{
        res.json(singleUser);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}

module.exports.createUser=(req,res)=>{
    User.create(req.body)
    .then((userCreated)=>{
        res.json(userCreated)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}

module.exports.updateUser=(req,res)=>{
    User.updateOne({_id:req.params.id},req.body,{new:true})
    .then((updateUser)=>{
        res.json(updateUser)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}

module.exports.deleteUser=(req,res)=>{
    User.deleteOne({_id:req.params.id})
    .then((deleteUser)=>{
        res.json(deleteUser)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}