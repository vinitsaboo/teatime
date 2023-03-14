import {useContext, useEffect, useState} from 'react';
import Accordion from '../../components/accordion';
import { SelectedGameContext } from '../../context/gameLevelContext';
import GamesData from '../../json';
import { GameNames, GameRoundItems } from '../../types/games';
import styles from './index.module.scss';

const GameCategory = () => {
	const {selectedGameDetails, updateGameInfo} = useContext(SelectedGameContext);
	const [gameRounds, updateGameRounds] = useState<GameRoundItems[] | null>(null);
	useEffect(() => {
		if(!selectedGameDetails) return;
		const {category} = selectedGameDetails;
		updateGameRounds(GamesData[category as keyof GameNames])
	},[])

	const updateContextData = (currentRound: string) => updateGameInfo({...selectedGameDetails, round: currentRound})
		const mapAccordionData = () => {
			if(!gameRounds) return;
			return (
				<Accordion data = {gameRounds} category={selectedGameDetails?.category} fetchRoundName={roundName => updateContextData(roundName)} />
			)
		};
		
	return (
		<section className={styles.categoryPageWrapper}>
			<h3 className={styles.primaryBanner}>GameCategory Page</h3>
			<section className={styles.centerSections}>
				{mapAccordionData()}
			</section>
		</section>
	)
}

export default GameCategory;

