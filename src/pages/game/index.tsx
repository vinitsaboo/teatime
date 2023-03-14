import React, { useContext, useEffect, useState } from 'react';
// import Timer from '../../components/timer';
import styles from './index.module.scss';
import GamesData from '../../json';
import { prop } from 'ramda';
import { GamePageData } from '../../types/games';
import { SelectedGameContext } from '../../context/gameLevelContext';
import RadioGroup from '../../components/radioButton';
import Timer from '../../components/timer';
import Button from '../../components/button';
// import RadioGroup from '../../components/radioButton';

const GamePage = () => {
	const [questionIndex, handleQuestionIndex] = useState<number>(0);
	const [currentGameInfo, fetchCurrentGameInfo] = useState(undefined);
	const {selectedGameDetails} = useContext(SelectedGameContext);
    
	useEffect(() => {
		const data = prop(`${selectedGameDetails?.round}`, GamesData);
		fetchCurrentGameInfo(data);
	},[])

	const fetchCurrentQuestion = () => {
		if(!currentGameInfo) return;
		return (
			<div className={styles.radioWrapper}>
				<RadioGroup
					groupData={currentGameInfo[questionIndex]}
					qNumber={questionIndex+1}
					handleRadioClick = {(selected, answerKey) => {console.log(selected, answerKey); return +selected === +answerKey ? window.alert('conrrect answer'): window.alert('wrong answer')}}
				/>
			</div>
		)
	}

	return (
		<section className={styles.pageWrapper}>
			<h3 className={styles.primaryBanner}>GameCategory Page</h3>
			<section className={styles.pageContent}>
				<Timer />
				{fetchCurrentQuestion()}
				<Button
					buttonType="btn-primary"
					text="Next"
					btnSize="btn-xs"
					btnStyle="btn-rounded"
					onClick={() => ''}
					/>
					<Button
					buttonType="btn-primary"
					text="Previous"
					btnSize="btn-xs"
					btnStyle="btn-rounded"
					onClick={() => ''}
					/>
			</section>
		</section>
	)
}

export default GamePage;
