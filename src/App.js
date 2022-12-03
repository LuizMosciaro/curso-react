import './App.css';
import './index.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React','Vue','Angular']

  return (
    document.title = 'React App',

    <div className="App">
      <h1>Aula 13: Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
