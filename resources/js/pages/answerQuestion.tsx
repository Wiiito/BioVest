import MiddleBox from '@/components/layout/MIddleBox';
import SinglePageNoScrollLayout from '@/components/layout/SinglePageNoScrollLayout';
import Answer from '@/types/Answer';
import Question from '@/types/Questions';

export default function AnswerQuestion({ question, answers }: { question: Question; answers: Answer[] }) {
    const imagePath = `/images/questions-images/${question.year}/${question.image_path}`;

    return (
        <SinglePageNoScrollLayout>
            <MiddleBox title={'Questão ' + question.id}>
                <div className="rounded-2xl bg-white px-5 py-4 font-medium text-black">
                    <div className="mb-3 text-3xl">Questão {question.id}</div>
                    <div className="text-xl">(ENEM {question.year})</div>
                    <div className="mt-1">{question.statement}</div>

                    {question.image_path && (
                        <div className="flex justify-center">
                            <img src={imagePath} alt="Question Image" />
                        </div>
                    )}

                    <div>
                        {answers.map((answer, index) => {
                            const letter = String.fromCharCode(index + 97);
                            return (
                                <div className="mt-2 flex cursor-pointer items-center rounded-xl p-1 font-[Bree_Serif] hover:bg-gray-200">
                                    <div className="mr-2 flex size-10 items-center justify-center rounded-lg bg-foreground">
                                        <div className="flex size-8 items-center justify-center rounded-md bg-white uppercase">{letter}</div>
                                    </div>
                                    <span className="first-letter:capitalize">{answer.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </MiddleBox>
        </SinglePageNoScrollLayout>
    );
}
