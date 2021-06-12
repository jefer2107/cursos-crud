import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import ListCourses from "./pages/courses/listCourses"
import RegisterCourses from "./pages/courses/registerCourses"
import Home from "./pages/home"
import Dashboard from "./pages/users/dashboard/panel"
import EditUser from "./pages/users/edit/editUser"
import ListUser from "./pages/users/list/listUser"
import Login from "./pages/users/login/login"
import RegisterUser from "./pages/users/register/registerUser"

export default function Routes(){

    return(

        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register-user" component={RegisterUser} />
                <Route exact path="/user-list" component={ListUser} />
                <Route exact path="/login-user" component={Login} />
                <Route exact path="/edit-user/:id" component={EditUser} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register-course" component={RegisterCourses} />
                <Route exact path="/list-courses" component={ListCourses} />
            </Switch>
        </BrowserRouter>
    )
}