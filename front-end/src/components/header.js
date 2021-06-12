import React, { Fragment } from "react"
import { Link, useHistory } from "react-router-dom"

export default function Header() {

    const history = useHistory()
    const token = localStorage.getItem('token')
    const isLogged = token !== null

    const logoff = () => {
        localStorage.clear()
        history.push('/login-user')
    }

    return(
        <Fragment>
        {isLogged && <header className="container-fluid">
            <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login-user">Login</Link></li>
                <li><Link to="/register-user">Cadastro de usuário</Link></li>
                <li><Link to="/user-list">Lista de usuários</Link></li>
                <li><Link to="/register-course">Cadastrar cursos</Link></li>
                <li><Link to="/list-courses">Lista de cursos</Link></li>

                <li><button className="btn btn-link" onClick={logoff}>Sair</button></li>
            </ol>
        </header>}
        </Fragment>
    )
}