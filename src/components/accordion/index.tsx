import React, { useState } from 'react';
import { GameRoundItems } from '../../types/games';

interface  AccordionItems{
    data: GameRoundItems[];
}

const Accordion:React.FC<AccordionItems> = ({data}) => {
    const propsData = data.map((record) => ({...record, isCollapse: false}));

    const [accordionData, handleAccordionData] = useState(propsData);
    
    const handleAccordionClick = (id: string):void => {
        console.log(id);
        const saboo =  accordionData.map(data => ({
            ...data,
            isCollapse: id === data.id
        }))
        console.log({saboo})
        handleAccordionData(saboo)
    }

    const accordionStructure = (items:GameRoundItems[]) => items.map(({id, isCollapse, title, description}) => {
        return (
            <div key={id}>
                <h3 onClick={(event) => handleAccordionClick(id)}>{title}</h3>
                {isCollapse && <p>{description}</p>}
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
