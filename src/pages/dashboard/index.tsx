import React from 'react';
import { useNavigate } from 'react-router-dom';
// import * as style from './dashboard/index.sass';

const GamesDashboard = () => {
    const navigate = useNavigate();
    const handleGameClick = () => {
       navigate('/game1');
    }

    return (
        <>
            <h3>Games/Quiz Dashboard</h3>
            <ul onClick={handleGameClick}>
                <li>Bollywood Games</li>
                <li>Advertisement Games</li>
            </ul>
        </>
    )
}

export default GamesDashboard;
