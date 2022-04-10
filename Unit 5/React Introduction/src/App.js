import "./App.css"

function App() {
  const data1=[{
    head:"Mobile Operating System",
    body:[{body1:"Android",id:"circle"},{body1:"Blackbery",id:"circle"},{body1:"Iphon",id:"circle"},{body1:"Windows Phone",id:"circle"}]
  },
  {
    head:"Mobile Manufacturers",
    body:[{body1:"Samsung",id:"square"},{body1:"HTC",id:"square"},{body1:"Micromax",id:"hollowcircle"},{body1:"Appel",id:"circle"}]
  }]
  return (
    
    <div className="App">
     {data1.map((el)=>(
       <div>{el.head},{el.body.map((le)=>(
                <li id={le.id}>{le.body1}</li>
       ))}</div>
      
       
     ))}
    </div>
  );
}

export default App;
