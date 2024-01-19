import TodoName from "../components/TodoName";
import TodoItem from "../components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "../components/AddTodo";
import WelcomeMessage from "../components/WelcomeMessage";
import { useState } from "react";

const Todo = () => {
    const [todoItems, setTodoItems] = useState([
        // {
        //     todoName: "Gym",
        //     todoDate: "23-12-2023",
        // },
        // {
        //     todoName: "Reading",
        //     todoDate: "23-12-2023",
        // },
        // {
        //     todoName: "Working",
        //     todoDate: "23-12-2023",
        // },
    ]);

    const handleDelete = (todoItemName) => {
        const newTodoItem = todoItems.filter((item) => item.todoName !== todoItemName);
        setTodoItems(newTodoItem);
    };

    const handleAddTodo = (todoName, todoDate) => {
        const newTodo = [...todoItems, { todoName: todoName, todoDate: todoDate }]
        setTodoItems(newTodo)
    }

    return (
        <>
            <TodoName />
            <AddTodo
                addNewTodo={handleAddTodo}
            />
            {todoItems.length === 0 && <WelcomeMessage />}

            <TodoItem
                todoItems={todoItems}
                onDeleteClick={handleDelete}
            />
        </>
    );
};

export default Todo;
