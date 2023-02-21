import logo from './logo.svg';
import './App.css';

function App() {

  let count = 0;

  function increment(){
    count = count + 1;
  document.getElementById("count-el").innerHTML = count
  }

  function save(){
    let countstr = count + " - "
    document.getElementById("save-el").innerHTML += countstr //jb hu chahy pehly ka bh rhy tw +use
    console.log(count)
    document.getElementById("count-el").innerHTML = 0 //save kbad 0 hojaye
    count = 0; //phir se inc kren tw 0 se start ho
  }
  return (
    <div className="App">
    <h1>People Entered</h1>
    <h2 id="count-el">0</h2>
    <button id="increment-btn" onClick={()=>increment()}>Increment</button>
    <button id='save-btn' onClick={()=>save()}>Save</button>
    <p id='save-el'>Previous entries: </p>
    </div>
  );
}

export default App;
