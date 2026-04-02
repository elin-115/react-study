import { useState } from "react";
import styles from "./Counter.module.css";

const CounterController = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [histories, setHistories] = useState([]);

    return (
        <div className={styles.counterContainer}>
            <div className={styles.value}>{count}</div>
            <div className={styles.controllBox}>
                <div className={styles.controller}>
                    <button onClick={() =>{
                        setCount(count - step);
                        // [] => [-step]
                        // [+4] => [+4, -step]
                        setHistories([...histories, -step]);
                        }}
                    >-</button>
                    <button onClick={() =>{
                        setCount(count + step);
                        setHistories([...histories, +step]);
                        }}
                    >+</button>
                </div>
                <div className={styles.stepper}>
                    <label for="stepper">변화량(증감 단위)</label>
                    <input type="number" id="stepper"
                            value={step}
                            onChange={(e) => {
                                const nextStep = Number(e.target.value);
                                if (nextStep >= 1) {
                                    setStep(nextStep);
                                }
                            }} 
                    />
                </div>
            </div>
            <div className={styles.result}>
                <h3>변경내역</h3>
                {
                    histories.length === 0 ? (
                        <div>변경내역이 없습니다.</div>
                    ) : (
                        <ol>
                            {histories.map((history, index) => (
                                <li key={`${index}-${history}`}>{history}</li>
                            ))}
                        </ol>
                    )
                }
            </div>
        </div>
    );
}

export default CounterController;