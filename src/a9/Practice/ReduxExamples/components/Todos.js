import React,{useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: '', done: false}); // initialize value with initial JSON state with empty do field
  const dispatch = useDispatch();

  const createTodoClickHandler = () => {
   const action = {
     type: 'create-todo',   // event
     todo                   // state
   };

   dispatch(action);    // initiate action to reducers
  }

  const deleteTodoClickHandler = (todo) => {
    const action = {
      type: 'delete-todo',
      todo
    }

    dispatch(action);
  }

  const updateTodoClickHandler = (todo) => {
    const action = {
      type: 'update-todo',
      todo
    }

    dispatch(action);
  }

  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
      done: false,
    };
    setTodo(newTodo);
  }

  return(
      <>
        <h3>Todos</h3>
        <ul className="list-group">
          {
            todos.map(todo =>
                <li className="list-group-item">
                  <input checked={todo.done}
                         onChange={(event) => updateTodoClickHandler(
                             {...todo, done: event.target.checked}
                         )}
                         type="checkbox"/>
                  <input
                    onChange={todoChangeHandler}
                    value={todo.do}
                    className="form-control"/>
                  <button onClick={createTodoClickHandler} className="btn btn-primary">
                    Create New Todo
                  </button>
                  <button onClick={() => deleteTodoClickHandler(todo)} className="btn btn-danger float-end">
                    Delete
                  </button>
                  {todo.do}
                </li>
            )
          }
        </ul>
      </>
  );
};
export default Todos;
