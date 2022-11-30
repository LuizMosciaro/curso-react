import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function App() {
  const name = 'luiz eduardo'
  
  const url = 'https://via.placeholder.com/300x150/000000/969696?text=Imagem+Dinamica'
  function sum(a,b){
    return a + b
  }

  return (
    <div className="App">
      {/* Para comentar e assim, entre chaves+barras+asterisco */}
      <h1> Hello World!</h1>
      <p>Estou aprendendo React</p>
      <p>Me chamo: {name.toUpperCase()}</p>      
      <Frase />
      <p>Uma soma simples chamada por uma funcao: {sum(3,2)}</p>
      <img src={url} alt='Minha Imagem'></img>
      <HelloWorld /> {/* Chamando o componente */}
    </div>
  );
}

export default App;
