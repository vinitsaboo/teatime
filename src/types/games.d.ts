export interface SelectedGameDetails {
	name: string;
	category: string;
	round: string;
}

export interface GameProviderInterface extends SelectedGameDetails{
	updateGameInfo?: (a,b) => void
}

