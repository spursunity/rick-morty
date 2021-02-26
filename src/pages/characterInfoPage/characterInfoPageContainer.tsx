import { connect } from 'react-redux';

import { RootState } from 'store/reducers';
import { CharacterInfoPageView } from './characterInfoPageView';

const mapStateToProps = (state: RootState) => ({
    character: state.characters.currentCharacter,
});

export const CharacterInfoPageContainer = connect(mapStateToProps, null)(CharacterInfoPageView);
