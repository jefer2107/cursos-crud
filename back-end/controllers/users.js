const response = require('../common/response')
const error = require('../utils/error')

const userControllerFactory = ({connection})=>{

    const getMe = (req, res) => {
        const id = req.id
        connection.query(`SELECT * FROM USER where id = ${id}`,(err,resMysql)=>{
            if(err){
    
                response(res).error
    
            }else{
    
                response(res).send(resMysql)
            }
        })         
    }

    const getAll = (req,res)=>{    
        const responseMap = response(res)
        connection.query("SELECT * FROM USER ORDER BY NOME",(err,resMysql)=>{
                        
            if(err)
            {
                responseMap.error()
                return
            }

            responseMap.send(resMysql)

        })        
    }

    const create = ((req,res)=>{
        connection.query("insert into USER(nome,email,senha) values(?,?,?)",
        [req.body.nome,req.body.email,req.body.senha],(err,users)=>{
            if(err){
                console.log(`error:${err}`)
                response(res).error()

            }else{
                response(res).send(users)
            }
        })
    })

    
    const getOne = (req,res)=>{
        connection.query(`select * from USER where  id=${req.params.id}`,(err,items)=>{

            if(err){
                console.log(`error:${err}`)
                response(res).error()

            }else{
                const item = items.length > 0 ? items[0] : null

                if(item === null)
                {
                    response(res).error()
                    return
                }

                response(res).send(item)
            }
        })

    }

    const removeItem = ((req,res)=>{
        connection.query(`delete  from USER where id=${req.params.id}`,(err)=>{

            if(err){
                console.log(`error:${err}`)
                response(res).error()

            }else{

                response(res).send(req.params)
            }
        })
    })

    const changeItem = ((req,res)=>{
        
        connection.query(`update USER set nome = '${req.body.nome}',
        email = '${req.body.email}',
        senha = '${req.body.senha}' 
        where id = '${req.params.id}'`,(err)=>{

            if(err){
                console.log(`error:${err}`)
                response(res).error()

            }else{

                response(res).send(req.body)
            }
        })
    })

    const buyCourse = (req, res) => {
        const userId = req.userId
        const date = new Date()
        const courseId = req.params.courseId

        connection.query('insert into buys (date,idUser,idCourse)values(?,?,?)',
        [date,userId,courseId],(err,resMysql)=>{
            if(!userId)
            {
                response(res).unauthorize()
                return
            }

            if(err)
            {
                response(res).error()
            }

            response(res).send(resMysql)
        })
        
    }

    return{
        getAll,
        create,
        getOne,
        changeItem,
        removeItem,
        buyCourse,
        
    }
}

module.exports = userControllerFactory