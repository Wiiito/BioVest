import QuestionType from '@/types/Questions';

export default function Question({ question }: { question: QuestionType }) {
    return (
        <a href={route('question.show', question.id)}>
            <div className="rounded-xl bg-white px-5 py-4 font-[Bree_Serif] text-black">
                <div className="mb-3 text-2xl font-medium">Questão {question.id}</div>
                <div className="text-xl">(ENEM {question.year})</div>
                <div className="line-clamp-3">{question.statement}</div>
            </div>
        </a>
    );
}
