import QuestionCategory from '@/types/QuestionCategory';
import CategoryButton from './CategoryButton';

export default function CategoryList({ categories, game }: { categories: QuestionCategory[]; game: boolean }) {
    return (
        <div className="flex w-full flex-wrap gap-6">
            {categories.map((category, index) => {
                return <CategoryButton key={'categoria-' + index} category={category} game={game} />;
            })}
        </div>
    );
}
