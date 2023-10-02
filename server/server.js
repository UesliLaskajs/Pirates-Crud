const express=require("express")
const app=express();
const port=3000;
const cors=require("cors")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

require("../server/config/mongoose.config")
require("../server/routes/user.routes")(app)

app.listen(port,()=>{console.log(`Listening to port ${port}`)})