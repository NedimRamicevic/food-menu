import './App.css';
import ListCards from './components/ListCards'
import {menu} from './menuContent'

function App() {
  
  return (
    <div className="App">
      <ListCards menu={menu} />
    </div>
  );
}

export default App;
