const response = require("../common/response")


const coursesControllerFactory = (connection)=>{
    const getAll = (req,res)=>{
        connection.query('select * from courses order by id',
        (err,resMysql)=>{
            if(err)
            {
                response(res).error()
            }

            response(res).send(resMysql)
        })
    }

    


    const create = (req,res)=>{
        connection.query('insert into courses (course)values(?)',
        [req.body.curso],(err,resMysql)=>{
            if(err)
            {
                response(res).error()
            }

            response(res).send(resMysql)
        })
    }

    const remove = (req,res)=>{
        connection.query(`delete from courses where id=${req.params.id}`,
        (err)=>{
            if(err)
            {
                response(res).error()
            }

            response(res).send(req.params)
        })
    }


    return{
        getAll,
        create,
        remove,
        
    }
}

module.exports = coursesControllerFactory