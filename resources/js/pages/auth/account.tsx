import { Head } from "@inertiajs/react";
import Login from "./login";
import Register from "./register";

export default function Account() {
  return (
    <div>
        <Head title="Conta" />
        <div className="bg-background h-screen w-screen">
            <img src="/images/dna.png" alt="DNA" className='fixed rotate-45 -left-32 lg:-left-36 -top-16 lg:-top-30 h-64 md:h-96 lg:h-128' />
            <img src="/images/folha.png" alt="Folha" className='fixed -left-32 md:-left-20 lg:-left-18 w-58 md:w-72 lg:w-80 origin-bottom-left bottom-0' />
            <img src="/images/fraco.png" alt="Frasco" className='fixed -rotate-12 -right-36 bottom-5 h-full max-h-58 md:max-h-80 lg:max-h-92 origin-bottom-right' />
            <div className="fixed w-screen h-screen flex flex-col sm:flex-row items-center justify-around p-4 z-10 sm:gap-4 md:gap-20">
                <div className="p-8 bg-foreground text-white rounded-2xl sm:h-3/4 flex flex-col justify-center items-center w-full lg:max-w-1/3">
                    <h2 className="text-4xl font-normal text-muted font-[Shrikhand] text-center">Cadastrar-se</h2>
                    <Register />
                </div>
                <div className="p-8 bg-foreground text-white rounded-2xl sm:h-3/4 flex flex-col justify-center items-center w-full lg:max-w-1/3">
                    <h2 className="text-4xl font-normal text-muted font-[Shrikhand] text-center">Entrar</h2>
                    <Login canResetPassword={true} />
                </div>
            </div>
        </div>
    </div>
  )
}
