import QuestionCategory from '@/types/QuestionCategory';
import { Link } from '@inertiajs/react';

export default function CategoryButton({ category, game = false }: { category: QuestionCategory; game?: boolean }) {
    return (
        <Link
            className="w-[calc(1/3*100%-(1-1/3)*1.5rem)] lg:aspect-[2] xl:aspect-[3]"
            href={route(`${game ? 'game' : 'category'}.show`, category.id)}
        >
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white px-2 py-6 lg:flex-row lg:justify-start lg:px-4">
                <div className="mb-5 flex aspect-square max-h-36 w-1/2 justify-center lg:mb-0 lg:h-full lg:w-auto lg:px-4 lg:py-6">
                    <img src={`images/${category.icon_path}`} alt="Category icon" className="w-full lg:w-auto" />
                </div>
                <span className="flex items-center justify-center text-center font-[Bree_Serif] text-xl text-black lg:text-2xl xl:text-3xl">
                    {category.name}
                </span>
            </div>
        </Link>
    );
}
