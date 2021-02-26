import React from 'react';

import './characterItemComponent.scss';
import { AVATAR_CHARACTER_ALT, AVATAR_CHARACTER_SIZE } from 'shared/constants';
import { ICharacterInfo } from 'shared/interfaces/store';

interface ICharacterItemComponentProps {
    character: ICharacterInfo;
    rowRef: ((node?: Element | null) => void) | null;
    setCurrentCharacter: (currentCharacter: ICharacterInfo) => void | undefined;
}

const CharacterItem: React.FC<ICharacterItemComponentProps> = ({
    character,
    rowRef,
    setCurrentCharacter,
}: ICharacterItemComponentProps) => {
    const avatarSize = AVATAR_CHARACTER_SIZE.min;
    const avatarAlt = AVATAR_CHARACTER_ALT;

    return (
        <div className="character-item" ref={rowRef}>
            <img
                className="character-item__avatar"
                width={avatarSize}
                height={avatarSize}
                src={character.avatarSrc}
                alt={avatarAlt}
                onClick={() => setCurrentCharacter(character)}
            />
            <b className="character-item__name" onClick={() => setCurrentCharacter(character)}>
                {character.name}
            </b>
        </div>
    );
};

export const CharacterItemComponent = React.memo(CharacterItem);
