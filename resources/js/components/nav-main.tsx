import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ClassNameValue } from 'tailwind-merge';

export function NavMain({ items = [], className }: { items: NavItem[]; className?: ClassNameValue }) {
    const page = usePage();
    return (
        <SidebarGroup className={'px-2 py-0 ' + className}>
            <SidebarMenu className="h-full justify-center gap-5">
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            isActive={page.url.startsWith(item.href)}
                            className="min-h-14 font-[Bree_Serif] text-xl text-white dark:text-primary-foreground"
                        >
                            <Link href={item.href} prefetch>
                                <img src={`/images/sidebar-icons/${item.icon}.png`} className="h-full" alt={item.title} />
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
