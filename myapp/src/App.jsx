import logo from './logo.svg';
import './App.css';

function App() {

  let count = 0;

  function increment(){
    count = count + 1;
  document.getElementById("count-el").innerHTML = count
  }

  function save(){
    console.log(count)
  }
  return (
    <div className="App">
    <h1>People Entered</h1>
    <h2 id="count-el">0</h2>
    <button id="increment-btn" onClick={()=>increment()}>Increment</button>
    <button id='save-btn' onClick={()=>save()}>Save</button>
    </div>
  );
}

export default App;
