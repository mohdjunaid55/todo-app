import React, { useEffect, useState } from "react";

export default function Input(props) {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputChange = (event) => {
    setTodo(event.target.value);

    if (event.target.value) {
      setError(false);
      setErrorMessage("");
    } else {
      setError(true);
      setErrorMessage("Please enter todo");
    }
  };

  const submit = (event) => {
    event.preventDefault();

    if (todo) {
      if (props.todos.includes(todo)) {
        setError(true);
        setErrorMessage("Todo already exists");
        return;
      }

      if (props.editData.index === -1) {
        props.addTodo(todo);
      } else {
        props.updateTodo(props.editData.index, todo);
      }

      setTodo("");
    } else {
      setError(true);
      setErrorMessage("Please enter todo");
    }
  };

  useEffect(() => {
    setTodo(props.editData.data || "");
  }, [props.editData.data, props.editData.index]);

  return (
    <section>
      <form onSubmit={submit} noValidate>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo"
              value={todo}
              onChange={inputChange}
            />
            {error && <p className="text-danger">{errorMessage}</p>}
          </div>
          
          <div className="col-2">
            <button className="btn btn-primary">
              {props.editData.index === -1 ? "Add" : "Update"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
