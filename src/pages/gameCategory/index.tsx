import React, {useContext, useEffect} from 'react';
import Accordion from '../../components/accordion';
import { SelectedGameContext } from '../../context/gameLevelContext';


const GameCategory = () => {
	const {updateGameInfo, name}: any = useContext(SelectedGameContext);
	console.log(name);
	
	useEffect(() => {
		updateGameInfo('name', 'saboo');
	},[])

	console.log({updated: name});
	return (
		<>
		<h3>GameCategory Page</h3>
		<Accordion />
		</>
	)
}

export default GameCategory;
