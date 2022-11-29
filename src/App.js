import './App.css';
import './index.css';
import Condicional from './components/Condicional';

function App() {
  const name = 'luiz eduardo'
  
  const url = 'https://via.placeholder.com/300x150/000000/969696?text=Imagem+Dinamica'
  function sum(a,b){
    return a + b
  }

  return (
    document.title = 'React App',

    <div className="App">
      <h1>Aula 12: Renderização condicional "if"</h1>
      <Condicional />
    </div>
  );
}

export default App;
