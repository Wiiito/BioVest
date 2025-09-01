import MiddleBox from '@/components/layout/MIddleBox';
import SinglePageNoScrollLayout from '@/components/layout/SinglePageNoScrollLayout';
import QuestionYearList from '@/components/questions/question/QuestionYearList';
import HomeButton from '@/components/ui/homeButton';

export default function category({ questionsName, questionsYears }: { questionsName: string; questionsYears: string[] }) {
    return (
        <SinglePageNoScrollLayout>
            <HomeButton />
            <MiddleBox title={questionsName}>
                <QuestionYearList questionsYears={questionsYears} />
            </MiddleBox>
        </SinglePageNoScrollLayout>
    );
}
