import { ICharactersState } from 'shared/interfaces/store';
import { ECharactersActionTypes } from 'store/actions/charactersActions';

interface ICharactersAction {
    type: ECharactersActionTypes;
    payload?: Partial<ICharactersState>;
}

const initialState: ICharactersState = {
    startLoading: true,
    charactersList: [],
    currentCharacter: null,
    nextPageUrl: null,
};

export const charactersReducer = (state = initialState, action: ICharactersAction): ICharactersState => {
    switch (action.type) {
        case ECharactersActionTypes.successStartLoading:
            return {
                ...state,
                startLoading: false,
            };
        case ECharactersActionTypes.addCharactersPage:
            return {
                ...state,
                charactersList: [...state.charactersList, ...(action?.payload?.charactersList || [])],
                nextPageUrl: action.payload?.nextPageUrl || null,
            };
        case ECharactersActionTypes.setCurrentCharacter:
            return {
                ...state,
                currentCharacter: action.payload?.currentCharacter?.id ? { ...action.payload?.currentCharacter } : null,
            };
        default:
            return state;
    }
};
