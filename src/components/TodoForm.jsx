import React, {useState} from 'react';
import PropTypes from "prop-types";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!value) {
            alert("no blank!");
            return;
        }
        addTodo(value);
        alert(value);
        setValue("");
    }

    const handleChange = e => {
        setValue(e.target.value);
    }

    console.log("value", value);
    return(
        <section className="add">
            <form className="add-form" onSubmit={handleFormSubmit}>
                <input type="text" className="add-input" value={value} onChange={handleChange}/>
                <button className="add-btn main-black-color">Add</button>
            </form>
        </section>
    )
}
TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
} 

export default TodoForm;