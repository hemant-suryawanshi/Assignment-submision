import { useEffect, useState } from "react";

export const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getdata();
  }, [page]);

  const getdata = async () => {
    fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  };
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
      {todos.map((t) => (
        <h3>{t.title}</h3>
      ))}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
