import { useEffect, useState } from "react";
import './todo.css'
export const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   getdata();
  // }, [page]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    // fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
    fetch(`http://localhost:8080/todos`)
      .then((d) => d.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  };
  const handelstatus = (id) => {
    const newarr = todos.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          status: !e.status,
        };
      }
      return e;
    });
    setTodos(newarr);
  };

  const handeldelete = (id) => {
    setTodos(todos.filter(e=>e.id!=id))
  };

  const handeledonetodoes=()=>{
    setTodos(todos.filter(e=>e.status!=false))
  }
  return loading ? (
    "Loading....."
  ) : (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="enter todo"
      ></input>
      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          };
          fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(() => {
            getdata();
          });
        }}
      >
        add todo
      </button>
      <h1>Remaining Todos</h1>
      {todos.map((t,i) => (
      
        <h3 id={t.status ? "doneid" : "Notdoneid"}>
          {t.title}-{t.status ? "done" : "Not done"}{" "}
          <button onClick={() => handelstatus(t.id)}>Toggel</button>
          <button onClick={()=>handeldelete(t.id)}>Delete</button>
        </h3>
      ))}

      <br></br>

      {/* <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button> */}
      {/* <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button> */}
      <button onClick={()=>handeledonetodoes()}>Show only Done Todos</button>
    </div>
  );
};
