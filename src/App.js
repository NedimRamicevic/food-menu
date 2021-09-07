import './App.css';
import {useState} from 'react'
import ListCards from './components/ListCards'
import {menu} from './menuContent'
import Button from './components/Button'


function App() {
  const [selection, setSelection] = useState("Korea")
  const selected = (type) =>{
    setSelection(type)
  }
    
  return (
    <div className="App">
      <div class="title">
          <h2>Asian Kitchen's Menu</h2>
        </div>
      <Button selected={selected}/>
      <ListCards menu={menu} selection = {selection} />
    </div>
  );
}

export default App;
