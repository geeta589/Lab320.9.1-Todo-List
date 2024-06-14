import { useState, useReducer } from "react";
import { data } from './data/data';
import "./App.css";
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "togglecomplete": {
      return state.map((todo) => {
        if (todo.id == action.payload) {
          return {
            ...todo,
            completed: ! todo.completed,
          };
        } else {
          return todo;
        }
      });
    }
    default: {
      return state;
    }
  }
  console.log(state);
}
function App() {
  // const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, data);
  return (
    <>
      <h1> Building Todo List </h1>
      <section>
        {todos &&
          todos.map((todo) => (
            <div key={todo.id} style={{ display: "flex" }}>
              <input
                type="checkbox"
                onChange={() =>
                  dispatch({ type: "togglecomplete", payload: todo.id })
                }
              />
              <div>{todo.title}</div>
              <button>edit</button>
              <button>delete</button>
            </div>
          ))}
      </section>
    </>
  );
}
export default App;