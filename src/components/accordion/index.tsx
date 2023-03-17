import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { GameRoundItems } from '../../types/games';
import Button from '../button';
import styles from './index.module.scss';
interface  AccordionItems{
    data: GameRoundItems[];
    category?: string;
    fetchRoundName: (roundName: string) => void;
}

const Accordion:React.FC<AccordionItems> = ({data, category = '', fetchRoundName}) => {
    const propsData = data.map((record) => ({...record, isCollapse: false}));
    const navigate = useNavigate();
    const [accordionData, handleAccordionData] = useState(propsData);
    
    const handleAccordionClick = (id: string):void => {
        const updatedAccordionData =  accordionData.map(data => ({
            ...data,
            isCollapse: id === data.id && !data.isCollapse
        }))
        
        handleAccordionData(updatedAccordionData)
    }

    const handleButtonClick = (roundName:string) => {
        fetchRoundName(roundName);
        navigate(`/games/${category}/${roundName}`);
    }

    const accordionStructure = (items:GameRoundItems[]) => items.map(({id, isCollapse, title, description, roundName}) => {
        return (
            <div key={id} className={`${styles.primaryAccordion} ${styles[isCollapse ? 'activeDeck' : 'normal']}`}>
                <div className={styles.accordionHeader} onClick={() => handleAccordionClick(id)}>
                    <h4 className={styles.title} >{title}</h4>
                    <i className={`${styles.arrow} ${styles[isCollapse ? 'up' : 'down']}`}></i>
                </div>
                {isCollapse && 
                <div className={styles.accordionContent}>
                    <p className={styles.cardDescription}>{description}</p>
                    <Button
                        buttonType="btn-primary"
                        text="Browse Games"
                        btnSize="btn-xs"
                        btnStyle="btn-rounded"
                        onClick={() => handleButtonClick(roundName)}
                        />
                </div>
                }
            </div>
        )
    });

    return (
        <>
            {accordionStructure(accordionData)}
        </>
    )
}

export default Accordion;
