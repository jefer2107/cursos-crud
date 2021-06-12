const response = require("../common/response")


const buyControllerFactory = (connection)=>{
    const getAll = (req,res)=>{
        connection.query('select * from buys order by id',
        (err,resMysql)=>{
            if(err)
            {
                response(res).error()
            }

            response(res).send(resMysql)
        })
    }

    const getUserCourses = (req,res)=>{
        const userId = req.userId
        console.log("buy",userId)
        connection.query(
            `select buys.id,user.nome,courses.course,buys.date from user join buys on user.id = buys.idUser join courses on courses.id = buys.idCourse `,
        (err,resMysql)=>{
            if(!req.userId)
            {
                response(res).unauthorize()
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
        getUserCourses
    }
}

module.exports = buyControllerFactory