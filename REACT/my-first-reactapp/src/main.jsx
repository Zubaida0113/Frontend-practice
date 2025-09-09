import { StrictMode } from 'react'
import { useState } from 'react';
import { createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//JSX 
const element = (
<table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);
//ES6 - classes is a type of function thst handles object creation as JS is a prototype-based language
class Car{
  constructor(name){
    this.name = name;
  }
  show(){
    return `This is a car named ${this.name}`;
  }
}
class Model extends Car{
  constructor(name, mod){
    super(name);
    this.mod = mod;
  }
  show(){
    return `This is a car named ${this.name} and model is ${this.mod}`;
  }
}
const myCar = new Car("Toyota");
const myModel = new Model("Honda", 2020);
// console.log(myCar.show());

const fruit = ["Mango", "Apple", "Banana"];
function MyList(){
  return(
    <ul>
     {fruit.map(f => <li key={f}>{f}</li>)}
    </ul>
  );
}

function Counter() {
  // Destructuring the array returned by useState
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button style={{backgroundColor: "blue", color: "white", margin: "4px"}}
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>This is inside Main.jsx file</h2>
    <App />
  
    {element}
    {myCar.show()}<br/>
    {myModel.show()}<br/>
    {MyList()}
   
  </StrictMode>,
)
console.log('Counter element:', document.getElementById('counter'));
createRoot(document.getElementById('counter')).render(
  <>
  <Counter />
  <FavoriteColor />
  </>
)
