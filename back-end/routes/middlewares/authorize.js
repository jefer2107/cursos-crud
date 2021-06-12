const config = require('../../config')
const jwt = require('jsonwebtoken')
const response = require('../../common/response')

const authorize = (req, res, next) => {
    const authHeaderValue = req.header('Authorization')
    const token = authHeaderValue && authHeaderValue !== '' ? req.header('Authorization').replace('Bearer ', '') : null

    jwt.verify(token, config.secretJWTKey, (err, decoded) => {

        if(err)
        {
            response(res).unauthorize()
            return
        }

        console.log(decoded)
        req.userId = decoded.id
        next()
    })
    
}

module.exports = authorize