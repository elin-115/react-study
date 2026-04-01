import { useState } from "react";
import styles from "./TodoList.module.css";

const TodoInput = ({ onCreate }) => {
    const [value, setValue] = useState("");

    return (
        <div className={styles.todoInput}>
            <input value={value}
                   placeholder="할 일을 입력해 주세요."
                   onChange={(e) => {
                    setValue(e.target.value);
                   }} 
            />
            <button onClick={() => {
                if (value.length === 0) { // input이 빈값일때 alert
                    alert("할 일을 입력해 주세요.");
                    return;
                }
                onCreate(value); // 클릭시 input 내용 리스트에 추가
                setValue("");    // 클릭시 input 내용 clear
            }}>
                추가
            </button>
        </div>
    )
}

export default TodoInput;