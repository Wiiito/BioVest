import MiddleBox from '@/components/layout/MIddleBox';
import SinglePageNoScrollLayout from '@/components/layout/SinglePageNoScrollLayout';
import CategoryList from '@/components/questions/category/CategoryList';
import HomeButton from '@/components/ui/homeButton';
import QuestionCategory from '@/types/QuestionCategory';
import { usePage } from '@inertiajs/react';

export default function Questions() {
    const { categories } = usePage<{ categories: QuestionCategory[] }>().props;

    return (
        <SinglePageNoScrollLayout>
            <HomeButton />
            <MiddleBox title="JOGO">
                <CategoryList categories={categories} game={true} />
            </MiddleBox>
        </SinglePageNoScrollLayout>
    );
}
