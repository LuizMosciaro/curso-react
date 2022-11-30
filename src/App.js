import './App.css';
import './index.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    document.title = 'React App',

    <div className="App">
      <h1>Aula sobre Evento</h1>
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Evento numero={3}/>
      <Form />
    </div>
  );
}

export default App;
