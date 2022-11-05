import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { listarCategorias } from '../api'

type Categoria = {
    id: number
    name: string
}
export function Categorias() {
    const [categorias, setCategorias] = useState([] as Categoria[])

    useEffect(() => {
        const getData = async () => {
            setCategorias(await listarCategorias())
        }
        getData()
    }, [])
    return (
        <>
            <h1>Categorias</h1>
            <div>
                <Link to="/categorias/novo">Nova Categoria</Link>
                {categorias.map((categoria) => <p key={categoria.id}>{categoria.name}</p>)}
            </div>
        </>
    )
}