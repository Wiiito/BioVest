import MiddleBox from '@/components/layout/MIddleBox';
import SinglePageNoScrollLayout from '@/components/layout/SinglePageNoScrollLayout';
import QuestionList from '@/components/questions/question/QuestionList';
import Question from '@/types/Questions';

export default function questions({ questions }: { questions: Question[] }) {
    const pathArray = window.location.pathname.split('/');
    const questionsYear = pathArray[4];

    return (
        <SinglePageNoScrollLayout>
            <MiddleBox title={'ENEM ' + questionsYear}>
                <QuestionList questions={questions} />
            </MiddleBox>
        </SinglePageNoScrollLayout>
    );
}
