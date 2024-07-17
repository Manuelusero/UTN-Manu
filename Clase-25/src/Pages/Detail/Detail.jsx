import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../Components/helpers/productos'

const Detail = () => {
    /* useParams retorna un objeto con los parametros de busqueda*/
    const parametros = useParams()
    console.log(parametros)

    const {
        nombre,
        descripcion,
        precio,
        id,
        stock,
        codigo,
        categoria

    } = obtenerProductoPorId(parametros.producto_id)

    return (
        <div>
            <h1>{nombre}</h1>
            <span>Categoria: {categoria}</span>
            <p>
                {descripcion}
            </p>
            <span>
                <b>Precio</b>:{precio}
            </span>
            <br />
            <span>
                <b>Unidades disponibles</b>:
                {stock}
            </span>
            <br />
            <button>Comprar</button>
        </div>
    )
}

export default Detail
