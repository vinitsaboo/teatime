import {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectedGameContext } from '../../context/gameLevelContext';
import GamesData from '../../json';
import { TeaTimeGames } from '../../types/games';
import Cards from './../../components/cards';
import styles from './index.module.scss';

const GamesDashboard = (props:any) => {
		const [gamesList, fetchGamesList] = useState<TeaTimeGames[] | undefined>(undefined);
		const {updateGameInfo, selectedGameDetails} = useContext(SelectedGameContext);
    const navigate = useNavigate();

		useEffect(() => {
			fetchGamesList([...GamesData.teatimeGames]);
		}, []);


		const fetchGameList = () => {
			if(!gamesList?.length) return;
			return <Cards data={gamesList} selectedCardData={(recordInfo:any) => handleGameClick(recordInfo)} />
			// return Object.values(gamesList).map((data, key) => 
			// 	<dt className={styles.gameListItem} key={`game_${key}`} onClick={() => handleGameClick(key)}>{data}</dt>
			// )
		}

		const handleGameClick = (recordInfo:TeaTimeGames) => {
			console.log(recordInfo);
			const currentGameName = recordInfo.title.split(' ').join('_').toLowerCase();
			updateGameInfo({...selectedGameDetails, category: currentGameName})
			navigate(`/games/${currentGameName}`);
		}
		
    return (
			<section className={styles.gameCardWrapper}>
			<h3>Games Dashboard</h3>
				<section className={styles.gameSection}>	
					{fetchGameList()}
				</section>					 
				{props.children}
			</section>
    )
}

export default GamesDashboard;
