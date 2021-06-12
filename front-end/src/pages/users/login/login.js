import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './login.css'

export default function Login(){
    const [user,setUser] = useState({email:'',senha:''})
    const history = useHistory()

    const changeModel = ({target}) => {
        setUser((state)=>{
            return{...state,[target.name]: target.value}
        })
    }

    const setToken = (value) => {
        return new Promise((res, rej) => {
            localStorage.setItem('token',value)
            setTimeout(() => res(value),3000)
        })
    }

    const logar = (event)=>{

        axios.post('http://localhost:4000/auth',user)
            .then((x)=> setToken(x.data))
            .then((x) => history.push('/dashboard'))

            event.preventDefault()
    }

    return(
        <div className="d-flex login-user">
            <form onSubmit={logar} className="mx-auto">
            <h3 className="text-center">Login</h3>
                <input onChange={changeModel} className="form-control my-1" name='email' placeholder="Digite o seu email" />
                <input onChange={changeModel} className="form-control my-1" name='senha' placeholder="Digite a sua senha" />
                <button type='submit' className="btn btn-primary my-2">Logar</button>
            </form>
        </div>
    )
}