import { NavMain } from '@/components/nav-main';
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Home',
        href: '/dashboard',
        icon: 'home',
    },
    {
        title: 'Enem',
        href: '/questions',
        icon: 'book',
    },
    {
        title: 'Chat bot',
        href: '/chatbot',
        icon: 'robot',
    },
    {
        title: 'Jogo',
        href: '/game',
        icon: 'game',
    },
];

const footerNavItems: NavItem[] = [];

export function AppSidebar() {
    return (
        <div className="relative m-5 flex h-[calc(svh-1.25rem)] w-(--sidebar-width) flex-col rounded-[58px] bg-sidebar py-5 transition-[width] duration-200 ease-linear">
            <SidebarHeader>
                <SidebarMenu className="px-5">
                    <Link href="/profile" className="text-primary-foreground" prefetch>
                        Mascote
                    </Link>
                    <Link href="/dashboard" className="text-primary-foreground" prefetch>
                        <AppLogo />
                    </Link>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="flex h-full flex-col justify-between px-5">
                <NavMain className={'h-full'} items={mainNavItems} />
            </SidebarContent>
            <hr />
            <SidebarFooter className="bg-white px-5">TEMA CLARO TEMA ESCuro</SidebarFooter>
        </div>
    );
}
