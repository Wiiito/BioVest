import MiddleBox from '@/components/layout/MIddleBox';
import SinglePageNoScrollLayout from '@/components/layout/SinglePageNoScrollLayout';
import DefaultButton from '@/components/ui/defaultButton';
import HomeButton from '@/components/ui/homeButton';
import Answer from '@/types/Answer';
import Question from '@/types/Questions';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function AnswerQuestion({ question, answers }: { question: Question; answers: Answer[] }) {
    const imagePath = `/images/questions-images/${question.year}/${question.image_path}`;

    const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
    const [answered, setAnswered] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(false);

    const handleAnswer = async () => {
        if (selectedAnswer < 0) {
            Swal.fire({
                title: 'Responda uma questão antes',
                icon: 'error',
                confirmButtonText: 'Responder',
            });
            return;
        }

        const response = await fetch(route('answer', selectedAnswer));
        const json = await response.json();
        setAnswered(true);

        if (json.isCorrect) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    };

    return (
        <SinglePageNoScrollLayout>
            <HomeButton />
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
                                <div
                                    key={'answer-index-' + index}
                                    className={
                                        'mt-2 flex cursor-pointer items-center rounded-xl p-1 font-[Bree_Serif] ' +
                                        (answered
                                            ? selectedAnswer == answer.id
                                                ? correct
                                                    ? 'bg-green-400'
                                                    : 'bg-red-400'
                                                : ''
                                            : selectedAnswer == answer.id
                                              ? 'bg-gray-400'
                                              : 'hover:bg-gray-200')
                                    }
                                    onClick={() => {
                                        setAnswered(false);
                                        setSelectedAnswer(answer.id);
                                    }}
                                >
                                    <div className="mr-2 flex size-10 items-center justify-center rounded-lg bg-foreground">
                                        <div className="flex size-8 items-center justify-center rounded-md bg-white uppercase">{letter}</div>
                                    </div>
                                    <span className="first-letter:capitalize">{answer.text}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-2 flex justify-end">
                        <DefaultButton className="cursor-pointer text-white" onClick={handleAnswer}>
                            Responder
                        </DefaultButton>
                    </div>
                </div>
            </MiddleBox>
        </SinglePageNoScrollLayout>
    );
}
