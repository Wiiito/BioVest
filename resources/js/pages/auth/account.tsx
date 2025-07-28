import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Login from './login';
import Register from './register';

export default function Account() {
    const [currentSelection, setCurrentSelection] = useState('login');

    return (
        <div>
            <Head title="Conta" />
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
                <Tabs defaultValue="account" className="fixed top-1/2 left-1/2 z-10 min-h-2/3 w-screen -translate-1/2 transform p-4 lg:max-w-1/2">
                    <TabsList className="w-full">
                        <TabsTrigger value="account">Cadastrar-se</TabsTrigger>
                        <TabsTrigger value="password">Entrar</TabsTrigger>
                    </TabsList>
                    <TabsContent
                        className="flex w-full flex-col items-center justify-center rounded-2xl bg-foreground p-8 text-white dark:text-primary-foreground"
                        value="account"
                    >
                        <h2 className="text-center font-[Shrikhand] text-4xl font-normal text-muted dark:text-primary-foreground">Cadastrar-se</h2>
                        <Register />
                    </TabsContent>
                    <TabsContent
                        className="flex w-full flex-col items-center justify-center rounded-2xl bg-foreground p-8 text-white dark:text-primary-foreground"
                        value="password"
                    >
                        <h2 className="text-center font-[Shrikhand] text-4xl font-normal text-muted dark:text-primary-foreground">Entrar</h2>
                        <Login canResetPassword={true} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
