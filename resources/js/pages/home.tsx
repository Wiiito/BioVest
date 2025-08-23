import SinglePageNoScrollLayout from '@/components/layout/SinglePageNoScrollLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Início" />
            <SinglePageNoScrollLayout>
                <div className="fixed z-10 flex h-screen w-screen flex-col items-center justify-center p-4">
                    <h1 className="font-[Shrikhand] text-6xl italic md:text-8xl lg:text-9xl">BioVest</h1>
                    <p className="mb-24 text-center text-xl md:text-2xl xl:text-3xl dark:text-white">
                        Plataforma Educacional De Biologia Integrando Inteligência Artificial
                    </p>
                    <Link
                        prefetch
                        href="/login"
                        className="rounded-xl bg-linear-to-r from-muted to-muted-foreground px-20 py-0.5 text-xl font-normal md:text-2xl xl:text-3xl dark:text-primary-foreground"
                    >
                        Começar
                    </Link>
                </div>
            </SinglePageNoScrollLayout>
        </>
    );
}
