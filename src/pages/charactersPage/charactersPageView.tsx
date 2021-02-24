import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { LoadingComponent } from 'components';
import { ICharacterInfo } from 'shared/interfaces/store';
import { CharacterItemComponent } from './components/characterItemComponent';

interface ICharactersPageProps {
    isInitLoading: boolean;
    charactersList: ICharacterInfo[];
    nextPageUrl: string | null;
    getInitData: () => void;
    getNextCharactersPage: (nextPageUrl: string) => void;
}

export const CharactersPageView: React.FC<ICharactersPageProps> = ({
    isInitLoading = false,
    charactersList = [],
    nextPageUrl,
    getInitData,
    getNextCharactersPage,
}: ICharactersPageProps) => {
    const [lastRowRef, lastRowInView] = useInView();

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
                return <CharacterItemComponent key={character.id} character={character} rowRef={ref} />;
            }) || 'Oops, no characters :('}
        </div>
    );
};
