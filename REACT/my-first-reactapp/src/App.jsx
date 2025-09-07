import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>My First React App</h2>
      <p>My name is Zubaida and I am starting to learn react</p><hr />
      <h3>Important Thing about React:</h3>
      <ol>
        <li>React create a Virtual DOM in memory via which we make all necessary manipulation before applying it to the Browser DOM.</li>
        <li>React is a JavaScript library for building reusable UI components.</li>
        <li>React renders HTML to the web page via a container, and a function called createRoot().</li>
        <li>The container is a {'"<div id="root"></div>"'} element in the index.html file and "createRoot()" is in main.jsx file</li>
      </ol>
    </div>
    
  )
}

export default App
