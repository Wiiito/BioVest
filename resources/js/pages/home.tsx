import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Início" />
            <div className="h-screen w-screen bg-background">
                <img src="/images/dna.png" alt="DNA" className="fixed -top-16 -left-32 h-64 rotate-45 md:h-96 lg:-top-30 lg:-left-36 lg:h-128" />
                <img
                    src="/images/folha.png"
                    alt="Folha"
                    className="fixed bottom-0 -left-32 w-58 origin-bottom-left md:-left-20 md:w-72 lg:-left-18 lg:w-80"
                />
                <img
                    src="/images/fraco.png"
                    alt="Frasco"
                    className="fixed -right-36 bottom-5 h-full max-h-58 origin-bottom-right -rotate-12 md:max-h-80 lg:max-h-92"
                />
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
            </div>
        </>
    );
}
