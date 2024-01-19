import { useState } from "react"

const AddTodo = ({ addNewTodo }) => {
    const [todoName, setTodoName] = useState();
    const [todoDate, setTodoDate] = useState();


    const handleTodoName = (event) => {
        setTodoName(event.target.value)
    }
    const handleTodoDate = (event) => {
        setTodoDate(event.target.value);
    }
    const addButtonClicked = () => {
        addNewTodo(todoName, todoDate);
        setTodoName("");
        setTodoDate("");
    }
    return (
        <div className="container">
            <div className='row to-row'>
                <div className="col-4">
                    <input
                        type="text"
                        placeholder='Enter your Todo here...'
                        value={todoName}
                        required
                        onChange={(event) => handleTodoName(event)}
                    />
                </div>
                <div className="col-4">
                    <input
                        type="date"
                        value={todoDate}
                        required
                        onChange={(event) => handleTodoDate(event)}
                    />
                </div>
                <div className="col-2">
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={addButtonClicked}
                    >Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo