import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import "./editUser.css"

export default function EditUser(){
    const[model,setModel] = useState([])
    const history = useHistory()
    let {id} = useParams()

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state,[target.name]:target.value}
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:4000/users/${id}`)
        .then((x)=>{
            setModel(x.data)
            console.log(id)
        })
    },[])

    const onSave = ()=>{
        axios.put(`http://localhost:4000/users/${id}`,model)
            .then((x)=>{
                setModel(x.data)
                history.push("/user-list")
                
            })
    }

    return(
        <div className="edit-user d-flex">
            <form onSubmit={onSave} className="mx-auto">
                <div className="form-group">
                    <label>Nome:</label>
                    <input onChange={changeModel} className="form-control my-1" name="nome" type="text" value={model.nome}  />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input onChange={changeModel} className="form-control my-1" name="email" type="email" value={model.email}  />
                </div>
                <button type="submit" className="btn btn-primary btn-block my-2">Salvar</button>
            </form>
        </div>
    )
}