import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './listCourses.css'

export default function ListCourses(){
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/courses')
            .then((x)=>{
                setCourses(x.data)
            })
    },[])

    const remove = (id)=>{
        axios.delete(`http://localhost:4000/courses/${id}`)
            .then((x)=>{
                setCourses((state)=>{
                    const itemByRemove = courses.findIndex(e=>e.id === id)
                    const newList = [...state]

                    newList.splice(itemByRemove,1)
                    return newList
                })
            })
    }

    return(
        <div className='container-fluid list-couses'>
            <table className='container'>
                <thead>
                    <tr className='text-center font-weight-bold'>
                        <td>ID</td>
                        <td>CURSO</td>
                        <td>EDIÇÃO</td>
                    </tr>
                </thead>
                {courses !== null && courses.map((x)=>{
                    return(
                        <tbody>
                            <tr>
                                <td> {x.id} </td>
                                <td> {x.course} </td>
                                <td className='text-center'>
                                    <button className='btn btn-primary'>Editar</button>
                                    <button onClick={()=>remove(x.id)} className='btn btn-danger'>Remover</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}