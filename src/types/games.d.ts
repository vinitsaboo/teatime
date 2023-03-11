export interface SelectedGameDetails {
	category: string;
	round: string;
}

export interface GameProviderInterface {
	selectedGameDetails: Partial<SelectedGameDetails> | null;
	updateGameInfo: (data) => void | undefined;
}

export interface TeaTimeGames {
	title: string;
	description: string
}

export interface GameRoundItems {
	id: string;
	title: string;
	roundName: string;
	description: string;
	isCollapse?: boolean;
}

export interface GameNames {
	[key as string]: GameRoundItems[]
}