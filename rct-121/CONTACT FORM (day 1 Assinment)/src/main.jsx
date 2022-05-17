// import React from 'react'
// import ReactDOM, { createRoot } from 'react-dom/client'
// import App from './App'
// import './index.css'

// const rootElement=document.getElementById("root")
// const root=createRoot(rootElement)


// const elem=React.createElement("button",{onClick:()=>alert("opps")},"CLICK ME")

// const elemwitJSX=(
//   <button onClick={()=>alert("with JSX")}>Click Me</button>
// )


// function Button(props){
//   return <button onClick={()=> props?.handelClick()}>{props.title}</button>
// }

// const Myapp= React.createElement("div",{},[
//   elem,
//   elemwitJSX,
//   Button({title:"Hello",onClick:()=>alert("1")})

// ])

// root.render(Myapp)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

