import './App.css';
import './index.css';
import Form from './components/Form';
import Evento from './components/Evento';

function App() {
  return (
    document.title = 'React App',

    <div className="App">
      <h1>Aula de Passar eventos por props</h1>
      <Evento />
      <Form />
    </div>
  );
}

export default App;
