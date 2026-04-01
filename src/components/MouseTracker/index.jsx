import { useState } from "react";   
import styles from "./MouseTracker.module.css";

const MouseTracker = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clickedPositions, setClickedPositions] = useState([]);

    // 코드 최적화 : 중복된 코드를 함수로 추출
    const getOffsetInfo = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const offsetX = Math.round(e.clientX - rect.left);
        const offsetY = Math.round(e.clientY - rect.top);

        return {
            offsetX,
            offsetY,
        };
    };

    return (
        <>
            <div className={styles.trackerInfo}>
                현재 위치 x: {position.x}, y: {position.y}
            </div>
            <div className={styles.trackerArea}
                onMouseMove={(e) => {
                    // const offset = getOffsetInfo(e);
                    const { offsetX, offsetY } = getOffsetInfo(e);

                    setPosition({
                        x: offsetX,
                        y: offsetY,
                    });
                } }
                onClick={(e) => {
                    const { offsetX, offsetY } = getOffsetInfo(e);

                    setClickedPositions([...clickedPositions, { x: offsetX, y: offsetY }]);
                } }
            >
                마우스 트래킹하는 공간
                <div className={styles.trackerBall}
                    style={{
                        top: position.y,
                        left: position.x,
                    }} />
                {clickedPositions.map((clickedPositions, index) => {
                    return <div key={index}
                        className={styles.clickedBall}
                        style={{
                            top: clickedPositions.y,
                            left: clickedPositions.x,
                        }} />;
                })}
            </div>
        </>
    );
}

export default MouseTracker;