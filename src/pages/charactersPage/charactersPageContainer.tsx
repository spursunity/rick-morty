import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ICharacterInfo } from 'shared/interfaces/store';
import { getInitCharactersPage, getNextCharactersPage, setCurrentCharacter } from 'store/actions';
import { RootState } from 'store/reducers';
import { CharactersPageView } from './charactersPageView';

const mapStateToProps = (state: RootState) => ({
    isInitLoading: state.characters.startLoading,
    charactersList: state.characters.charactersList,
    nextPageUrl: state.characters.nextPageUrl,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getInitData: () => {
        dispatch(getInitCharactersPage());
    },
    getNextCharactersPage: (nextPageUrl: string) => {
        dispatch(getNextCharactersPage(nextPageUrl));
    },
    setCurrentCharacter: (currentCharacter: ICharacterInfo) => {
        dispatch(setCurrentCharacter(currentCharacter));
    },
});

export const CharactersPageContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersPageView);
