import { ReactNode } from 'react';

export default function SinglePageNoScrollLayout({ children }: { children: ReactNode }) {
    return (
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
            {children}
        </div>
    );
}
