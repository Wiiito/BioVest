import React, { useImperativeHandle, useState } from 'react';
import AvatarIcon from './AvatarIcon';

const ListAvatarIcons = React.forwardRef(({ iconsNames }: { iconsNames: string[] }, ref) => {
    const [avatarIcon, setAvatarIcon] = useState<string>('');

    useImperativeHandle(
        ref,
        () => ({
            getAvatarIcon: () => {
                return avatarIcon;
            },
        }),
        [avatarIcon],
    );

    return (
        <div className="custom-scroll flex h-full w-full flex-wrap justify-around gap-8 overflow-y-scroll p-5">
            {iconsNames.map((iconName) => {
                return (
                    <AvatarIcon
                        iconName={iconName}
                        onClick={() => {
                            setAvatarIcon(iconName);
                        }}
                        active={iconName == avatarIcon}
                    />
                );
            })}
        </div>
    );
});

export default ListAvatarIcons;
