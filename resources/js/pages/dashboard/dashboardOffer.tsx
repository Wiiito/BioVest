import { useAppearance } from '@/hooks/use-appearance';

export default function DashboardOffer() {
    const { appearance } = useAppearance();

    const dogImagePath = `images/home-images/home-squid-${appearance === 'system' ? 'light' : appearance}.png`;

    return (
        <div className="flex h-3/4 w-full rounded-3xl bg-foreground p-8 text-sidebar-ring">
            <div className="flex size-full items-center rounded-3xl bg-white px-2 lg:px-8">
                <img src={dogImagePath} alt="Squid-Image" className="h-4/5" />
                <div className="flex w-full flex-col items-center">
                    <h3 className="mb-7 font-[Shrikhand] text-4xl text-[#22014D] xl:text-6xl">BioVest oferece!</h3>
                    <ol className="mx-6 list-disc font-[Bree_Serif] text-xl text-black xl:text-2xl">
                        <li>Questões do ENEM por tema e ano, com acesso gratuito.</li>
                        <li>Jogos educativos com pontos e ranking.</li>
                        <li>Cadastro rápido com Google.</li>
                        <li>Perfil com avatar personalizado.</li>
                        <li>Navegação simples e intuitiva.</li>
                        <li>Resumos gerados pela IA.</li>
                        <li>IA para o estudo eficiente.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
