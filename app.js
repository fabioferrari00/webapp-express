//importo express e creo l'istanza dell'app
const express = require("express");
const app = express();


//definisco la porta su cui far girare l'app
const port=process.env.PORT;

app.use(express.static('public'));

//definisco la rotta base
app.get("/",(req,res)=>{
    res.send("Rotta base")
});

//
app.listen(port,()=>{
    console.log("server in ascolto")
})

