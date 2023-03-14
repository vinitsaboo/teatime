import React from 'react';
import { RadioGroupData } from '../../types/games';
import styles from './index.module.scss';

const RadioGroup: React.FC<RadioGroupData> = ({groupData, qNumber, handleRadioClick}) => {
	
	const {question, options, answerKey} = groupData;
	console.log(groupData);

	const mapRadioButtons = () => {
		return options.map(({name, value}, key) => 
			(<label htmlFor={name} key={key} className={styles.radioLabel}>
				<input type = "radio" value={value} id={name} onChange={event => handleRadioClick(event.target.value, answerKey)} name="gameQuestion" />
				{name}
			</label>))
	}

	return (
		<div style={{width: '100%'}}>
			<h4 className={styles.questionBox}>{qNumber} {question}</h4>
			{mapRadioButtons()}
		</div>
	)
}

export default RadioGroup;
