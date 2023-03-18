import React from 'react';
import styles from './index.module.scss';

interface ButtonInterface {
    buttonType: string;
    text: string;
    btnSize: string;
    btnStyle:string;
    onClick: (data?: any) => void;
    isDisabled?:boolean
}

const Button: React.FC<ButtonInterface> = ({buttonType, text, btnSize, btnStyle, isDisabled=false, onClick}) => {
    const handleButtonClick = (event:any) => {
        onClick(event)
    }
    return (
    <>
        <button disabled={isDisabled} className={`${styles[buttonType]} ${styles[btnSize]} ${styles[btnStyle]}`} onClick={handleButtonClick}>{text}</button>
    </>
    )
}

export default Button;