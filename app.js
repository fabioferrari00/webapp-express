//importo express e creo l'istanza dell'app

const express=require("express");
const app=express();

//definisco la porta su cui far girare l'app
const port=3000;

//definisco la rotta base
app.get("/",(req,res)=>{
    res.send("Rotta base")
});

//
app.listen(port,()=>{
    console.log("server in ascolto")
})

