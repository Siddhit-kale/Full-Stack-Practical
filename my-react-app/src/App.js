import logo from './logo.svg';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greet />
      <Message />
      <Welcome />
    </div>
  );
}

export default App;
