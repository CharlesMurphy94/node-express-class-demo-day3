const config = require('./config')

module.exports = {
    authenticate: (req,res,next) =>{
        //req.body
        let rb = req.body
        if (rb.username === config.username && rb.password === config.password){
            
            next()
        } else{
            res.status(403).send("these are not the files you're looking for")
            console.log('wrong. so wrong')
        }

    }

}