import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const Timer = () => {
    const [timerValue, updateTimerValue] = useState<number>(60);

    useEffect(() => {
        clearTimeout(timerValue);
    }, [timerValue <= 0]);

    setTimeout(() => {
        if(timerValue <= 0) return;
        updateTimerValue(timerValue - 1)
    }, (1000));

    const currentWidth = `${(timerValue * 100) / 60}%`;
    return (
        <section className={styles.progressBarWrapper}>
            <h4>Time Left:</h4>
            <div className={styles.progressBar}>
                <div className={styles.progressInner} style={{width:currentWidth}}></div>
            </div>
            <h2>{timerValue}s</h2>
        </section>
    )
}

export default Timer;
