import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id=setInterval(() => {
      setCount((prevalue) => {
        if(prevalue>=99){
          clearInterval(id)
        }
        return prevalue + 1;
      });
    }, 100);

    return ()=>{
      console.log("cleanup Function")
    }
  }, []);

  return (
    <div>
      <h1>count:{count}</h1>
    </div>
  );
};
