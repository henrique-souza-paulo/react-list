import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Museu from '../pages/Museu';
import RecitalPoesias from '../pages/Recital';
import Listaum from '../pages/PrimeiraLista';
import Listadois from '../pages/SegundaLista';
import Listatres from '../pages/TerceiraLista';
import Listaquatro from '../pages/QuartaLista';
import Listacinco from '../pages/QuintaLista';
import Pessoal from '../pages/ExposedAmigos';
import TestePage from '../pages/teste';

export default () => {

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='museu' element={<Museu />} />
			<Route path='recital' element={<RecitalPoesias />} />
			<Route path='primeiralista' element={<Listaum />} />
			<Route path='segundalista' element={<Listadois />} />
			<Route path='terceiralista' element={<Listatres />} />
			<Route path='quartalista' element={<Listaquatro />} />
			<Route path='quintalista' element={<Listacinco />} />
			<Route path='issoepessoal' element={<Pessoal />} />
			<Route path='testpage' element={<TestePage />} />
		</Routes>
	)
}
