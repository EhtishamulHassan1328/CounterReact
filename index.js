import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function App(){

  const [count,SetCount] = React.useState(0)

  function Add(){
    SetCount(count+1)

  }

  function Sub(){
    SetCount(count-1)

  }

  return(
    <div className='counter'>
      <button className='counter-min' onClick={Sub}>-</button>
      <div className='c2'>
        <h1>{count}</h1>
      </div>
      <button className='counter-add' onClick={Add}>+</button>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById("root"))