import React from 'react';
import { RadioGroupData } from '../../types/games';
import styles from './index.module.scss';

const RadioGroup: React.FC<RadioGroupData> = ({groupData, handleRadioClick}) => {
	const {options, answerKey} = groupData;

	const fetchAlphabet = (key: number) => {
		switch (key) {
			case 0:
				return 'A'
				break;
			case 1:
				return 'B'
				break;
			case 2: 
				return 'C'
				break;
			default:
				return 'D'
				break;
		}
	}
	
	const mapRadioButtons = () => {
		return options.map(({name, value}, key) => 
			(<label htmlFor={name} key={key} className={styles.radioLabel}>
				<input type = "radio" value={value} id={name} onChange={event => handleRadioClick(event.target.value, answerKey)} name="gameQuestion" />
				({fetchAlphabet(key)}) - {name}
			</label>))
	}

	return (
		<div className={styles.optionsWrapper}>
			{mapRadioButtons()}
		</div>
	)
}

export default RadioGroup;
