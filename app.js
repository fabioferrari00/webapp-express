//importo express e creo l'istanza dell'app
const express = require("express");
const app = express();

//importo il file router
const movieRouter = require("./routers/movieRouter");


//definisco la porta su cui far girare l'app
const port=process.env.PORT;

app.use(express.static('public'));

//definisco la rotta base
app.get("/",(req,res)=>{
    res.send("Rotta base")
});

//definisco la rotta per i movies
app.use("/api/movies", movieRouter);




app.listen(port,()=>{
    console.log("server in ascolto")
})

