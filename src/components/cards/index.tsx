import React, { useState } from 'react';
import { TeaTimeGames } from '../../types/games';
import styles from './index.module.scss';

interface CardsData {
    data: TeaTimeGames[];
    selectedCardData: (record:Object) => void
}

export const CardTitle = ({title}: {title: string}) => {
    return (
        <h3>{title}</h3>
    )
}

const Cards: React.FC<CardsData> = ({data, selectedCardData}) => {
	const mapCardsData = () => {
		if(!data.length) return;
			return data.map((record, key) => 
				<section key={key} className={styles.cardItem} onClick={() => selectedCardData(record)}>
					<CardTitle title={record.title} />
					{record.description.length ? <p>{record.description}</p>: null}
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
