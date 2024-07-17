import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Detail from './Pages/Detail/Detail'
import Cart from './Pages/Cart/Cart'



function App() {


	return (

		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/detail/:producto_id' element={<Detail />} />
			<Route path='/cart' element={<Cart />} />
		</Routes>

	)
}

export default App
