import { useEffect, useRef, useState } from "react";
import styles from "./Timer.module.css";

const INITIAL_TIME = 10;

const Timer = () => {
    const intervalId = useRef();    // interval id 저장
    const [time, setTime] = useState(INITIAL_TIME);
    const [isRunning, setIsRunning] = useState(false); // 타이머 상태

    useEffect(() => {
        if (time === 0) {   // timer가 0이 될때
            setTime(INITIAL_TIME);
            setIsRunning(false);
            clearInterval(intervalId.current); // 타이머 멈추기
        }
    }, [time]);

    // 버튼 클릭 핸들러
    const handleStart = () => {
        intervalId.current = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
        clearInterval(intervalId.current);
    };

    return (
        <div className={styles.timerAppContainer}>
            <div className={styles.timerDisplay}>
                <span className={styles.value}>{time}</span>
                <span className={styles.unit}>초</span>
            </div>
            <div className={styles.timerButton}>
                {isRunning ? (
                    <button
                        className={styles.stopButton}
                        onClick={handleStop}>일시정지</button>
                ) : (
                    <button 
                        className={time < INITIAL_TIME ? styles.againButton : styles.startButton}
                        onClick={handleStart}
                    >{time < INITIAL_TIME ? "다시시작" : "시작"}</button>
                )}
            </div>
        </div>
    );
}

export default Timer;