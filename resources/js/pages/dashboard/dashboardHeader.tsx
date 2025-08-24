import { useAppearance } from '@/hooks/use-appearance';

export default function DashboardHeader() {
    const { appearance } = useAppearance();

    const dogImagePath = `images/home-images/home-dog-${appearance === 'system' ? 'light' : appearance}.png`;

    return (
        <div className="flex h-1/4 w-full rounded-3xl bg-foreground text-sidebar-ring">
            <div className="mx-8 aspect-square h-full pt-3.5">
                <img src={dogImagePath} alt="Dog-Image" className="aspect-square h-full" />
            </div>
            <span className="mx-14 flex w-full items-center font-[shrikhand] text-4xl">Descubra uma nova forma de aprender com o BioVest !</span>
        </div>
    );
}
