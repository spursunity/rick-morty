/**
 * Store interfaces
 */

export interface ICharacterInfo {
    id: number;
    avatarSrc: string;
    name: string;
    status: string;
    species: string;
    characterType: string;
    gender: string;
}

export interface ICharactersState {
    startLoading: boolean;
    charactersList: ICharacterInfo[];
    currentCharacter: ICharacterInfo | null;
    nextPageUrl: string | null;
}
