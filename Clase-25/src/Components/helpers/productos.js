import { productos } from "../../data/productsData"

// export const obtenerProductoPorId = (id) => {
//     return productos.find(producto => Number(producto.id) === Number(id))
// }

/* Una funcion que se llame obtenerProductos
Va a llamar a los productos del localStorage, si no estan va a cargarlos con la key 'productos' y va a retornarlos
Si estan, los parseara y los retornara
*/

/*
localStorage

.setItem()
.getElement() obtiene un valor guardado en localStorage mediante key, si no encuentra nada retorna null
.removeItem()
.clear()
 */
/**
 * Retrieves the list of products from local storage. If the list is not found, it initializes it with the default list of products.
 *
 * @return {Array} An array of product objects.
 */
export const obtenerProductos = () => {
    const productos_guardados = localStorage.getItem('productos')
    if(productos_guardados){
        /* Logica si existen */
        return JSON.parse (productos_guardados)

    }
    else{
        /* Logica si no existen */
        const productos_JSON = JSON.stringify(productos)
        localStorage.setItem('productos', productos_JSON)
        return productos
    }
}

/* 
crearProducto(producto) lo guarda en el localStorage con la key 'productos'
obtenerProductoPorId(id) retornar el producto que cumpla con ese id
eliminarProductoPorId(id) elimina el producto que cumpla con ese id
 */

