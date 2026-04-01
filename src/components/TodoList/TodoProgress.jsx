import styles from "./TodoList.module.css";

const TodoProgress = ({ todos }) => {
    const completedTodos = todos.filter((todo) => todo.isCompleted)
    const completedCount = completedTodos.length;
    const allCount = todos.length;

    const progressRatio = allCount > 0 ? (completedCount / allCount) * 100 : 0;

    return (
        <div>
            <h3>진행률 <span>({completedCount} / {allCount})</span></h3>
            <div className={styles.TodoProgress}>
                <progress value={progressRatio} max="100" />
                <div>{Math.floor(progressRatio)}%</div>
            </div>
        </div>
    )
}

export default TodoProgress;