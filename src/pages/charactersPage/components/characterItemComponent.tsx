import React from 'react';

import { AVATAR_CHARACTER_ALT, AVATAR_CHARACTER_SIZE } from 'shared/constants';

interface ICharacterItemComponentProps {
    character: {
        id: number;
        avatarSrc: string;
        name: string;
    };
    rowRef: ((node?: Element | null) => void) | null;
}

const CharacterItem: React.FC<ICharacterItemComponentProps> = ({
    character: { avatarSrc, name },
    rowRef,
}: ICharacterItemComponentProps) => {
    const avatarSize = AVATAR_CHARACTER_SIZE.min;
    const avatarAlt = AVATAR_CHARACTER_ALT;

    return (
        <div ref={rowRef}>
            <img width={avatarSize} height={avatarSize} src={avatarSrc} alt={avatarAlt} />
            <b>{name}</b>
            <hr />
        </div>
    );
};

export const CharacterItemComponent = React.memo(CharacterItem);
