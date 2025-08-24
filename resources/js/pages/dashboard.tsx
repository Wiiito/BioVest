import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import DashboardHeader from './dashboard/dashboardHeader';
import DashboardOffer from './dashboard/dashboardOffer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="my-5 mr-5 flex w-full flex-col gap-5">
                <DashboardHeader />
                <DashboardOffer />
            </div>
        </AppLayout>
    );
}
