//importo express e creo l'istanza dell'app
const express = require("express");
const app = express();

//importo i middlwares
const errorsHandler = require("./middlewares/errorsHandler")
const imagePathMiddleware = require("./middlewares/imagePathMiddleware")

//importo il file router
const movieRouter = require("./routers/movieRouter");


//definisco la porta su cui far girare l'app
const port=process.env.PORT;

app.use(express.static('public'));

//dico all'app di usare i middleware
app.use(imagePathMiddleware)

//definisco la rotta base
app.get("/",(req,res)=>{
    res.send("Rotta base")
});

//definisco la rotta per i movies
app.use("/api/movies", movieRouter);


//dico all'app di usare il middleware errorsHandler
app.use(errorsHandler)

//dico al server di rimanere in ascolto
app.listen(port,()=>{
    console.log("server in ascolto")
});

