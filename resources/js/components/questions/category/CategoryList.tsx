import QuestionCategory from '@/types/QuestionCategory';
import CategoryButton from './CategoryButton';

export default function CategoryList({
    categories,
    game = false,
    column = false,
}: {
    categories: QuestionCategory[];
    game?: boolean;
    column?: boolean;
}) {
    return (
        <div className={'custom-scroll background-scroll flex w-full flex-wrap gap-6 overflow-y-auto ' + (column && 'h-full w-auto flex-row')}>
            {categories.map((category, index) => {
                return <CategoryButton key={'categoria-' + index} category={category} game={game} image={!column} />;
            })}
        </div>
    );
}
