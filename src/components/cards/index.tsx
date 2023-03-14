import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { TeaTimeGames } from '../../types/games';
import Button from '../button';
import styles from './index.module.scss';

interface CardsData {
    data: TeaTimeGames[];
		type: string;
    selectedCardData: (record:Object) => void
}

export const CardTitle = ({title}: {title: string}) => {
    return (
        <h4 className={styles.cardTitle}>{title}</h4>
    )
}

const Cards: React.FC<CardsData> = ({data, selectedCardData, type="none"}) => {
	const navigate = useNavigate();
	const mapCardsData = () => {
		if(!data.length) return;
			return data.map((record, key) => 
				<section key={key} className={styles.primaryCard} onClick={() => selectedCardData(record)}>
					<CardTitle title={record.title} />
					{record.description.length ? <p className={styles.cardDescription}>{record.description}</p>: null}
					{type === "gameCard" && <Button
						buttonType="btn-secondary"
						text="Start Game"
						btnSize="btn-md"
						btnStyle="btn-rounded"
						onClick={() => navigate(`/games/${record.title.split(' ').join('_').toLowerCase()}`)}
          />}
				</section>
			)
    }

    return (
			<>
				{mapCardsData()}
			</>
    )
}

export default Cards;
