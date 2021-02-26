import { ICharactersState } from 'shared/interfaces/store';

export enum ECharactersActionTypes {
    getInitCharactersPage = 'GET_INIT_CHARACTERS_PAGE',
    addCharactersPage = 'ADD_CHARACTERS',
    getNextCharactersPage = 'GET_NEXT_CHARACTERS_PAGE',
    successStartLoading = 'SUCCESS_START_LOADING',
    setCurrentCharacter = 'SET_CURRENT_CHARACTER',
}

type TCharactersAction = (data?: any) => { type: ECharactersActionTypes; payload?: Partial<ICharactersState> };

export const setSuccessStartLoading: TCharactersAction = () => ({
    type: ECharactersActionTypes.successStartLoading,
});

export const getInitCharactersPage: TCharactersAction = () => ({
    type: ECharactersActionTypes.getInitCharactersPage,
});

export const addCharacters: TCharactersAction = (response) => {
    const charactersList =
        response?.data?.results?.map(({ id, image: avatarSrc, name }: any) => ({
            id,
            avatarSrc,
            name,
        })) || [];
    const payload = {
        charactersList,
        nextPageUrl: response?.data?.info?.next,
    };

    return { type: ECharactersActionTypes.addCharactersPage, payload };
};

export const getNextCharactersPage: TCharactersAction = (nextPageUrl) => ({
    type: ECharactersActionTypes.getNextCharactersPage,
    payload: { nextPageUrl },
});

export const setCurrentCharacter: TCharactersAction = (currentCharacter) => ({
    type: ECharactersActionTypes.setCurrentCharacter,
    payload: { currentCharacter },
});
