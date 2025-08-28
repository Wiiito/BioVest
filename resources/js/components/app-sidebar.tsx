import { NavMain } from '@/components/nav-main';
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu } from '@/components/ui/sidebar';
import { useAppearance } from '@/hooks/use-appearance';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import AppLogo from './app-logo';
import Avatar from './ui/avatar';
import { Switch } from './ui/switch';

const mainNavItems: NavItem[] = [
    {
        title: 'HOME',
        href: '/dashboard',
        icon: 'home',
    },
    {
        title: 'ENEM',
        href: '/category',
        icon: 'book',
    },
    {
        title: 'CHATBOT',
        href: '/chatbot',
        icon: 'robot',
    },
    {
        title: 'JOGO',
        href: '/game',
        icon: 'game',
    },
];

export function AppSidebar() {
    const { appearance, updateAppearance } = useAppearance();

    return (
        <div className="relative m-5 flex h-[calc(svh-1.25rem)] w-(--sidebar-width) flex-col rounded-[58px] bg-sidebar py-5 transition-[width] duration-200 ease-linear">
            <SidebarHeader>
                <Link href="/profile" className="text-primary-foreground" prefetch>
                    <SidebarMenu className="flex flex-col items-center px-5">
                        <div className="size-36">
                            <Avatar />
                        </div>
                        <AppLogo />
                    </SidebarMenu>
                </Link>
            </SidebarHeader>

            <SidebarContent className="flex h-full flex-col justify-between px-5">
                <NavMain className={'h-full'} items={mainNavItems} />
            </SidebarContent>
            <hr />
            <SidebarFooter className="py-8">
                <div className="flex justify-center gap-4">
                    <Switch
                        id="appearance-changer"
                        className="h-10 w-16 px-0.5 data-[state=checked]:bg-background data-[state=unchecked]:bg-background"
                        defaultChecked={appearance == 'dark'}
                        onCheckedChange={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}
                    />
                    <label className="text-4xl text-white" htmlFor="appearance-changer">
                        Tema {appearance === 'dark' ? 'Escuro' : 'Claro'}
                    </label>
                </div>
            </SidebarFooter>
        </div>
    );
}
