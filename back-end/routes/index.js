const authorize = require("./middlewares/authorize")

const configRoutes = ({app, connection})=>{
    const usersControllerFactory = require("../controllers/users")
    const usersController = usersControllerFactory({connection})

    const productsController = require('../controllers/products')({connection})
    const authenticateController = require('../controllers/authenticate')({connection})

    // Users
    app.get('/users',usersController.getAll)
    app.post("/users",usersController.create)
    app.get("/users/:id",usersController.getOne)
    app.put("/users/:id",usersController.changeItem)
    app.delete("/users/:id",usersController.removeItem)
    app.post('/users/courses/:courseId/buy',authorize,usersController.buyCourse)
        

    // authenticate
    app.post("/auth",authenticateController.auth)


    //Products
    app.get('/products',authorize, productsController.getAll)

    //courses
    const coursesControllerFactory = require('../controllers/courses')
    const coursesController = coursesControllerFactory(connection)

    app.get('/courses',coursesController.getAll)
    app.post('/courses',coursesController.create)
    app.delete('/courses/:id',coursesController.remove)
    

    //buys
    const buyControllerFactory = require('../controllers/buy')
    const buyController = buyControllerFactory(connection)

    app.get('/buy',buyController.getAll)
    app.get('/user/courses/buy',authorize,buyController.getUserCourses)
}

module.exports = configRoutes
