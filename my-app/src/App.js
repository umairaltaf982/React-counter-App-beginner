import './App.css';
import {useState, useEffect} from 'react';

function MyButton(props){
  return(
    <button onClick={props.onClick}>{props.name}</button>
  )
}

function App(){
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    alert("You have changed the counter to " + counter);
  },[counter])
  function plus(){
    setCounter(counter+1);
  }

  function minus(){
    setCounter(counter-1);
  }

  return (
    <div className="App">
      <MyButton onClick={minus} name="-" />
      <h1>{counter}</h1>
      <MyButton onClick={plus} name="+" />
      {(counter >= 5) ? (
        <>
          <h1>Special</h1>
        </>
      ):(
        <>
          <h1>Nothing</h1>
        </>
      )}
    </div>
  );
}

export default App;