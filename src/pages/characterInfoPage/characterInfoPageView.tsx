import React from 'react';

import './characterInfoPage.scss';
import { AVATAR_CHARACTER_ALT, AVATAR_CHARACTER_SIZE } from 'shared/constants';
import { ICharacterInfo } from 'shared/interfaces/store';

interface ICharacterInfoPageProps {
    character: ICharacterInfo;
}

export const CharacterInfoPageView: React.FC<ICharacterInfoPageProps> = ({
    character: { avatarSrc, name, status, species, characterType, gender },
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
            <p className="character-info-field">
                <b className="character-info__title">Name:</b>
                <span>{name}</span>
            </p>
            <p className="character-info-field">
                <b className="character-info__title">Status:</b>
                <span>{status}</span>
            </p>
            <p className="character-info-field">
                <b className="character-info__title">Species:</b>
                <span>{species}</span>
            </p>
            {characterType && (
                <p className="character-info-field">
                    <b className="character-info__title">Type:</b>
                    <span>{characterType}</span>
                </p>
            )}
            <p className="character-info-field">
                <b className="character-info__title">Gender:</b>
                <span>{gender}</span>
            </p>
        </div>
    );
};
