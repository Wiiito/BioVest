import { useAppearance } from '@/hooks/use-appearance';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Avatar() {
    const { auth } = usePage<SharedData>().props;
    const { appearance } = useAppearance();

    let imagePath = '/images/account-icons/';

    if (!auth.user.profile_icon) {
        imagePath += `without/without-icon-${appearance === 'system' ? 'light' : appearance}.png`;
    } else {
        imagePath += auth.user.profile_icon + '.png';
    }

    return (
        <div className={'overflow-hidden rounded-full border-8 border-white dark:border-background' + (auth.user.profile_icon ?? ' p-12')}>
            <img src={imagePath} alt="profile-icon" className="size-full" />
        </div>
    );
}
