import TodoItems from "./TodoItems"

const TodoItem = ({ todoItems, onDeleteClick }) => {
    return (
        <div>
            {todoItems.map((item) => (
                <TodoItems
                    key={item.todoName}
                    todoName={item.todoName}
                    todoDate={item.todoDate}
                    onDeleteClick={onDeleteClick}
                ></TodoItems>

            ))}
        </div>
    )
}

export default TodoItem