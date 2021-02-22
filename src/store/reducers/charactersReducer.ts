import { ICharactersState } from 'shared/interfaces/store';
import { ECharactersActionTypes } from 'store/actions/charactersActions';

interface ICharactersAction {
    type: ECharactersActionTypes;
    payload?: Partial<ICharactersState>;
}

const initialState: ICharactersState = {
    startLoading: true,
    charactersList: [],
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
        default:
            return state;
    }
};
