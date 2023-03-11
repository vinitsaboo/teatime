import React, { createContext, useState } from 'react';
import { SelectedGameDetails, GameProviderInterface } from '../types/games';


const initalContextState = {
    selectedGameDetails: {
        category: '',
        round: ''
    },
    updateGameInfo: () => undefined
}
export const SelectedGameContext = createContext<GameProviderInterface>(initalContextState);

const GameContextProvider = ({children}:{children: any}) => {
    const [gameInfo, updateGameInfo] = useState<Partial<SelectedGameDetails>>(initalContextState.selectedGameDetails);

    const updateGameDetails = (data: SelectedGameDetails) => {
        updateGameInfo(data);
    }

    const providerValue = {
        selectedGameDetails: gameInfo,
        updateGameInfo: updateGameDetails,
    };

    return <SelectedGameContext.Provider value={providerValue}>{children}</SelectedGameContext.Provider>
}

export default GameContextProvider;
