const mongoose=require('mangoose')
mongoose.connect(process.env.MONGOURL |"mongodb://0.0.0.0:27017/")
 const connection=mongoose.connection;
 connection.on('connected',()=>{
    console.log("DB Connected")
 })
 connection.on('error',()=>console.log("DB Error"))
 module.exports=mongoose