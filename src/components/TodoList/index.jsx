import { useState } from 'react';
import TodoInput from './TodoInput'
import TodoListItems from './TodoListItems'
import TodoProgress from './TodoProgress'
import styles from "./TodoList.module.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const handleCreate = (value) => {
            setTodos([
            ...todos, 
            { // value를 객체를 사용해 넣어주기
                id: Math.random(),
                text: value,
                isCompleted: false,
            },
            ]);
    };

    const handleToggle = (id) => {
        const nextTodos = todos.map((todo) => {
        if(todo.id !== id) {
            return todo;
        }
        return {
            ...todo,
            isCompleted: !todo.isCompleted,
        };
        });
        setTodos(nextTodos);
    };

    const handleDelete = (id) => {
        const nextTodos = todos.filter((todo) => {
        if (todo.id !== id) {
            return true;
        }
        return false;
        });
        setTodos(nextTodos);
    };
    return (
        <div className={styles.todoListContainer}>
            <TodoInput onCreate={handleCreate} />
            <TodoListItems todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
            <TodoProgress todos={todos} />
        </div>
    );
}

export default TodoList;