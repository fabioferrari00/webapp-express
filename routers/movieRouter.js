//importo express
const express = require("express");

//importo router
const router = express.Router();

//importo il controller
const movieController = require("../controllers/movieController");

//definisco le rotte
//index
router.get('/',movieController.index);

//show
router.get('/:id',movieController.show);


module.exports = router;