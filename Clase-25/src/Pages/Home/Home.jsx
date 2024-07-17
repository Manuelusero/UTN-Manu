import React from 'react'
import ProductList from '../../Components/Productlist/ProductList'
import { productos } from '../../data/productsData'

const Home = () => {
    return (
        <div>
            <h1>Elige nuestro productos</h1>
            <ProductList productos={productos} />

        </div>
    )
}

export default Home
