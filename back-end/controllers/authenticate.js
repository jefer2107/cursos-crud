const config = require('../config')

const jwt = require('jsonwebtoken')
const response = require('../common/response')

const authenticateControllerFactory = ({connection}) => {
    const auth = (req, res) => {
        const email = req.body.email
        const password = req.body.senha

        connection.query(`select * from USER where email= '${email}'`, (err, items) => {
            if (err)  {
                response(res).error
                return;
            }
            
            try {
                if(items.length === 0 || items[0].senha !== password)
                    response(res).unauthorize
                
                const token = jwt.sign({id: items[0].id,nome:items[0].nome}, config.secretJWTKey)
                response(res).send(token)
            }catch(e){
                response(res).error
            }
        })
    }

    return {
        auth
    }
}

module.exports = authenticateControllerFactory