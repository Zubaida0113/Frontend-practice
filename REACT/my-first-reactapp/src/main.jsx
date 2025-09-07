import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>This is inside Main.jsx file</h2>
    <App />
    {element}
    {myCar.show()}<br/>
    {myModel.show()}<br/>
  </StrictMode>,
  
)
