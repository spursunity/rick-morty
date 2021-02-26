import React from 'react';

import { AVATAR_CHARACTER_ALT, AVATAR_CHARACTER_SIZE } from 'shared/constants';
import { ICharacterInfo } from 'shared/interfaces/store';

interface ICharacterInfoPageProps {
    character: ICharacterInfo;
}

export const CharacterInfoPageView: React.FC<ICharacterInfoPageProps> = ({
    character: { avatarSrc, name, id },
}: ICharacterInfoPageProps) => {
    const avatarAlt = AVATAR_CHARACTER_ALT;
    const avatarSize = AVATAR_CHARACTER_SIZE.max;

    return (
        <div className="character-info">
            <img
                className="character-info__avatar"
                width={avatarSize}
                height={avatarSize}
                src={avatarSrc}
                alt={avatarAlt}
            />
            <b>{name}</b>
        </div>
    );
};
