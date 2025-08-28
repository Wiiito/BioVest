import QuestionType from '@/types/Questions';
import Question from './Question';

export default function QuestionList({ questions }: { questions: QuestionType[] }) {
    return (
        <div className="flex flex-col gap-4">
            {questions.map((question) => (
                <Question question={question} />
            ))}
        </div>
    );
}
