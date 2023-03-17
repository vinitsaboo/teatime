import React, { useContext, useEffect, useState } from 'react';
import styles from './index.module.scss';
import GamesData from '../../json';
import { prop } from 'ramda';
import { GamePageData } from '../../types/games';
import { SelectedGameContext } from '../../context/gameLevelContext';
import RadioGroup from '../../components/radioButton';
import Timer from '../../components/timer';
import Button from '../../components/button';

const GamePage = () => {
	const [questionIndex, handleQuestionIndex] = useState<number>(0);
	const [currentGameInfo, fetchCurrentGameInfo] = useState(undefined);
	const {selectedGameDetails} = useContext(SelectedGameContext);
	const [showNotification, handleNotification] = useState<boolean>(false);
    
	useEffect(() => {
		const data = prop(`${selectedGameDetails?.round}`, GamesData);
		fetchCurrentGameInfo(data);
	},[])
	
	
	const fetchCurrentQuestion = () => {
		if(!currentGameInfo) return;
		const {question = '', answerKey = ''} = currentGameInfo?.[questionIndex];
		return (
				<>
				<h4 className={styles.questionBox}>Q{questionIndex + 1}.{question}</h4>
				<RadioGroup
					groupData={currentGameInfo[questionIndex]}
					qNumber={questionIndex+1}
					handleRadioClick = {(selected) => { return +selected === +answerKey ? window.alert('conrrect answer'): window.alert('wrong answer')}}
				/>
			</>
		)
	}

	const updateQuestion = () => {
		handleQuestionIndex(questionIndex + 1)
	}

	return (
		<section className={styles.pageWrapper}>
			<h3 className={styles.primaryBanner}>GameCategory Page</h3>
			<section className={styles.pageContent}>
				<Timer />
			<div className={styles.radioWrapper}>
				{fetchCurrentQuestion()}
				<div className={styles.buttonFooter}>
					
					<Button
						buttonType="btn-primary"
						text="Hint"
						btnSize="btn-xs"
						btnStyle="btn-rounded"
						onClick={() => ''}
					/>
					<Button
						buttonType="btn-primary"
						text="Next"
						btnSize="btn-xs"
						btnStyle="btn-rounded"
						onClick={() => updateQuestion()}
					/>
				</div>
			</div>
			</section>
		</section>
	)
}

export default GamePage;
