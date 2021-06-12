import React, { useState } from "react"
import "./registerUser.css"
import axios from 'axios'
import { useHistory } from "react-router"

export default function RegisterUser(){

    const [model,setModel] = useState()
    const [message,setMessage] = useState([])
    const history = useHistory()

    const changeModel = ({target})=>{
        setModel((state)=>{
            return{...state,[target.name]:target.value}
        })
    }

    const register = (event)=>{
        axios.post('http://localhost:4000/users', model)
            .then(x => {
                setModel(x.data)
                history.push("/user-list")
            }).catch((e)=>{
                console.log("catch",e.response.data.error)
                setMessage(e.response.data.error)
            })
            

        event.preventDefault()
    }

    return(

        <div className="d-flex register-user">
            <form onSubmit={register} className="mx-auto">
                <h3 className="text-center font-weight-bold">Cadastro de Usuário</h3>
                <input onChange={changeModel} name="nome" className="form-control my-1" type="text" placeholder="Digite o nome" />
                <input onChange={changeModel} name="email" className="form-control my-1" type="email" placeholder="Digite o email" />
                <input onChange={changeModel} name="senha" className="form-control my-1" type="senha" placeholder="Digite a senha" />
                <button className="btn btn-success btn-block my-2">Cadastrar</button>
                {message && message.length > 0 && <div className="alert alert-danger">
                    {message.map((x)=>{
                        return(
                            <div> {x.msg} </div>
                        )
                    })}
                </div>}
            </form>
        </div>
    )
}