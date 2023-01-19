import React, { createContext, useState } from 'react';
import { SelectedGameDetails, GameProviderInterface } from '../types/games';

export const SelectedGameContext = createContext<GameProviderInterface | null>(null);

const GameContextProvider = ({children}:{children: any}) => {
    const [selectedGameDetails, handleSelectedGameDetails] = useState<SelectedGameDetails>({
        name: '',
        category: '',
        round: '',
    })
    const updateGameInfo = (keyName: string, roundName: string) => {
        handleSelectedGameDetails({...selectedGameDetails, [keyName]: roundName})
    }

    const providerValue = {
        ...selectedGameDetails,
        updateGameInfo,
    };

    return <SelectedGameContext.Provider value={providerValue}>{children}</SelectedGameContext.Provider>
}

export default GameContextProvider;
