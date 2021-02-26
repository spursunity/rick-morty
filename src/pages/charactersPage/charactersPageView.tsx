import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useHistory } from 'react-router-dom';

import { LoadingComponent } from 'components';
import { ICharacterInfo } from 'shared/interfaces/store';
import { CharacterItemComponent } from './components/characterItemComponent';
import { APP_ROUTING_PATHS } from 'shared/constants';

interface ICharactersPageProps {
    isInitLoading: boolean;
    charactersList: ICharacterInfo[];
    nextPageUrl: string | null;
    getInitData: () => void;
    getNextCharactersPage: (nextPageUrl: string) => void;
    setCurrentCharacter: (currentCharacter: ICharacterInfo) => void;
}

export const CharactersPageView: React.FC<ICharactersPageProps> = ({
    isInitLoading = false,
    charactersList = [],
    nextPageUrl,
    getInitData,
    getNextCharactersPage,
    setCurrentCharacter,
}: ICharactersPageProps) => {
    const [lastRowRef, lastRowInView] = useInView();
    const history = useHistory();

    useEffect(() => {
        if (charactersList?.length) {
            if (nextPageUrl && lastRowInView) {
                getNextCharactersPage(nextPageUrl);
            }
        } else {
            getInitData();
        }
    }, [lastRowInView]);

    if (isInitLoading) {
        return <LoadingComponent />;
    }
    return (
        <div>
            {charactersList?.map((character, index) => {
                const ref = index === charactersList.length - 1 ? lastRowRef : null;
                return (
                    <CharacterItemComponent
                        key={character.id}
                        character={character}
                        rowRef={ref}
                        setCurrentCharacter={(currentCharacter: ICharacterInfo) => {
                            setCurrentCharacter(currentCharacter);
                            history.push(`${APP_ROUTING_PATHS.currentCharacter}${character.id}`);
                        }}
                    />
                );
            }) || 'Oops, no characters :('}
        </div>
    );
};
