export interface SelectedGameDetails {
	category: string;
	round: string;
	[key as string]: string;
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

export interface RadioOptions {
	name: string;
	value: number;
}
export interface RadioGroupInterface {
	question: string;
	options: RadioOptions[];
	answerKey: string | number;
}

export interface RadioGroupData {
    groupData: RadioGroupInterface;
	handleRadioClick: (a,b) => void
	qNumber: number;
}

export interface GamePageData {
	[key as string]: RadioGroupInterface[]
}