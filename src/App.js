import './App.css';

function App() {
  const name = 'luiz eduardo'
  
  const url = 'https://via.placeholder.com/300x150/000000/969696?text=Imagem+Dinamica'
  function sum(a,b){
    return a + b
  }

  return (
    <div className="App">
      <h1> Hello World!</h1>
      <p>Estou aprendendo React</p>
      <p>Me chamo: {name.toUpperCase()}</p>      
      <p>Uma soma simples: {sum(3,2)}</p>
      <img src={url} alt='Minha Imagem'></img>
    </div>
  );
}

export default App;
