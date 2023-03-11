import {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectedGameContext } from '../../context/gameLevelContext';
import GamesData from '../../json';
import styles from './index.module.scss';

const GamesDashboard = (props:any) => {
		const [gamesList, fetchGamesList] = useState<Object>({});
		const {updateGameInfo, selectedGameDetails} = useContext(SelectedGameContext);
    const navigate = useNavigate();

		useEffect(() => {
			fetchGamesList({...GamesData.teatimeGames});
		}, []);


		const fetchGameList = () => {
			if(!(Object.keys(gamesList).length)) return;
			return Object.values(gamesList).map((data, key) => 
				<dt className={styles.gameListItem} key={`game_${key}`} onClick={() => handleGameClick(key)}>{data}</dt>
			)
		}

		const handleGameClick = (key: number) => {
			const currentGameName = Object.values(gamesList)[key].split(' ').join('_').toLowerCase();
			updateGameInfo({...selectedGameDetails, category: currentGameName})
			navigate(`/games/${currentGameName}`);
		}
		
    return (
			<>
			<h3>Games Dashboard</h3>					 
				<dl>
					{fetchGameList()}
				</dl>
				{props.children}
			</>
    )
}

export default GamesDashboard;
