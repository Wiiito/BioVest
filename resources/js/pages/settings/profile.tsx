import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

import SinglePageNoScrollLayout from '@/components/layout/SinglePageNoScrollLayout';
import Avatar from '@/components/ui/avatar';
import ChangeProfileModal from './changeProfile';

export default function Profile({ accountIcons }: { accountIcons: string[] }) {
    const [showChangeAvatarModal, setShowChangeAvatarModal] = useState<boolean>(false);

    const { auth } = usePage<SharedData>().props;

    return (
        <>
            {showChangeAvatarModal && <ChangeProfileModal setBackground={setShowChangeAvatarModal} />}
            <SinglePageNoScrollLayout>
                <form>
                    <div className="fixed top-1/2 left-1/2 z-10 flex w-11/12 -translate-1/2 transform flex-col items-center rounded-xl bg-foreground p-12 md:flex-row">
                        <div
                            onClick={() => setShowChangeAvatarModal(true)}
                            className="mb-24 aspect-square w-72 min-w-72 cursor-pointer md:mr-8 md:mb-0"
                        >
                            <Avatar />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center">
                                <label htmlFor="name" className="mr-2 font-[Bree_Serif] text-nowrap text-white dark:text-background">
                                    Nome do usuario:
                                </label>

                                <input
                                    id="name"
                                    defaultValue={auth.user.name}
                                    className="block w-full font-[Bree_Serif] text-white outline-none dark:text-background"
                                    required
                                    autoComplete="name"
                                    placeholder="Nome completo"
                                />
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="email" className="mr-2 font-[Bree_Serif] text-nowrap text-white dark:text-background">
                                    Email do usuario:
                                </label>

                                <input
                                    id="email"
                                    defaultValue={auth.user.email}
                                    type="email"
                                    className="block w-full font-[Bree_Serif] text-white outline-none dark:text-background"
                                    required
                                    autoComplete="username"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </SinglePageNoScrollLayout>
        </>
    );
}
