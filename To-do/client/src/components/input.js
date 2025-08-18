import React, { Fragment, useState } from "react";

const InputTodo = () => {
  
  const [description, setDescription] = useState("");

  const onSubmitForm = async () => {
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ description })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setDescription("");
    })
    .catch(err => console.error(err));
  }

  return (
    <Fragment>
        <h1 className="text-center mt-5">Enter Todo</h1>
        <form className="d-flex mt-5 ">
            <input type="text" className="form-control" value={description}
            onChange={e => {
                setDescription(e.target.value);
            }}></input>
            <button className="btn btn-success" onClick={onSubmitForm}>Add</button>
        </form>
    </Fragment>
  );
};

export default InputTodo;
