import Avatar from '@/components/ui/avatar';
import { Auth } from '@/types';
import { usePage } from '@inertiajs/react';

export default function ProfileSidebar() {
    const { auth } = usePage<{ auth: Auth }>().props;

    return (
        <div className="z-10 mt-28 mr-4 h-[calc(100%-10rem)] w-2/10 rounded-3xl bg-foreground p-4 text-white">
            <Avatar />
            <div className="mt-5 text-center font-[Bree_Serif] text-3xl">
                <div>Pontuação:</div>
                {auth.user.points}
            </div>
        </div>
    );
}
