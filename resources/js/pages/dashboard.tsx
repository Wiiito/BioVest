import LeaderBoard from '@/components/LeaderBoard';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import DashboardHeader from './dashboard/dashboardHeader';
import DashboardOffer from './dashboard/dashboardOffer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ leaderboard }) {
    const [showLeaders, setShowLeaders] = useState<boolean>(false);
    return (
        <>
            <AppLayout>
                <Head title="Dashboard" />
                <div className="my-5 mr-5 flex w-full flex-col gap-5">
                    <DashboardHeader setState={setShowLeaders} />
                    <DashboardOffer />
                </div>
            </AppLayout>
            {showLeaders && <LeaderBoard leaders={leaderboard} setState={setShowLeaders} />}
        </>
    );
}
