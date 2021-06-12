import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './registerCourses.css'

export default function RegisterCourses(){
    const [course,setCourse] = useState({curso:''})
    const history = useHistory()

    const changeModel = ({target})=>{
        setCourse((state)=>{
            return {...state,[target.name]: target.value}
        })
    }

    const submit = (event)=>{
        console.log(course)
        axios.post('http://localhost:4000/courses',course)
            .then((x)=>{
                setCourse(()=> x.data)
                history.push('/list-courses')
            })

            event.preventDefault()
    }

    return(
        <div className='d-flex register-course'>
            <form onSubmit={submit} className='mx-auto'>
                <h3 className='text-center'>Cadastro de Cursos</h3>
                <div className='form-group'>
                    <label>Course:</label>
                    <input onChange={changeModel} className='form-control my-1' type='text' name='curso' />
                </div>
                <button type='submit' className='btn btn-success my-2'>Cadastrar</button>
            </form>
        </div>
    )
}