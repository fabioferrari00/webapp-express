const setImagePath = (req, res, next) =>{
    //console.log(req);
    req.setImagePath = `${req.protocol}://${req.get('host')}/imgs`
    next();
}

module.exports = setImagePath;