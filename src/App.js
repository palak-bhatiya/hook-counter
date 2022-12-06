import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const [count, setUser] = useState(0);
  const increment = () => {
    setUser(count + 1);
  }
  const decrement = () => {
    if (count > 0) {
      setUser(count - 1)
    }
  }
  return (
    <div className="App">
      <div className='design'>
        <p>{count}</p>
        <input type="button" onClick={decrement} value="decrement" class="incre"></input>
        <input type="button" onClick={increment} value="increment" class="decre"></input>
      </div>
    </div>

  );
}

export default App;
