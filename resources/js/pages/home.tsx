import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Início" />
            <div className="bg-background h-screen w-screen">
                <img src="/images/dna.png" alt="DNA" className='fixed rotate-45 -left-32 lg:-left-36 -top-16 lg:-top-30 h-64 md:h-96 lg:h-128' />
                <img src="/images/folha.png" alt="Folha" className='fixed -left-32 md:-left-20 lg:-left-18 w-58 md:w-72 lg:w-80 origin-bottom-left bottom-0' />
                <img src="/images/fraco.png" alt="Frasco" className='fixed -rotate-12 -right-36 bottom-5 h-full max-h-58 md:max-h-80 lg:max-h-92 origin-bottom-right' />
                <div className="fixed w-screen h-screen flex flex-col items-center justify-center p-4 z-10">
                    <h1 className='font-[Shrikhand] text-6xl md:text-8xl lg:text-9xl italic'>BioVest</h1>
                    <p className='text-center text-xl md:text-2xl xl:text-3xl mb-24 dark:text-white'>Plataforma Educacional De Biologia Integrando Inteligência Artificial</p>
                    <Link prefetch href='/login' className='bg-linear-to-r from-muted to-muted-foreground font-normal text-xl md:text-2xl xl:text-3xl py-0.5 px-20 rounded-xl dark:text-primary-foreground'>Começar</Link>
                </div>
            </div>
        </>
    );
}
