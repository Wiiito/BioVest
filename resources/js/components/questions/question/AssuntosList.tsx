import QuestionCategory from '@/types/QuestionCategory';
import CategoryList from '../category/CategoryList';

export default function AssuntosList({ categories }: { categories: QuestionCategory[] }) {
    return (
        <div className="z-10 mt-28 ml-4 h-[calc(100%-10rem)] w-2/10 rounded-3xl bg-foreground p-4 text-white">
            <CategoryList categories={categories} column={true} game={true} />
        </div>
    );
}
