import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Home from './components/pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/empresa" element={<Empresa />}>
        </Route>
        <Route exact path="/contato" element={<Contato />}>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App