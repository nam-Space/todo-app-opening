import React, { useState } from "react";

const TodoApp = () => {
    const [value, setValue] = useState("");
    const [lists, setLists] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        setLists([...lists, value]);
    };

    return (
        <div className="container">
            <h1>TodoApp</h1>
            <input type="text" onChange={handleChange} />
            <br />
            <button className="btn btn-success" onClick={handleSubmit}>
                Add
            </button>
            <br />
            <ul>
                {lists.map((list) => (
                    <li>{list}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
