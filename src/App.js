import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import './index.css';
import List from './components/List';

function App() {
  const name = 'Eduardo'

  return (
    <div className="App">
      <HelloWorld /> {/* Chamando o componente */}
      <SayMyName nome='Luiz'/>  {/** Aqui e declarado o atributo de props (nome) */}
      <SayMyName nome = {name} />
      <Pessoa 
        nome = {name}
        idade = {30}
        profissao = 'Programador'
        foto = "https://www.shareicon.net/data/128x128/2015/09/22/105500_development_512x512.png"
      />
      <Frase />
      <List />
    </div>
  );
}

export default App;
