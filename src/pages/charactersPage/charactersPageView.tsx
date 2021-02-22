import React, { useEffect } from 'react';

import { LoadingComponent } from 'components';
import { ICharacterInfo } from 'shared/interfaces/store';

export interface ICharactersPageProps {
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
    useEffect(() => {
        getInitData();
    }, []);

    const onNextPage = () => {
        if (nextPageUrl) {
            getNextCharactersPage(nextPageUrl);
        }
    };

    if (isInitLoading) {
        return <LoadingComponent />;
    }
    return (
        <div>
            {charactersList?.map((character) => (
                <div key={character.id}>
                    <img width={50} height={50} src={character.avatarSrc} alt="Avatar" />
                    <b>{character.name}</b>
                    <hr />
                </div>
            )) || 'Oops, no characters :('}
            {nextPageUrl && <button onClick={onNextPage}>More characters</button>}
        </div>
    );
};
