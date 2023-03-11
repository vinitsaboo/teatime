import {useContext, useEffect, useState} from 'react';
import Accordion from '../../components/accordion';
import { SelectedGameContext } from '../../context/gameLevelContext';
import GamesData from '../../json';
import { GameNames, GameRoundItems } from '../../types/games';

const GameCategory = () => {
	const {selectedGameDetails} = useContext(SelectedGameContext);
	const [gameRounds, updateGameRounds] = useState<GameRoundItems[] | null>(null);
	useEffect(() => {
		if(!selectedGameDetails) return;
		const {category} = selectedGameDetails;
		updateGameRounds(GamesData[category as keyof GameNames])
	},[])

		const mapAccordionData = () => {
			if(!gameRounds) return;
			return (
				<Accordion data = {gameRounds} />
			)
		};
		
    console.log(gameRounds);
	return (
		<>
		<h3>GameCategory Page</h3>
		{mapAccordionData()}
		</>
	)
}

export default GameCategory;

