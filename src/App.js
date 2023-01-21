import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Listaum from './pages/PrimeiraLista';
import Listadois from './pages/SegundaLista';
import Listatres from './pages/TerceiraLista';
import Listaquatro from './pages/QuartaLista';
import Listacinco from './pages/QuintaLista';
import Pessoal from './pages/bestfriends';

function App() {
  return (

    // Rotas
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='primeiralista' element={<Listaum />} />
        <Route path='segundalista' element={<Listadois />} />
        <Route path='terceiralista' element={<Listatres />} />
        <Route path='quartalista' element={<Listaquatro />} />
        <Route path='quintalista' element={<Listacinco />} />
        <Route path='issoepessoal' element={<Pessoal />} />
      </Routes>
    </Router>

  );
}

export default App;
