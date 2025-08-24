import ListAvatarIcons from '@/components/ui/avatar-icons/ListAvatarIcons';
import DefaultButton from '@/components/ui/defaultButton';
import { router, usePage } from '@inertiajs/react';
import { useRef } from 'react';

export default function ChangeProfileModal({ setBackground }: { setBackground: Function }) {
    const backgroundRef = useRef(null);
    const listRef = useRef<null | { getAvatarIcon: Function }>(null);

    const { iconsNames } = usePage<{ iconsNames: string[] }>().props;

    const submitIconChange = () => {
        const selectedIcon = listRef.current?.getAvatarIcon();
        router.put(route('profile.icon.change'), {
            iconName: selectedIcon,
        });
        setBackground(false);
    };

    return (
        <>
            <div className="fixed z-20 h-screen w-screen bg-input opacity-40" ref={backgroundRef} onClick={() => setBackground(false)}></div>
            <div className="fixed top-1/2 left-1/2 z-30 h-4/5 w-4/5 -translate-1/2 transform rounded-4xl bg-background p-5 lg:w-1/2">
                <h2 className="text-center font-[Bree_serif] text-3xl">Selecione seu avatar</h2>
                <div className="h-[calc(100%-5rem)]">
                    <ListAvatarIcons iconsNames={iconsNames} ref={listRef} />
                </div>
                <div className="mt-2 flex justify-between px-3">
                    <DefaultButton className="cursor-pointer" onClick={() => setBackground(false)}>
                        Cancelar
                    </DefaultButton>
                    <DefaultButton className="cursor-pointer" onClick={submitIconChange}>
                        Enviar
                    </DefaultButton>
                </div>
            </div>
        </>
    );
}
