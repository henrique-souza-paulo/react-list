import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Routes from './router/Routes'

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes />

            <Footer title="Project List" description="Desenvolvendo oportunidades!"/>
		</BrowserRouter>

	);
}

export default App;
