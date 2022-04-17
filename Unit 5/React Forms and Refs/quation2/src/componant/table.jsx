import { useState } from "react";

export const Table = () => {
    const[data1,setData1]=useState()
    const getdata = async () => {
        fetch(`http://localhost:8080/user`)
          .then((d) => d.json())
          .then((data) => {
              console.log(data)
            // setData1(data);
          });
      };
      getdata

      console.log(data1)
  
  return (
    <table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Department</th>
    <th>Salery</th>
    <th>Maririale Status</th>
  </tr>
  
  {/* {data1.map((e)=> (
      <tr>
      <td>{e.username}</td>,
      <td>{e.age}</td>,
      <td>{e.adress}</td>,
      <td>{e.salery}</td>,
      <td>{e.department}</td>,
      <td>{e.maried?"Maried":"Single"}</td>
           
      </tr>  
        ))} */}


  
 
</table>
    
  );
};
