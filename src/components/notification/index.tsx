import React from 'react';
import styles from './index.module.scss';

interface NotificationData {
    type: 'success' | 'error',
    message: string;
}

const Notification: React.FC<NotificationData> = ({type, message}) => {

    return (
        <section className={styles[type]}>
            <p>{message}</p>
        </section>
    )
}

export default Notification;
