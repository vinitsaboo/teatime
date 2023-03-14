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

    // const currentWidth = `${timerValue}%`;
    return (
        <section className={styles.progressBarWrapper}>
						<h4>{timerValue}</h4>
						{/* <div className={styles.progressInner}>
							<div className={styles.progressBar} style={{width: currentWidth}}>
							</div>
						</div> */}
						
        </section>
    )
}

export default Timer;
