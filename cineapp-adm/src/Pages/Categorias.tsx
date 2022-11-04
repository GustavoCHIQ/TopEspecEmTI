import { useEffect, useState } from "react"
import {listarCategorias} from '../api'
export function Categorias(){
    const [categorias,setCategorias] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
                setCategorias(await listarCategorias())
        }
        getData()
    },[])
    return (
        <>
            <h1>Categorias</h1>
            {categorias.map((categoria)=><p key={categoria.id}>{categoria.name}</p>)}
        </>
    )
}