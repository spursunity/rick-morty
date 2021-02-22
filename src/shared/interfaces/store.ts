/**
 * Store interfaces
 */

export interface ICharacterInfo {
    id: number;
    avatarSrc: string;
    name: string;
}

export interface ICharactersState {
    startLoading: boolean;
    charactersList: ICharacterInfo[];
    nextPageUrl: string | null;
}
