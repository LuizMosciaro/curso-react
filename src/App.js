import './App.css';
import './index.css';
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const [nome,setNome] = useState()
  return (
    document.title = 'React App',

    <div className="App">
      <h1>Aula 14: State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
