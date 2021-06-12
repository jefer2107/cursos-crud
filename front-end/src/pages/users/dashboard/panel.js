import axios from 'axios'
import React, { useEffect, useState } from 'react'
import jsonwebtoken from 'jsonwebtoken'
import moment from 'moment'

export default function Dashboard(){
    const [buyCourses,setBuyCourses] = useState({dates:'',idUser:'',idCourse:''})
    const [courses,setCourses] = useState([])
    const [myCourses,setMyCourses] = useState([])
    const [message,setMessage] = useState()

    const token = localStorage.getItem('token')

    const payload = jsonwebtoken.decode(token)
   

    useEffect(()=>{
        axios.get('http://localhost:4000/courses')
            .then((x)=>{
                console.log(token)
                setCourses(x.data)
            })
                     
    },[])

    const buyCourse = (id)=>{      
          axios.post(`http://localhost:4000/users/courses/${id}/buy`,{
            headers: {'Authorization': `Bearer ${token}`}
        })
            .then((x)=>{
                console.log(x.data) 
                setBuyCourses(x.data)
            })

    }

    return(
        <div>
            <h1>Olá {payload.nome}</h1>
                    <div class="container-fluid my-4 cursos">
                        <div class="container">
                            <h2 class="text-center text-dark">Cursos</h2>
                            <div class="row">
                                <div class="col-sm-12 my-4">
                                    <div class="card">
                                        <div class="card-header bg-warning">
                                            <h3 class="card-title text-center text-dark text-weight-bold">Lista de Cursos</h3>
                                        </div>
                                        <div class="card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente laudantium deserunt eveniet quisquam aperiam, exercitationem corrupti excepturi necessitatibus. Commodi voluptate aspernatur inventore modi maxime sapiente corporis, minima deserunt esse aliquam.</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                {courses !== null && courses.map((x)=>{
                                    return(
                                        <div key={x.id} class="col-sm-3 text-center">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title"> {x.course} </h4>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Carga Horária: 16hrs</p>
                                            <p class="card-text">De: 19:00 à 22:30</p>
                                            <button onClick={()=>buyCourse(x.id)} type='button' class="btn btn-primary" href="#">Comprar Agora</button>
                                        </div>
                                        <div class="card-footer bg-secondary">
                                            <h4 class="card-text text-light end">Compre!</h4>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })}
                                 
                                   
                        </div>
                    </div>
                    <div class="container">
                            
                            <div class="row">
                                
                                <div class="col-sm-12 my-4">
                                    <div class="card">
                                        <div class="card-header bg-success">
                                            <h3 class="card-title text-center text-dark text-weight-bold">Meus Cursos</h3>
                                        </div>
                                        <div class="card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente laudantium deserunt eveniet quisquam aperiam, exercitationem corrupti excepturi necessitatibus. Commodi voluptate aspernatur inventore modi maxime sapiente corporis, minima deserunt esse aliquam.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3 text-center">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">De 18/12 à 20/12</h4>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Carga Horária: 16hrs</p>
                                            <p class="card-text">De: 19:00 à 22:30</p>
                                            <a class="btn btn-primary" href="#">Comprar Agora</a>
                                        </div>
                                        <div class="card-footer bg-secondary">
                                            <h4 class="card-text text-light end">R. Antônio de Albuquerque, 330 - Savassi</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 text-center">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">De 18/12 à 20/12</h4>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Carga Horária: 16hrs</p>
                                            <p class="card-text">De: 19:00 à 22:30</p>
                                            <a class="btn btn-primary" href="#">Comprar Agora</a>
                                        </div>
                                        <div class="card-footer bg-secondary">
                                            <h4 class="card-text text-light end">R. Antônio de Albuquerque, 330 - Savassi</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 text-center">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">De 18/12 à 20/12</h4>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Carga Horária: 16hrs</p>
                                            <p class="card-text">De: 19:00 à 22:30</p>
                                            <a class="btn btn-primary" href="#">Comprar Agora</a>
                                        </div>
                                        <div class="card-footer bg-secondary">
                                            <h4 class="card-text text-light end">R. Antônio de Albuquerque, 330 - Savassi</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 text-center">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">De 18/12 à 20/12</h4>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Carga Horária: 16hrs</p>
                                            <p class="card-text">De: 19:00 à 22:30</p>
                                            <a class="btn btn-primary" href="#">Comprar Agora</a>
                                        </div>
                                        <div class="card-footer bg-secondary">
                                            <h4 class="card-text text-light end">R. Antônio de Albuquerque, 330 - Savassi</h4>
                                        </div>
                                    </div>
                                </div>    
                        </div>
                    </div>
            </div>
        </div>
    )
}