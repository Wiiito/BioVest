import MiddleBox from '@/components/layout/MIddleBox';
import SinglePageNoScrollLayout from '@/components/layout/SinglePageNoScrollLayout';
import CategoryList from '@/components/questions/category/CategoryList';
import QuestionCategory from '@/types/QuestionCategory';
import { usePage } from '@inertiajs/react';

export default function Questions() {
    const { categories } = usePage<{ categories: QuestionCategory[] }>().props;

    return (
        <SinglePageNoScrollLayout>
            <MiddleBox title="Questões ENEM">
                <CategoryList categories={categories} game={true} />
            </MiddleBox>
        </SinglePageNoScrollLayout>
    );
}
