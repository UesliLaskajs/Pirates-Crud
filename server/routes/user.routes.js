const UserContoller=require("../controllers/user.controller")

module.exports=(app)=>{
    app.get("/pirates",UserContoller.getAllUsers)
    app.get("/pirate/:id",UserContoller.getSingleUser)
    app.post("/pirate/new",UserContoller.createUser)
    app.patch("/pirate/edit/:id",UserContoller.updateUser)
    app.delete("/pirate/delete/:id",UserContoller.deleteUser)
}