import MiddleBox from '@/components/layout/MIddleBox';
import AssuntosList from '@/components/questions/question/AssuntosList';
import ProfileSidebar from '@/components/questions/question/ProfileSidebar';
import DefaultButton from '@/components/ui/defaultButton';
import HomeButton from '@/components/ui/homeButton';
import Answer from '@/types/Answer';
import QuestionCategory from '@/types/QuestionCategory';
import Question from '@/types/Questions';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';

export default function AnswerQuestion({ question, answers, categories }: { question: Question; answers: Answer[]; categories: QuestionCategory[] }) {
    const imagePath = `/images/questions-images/${question.year}/${question.image_path}`;

    const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
    const [answered, setAnswered] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(false);

    const timer = useMemo(() => {
        return Date.now();
    }, []);

    const handleAnswer = async () => {
        if (selectedAnswer < 0) {
            Swal.fire({
                title: 'Responda uma questão antes',
                icon: 'error',
                confirmButtonText: 'Responder',
            });
            return;
        }

        if (answered) {
            return;
        }

        const timeSinceStart = Date.now() - timer;
        const response = await fetch(route('game.answer', [selectedAnswer, Math.ceil(30 - timeSinceStart / 1000)]), {
            method: 'POST',
        });
        const json = await response.json();
        setAnswered(true);

        if (json.isCorrect) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }

        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    const finalTime = useCallback(() => {
        setTimeout(() => {
            Swal.fire({
                title: 'Seu tempo acabou',
                icon: 'warning',
            }).then(() => {
                window.location.reload();
            });
        }, 30000);
    }, []);

    useEffect(() => {
        finalTime();
    }, []);

    return (
        <div className="h-screen w-screen bg-background">
            <HomeButton />
            <div className="flex h-full w-full">
                <AssuntosList categories={categories} />
                <div>
                    <div className="mx-auto mt-10 flex w-4/5 justify-center">
                        <div className="flex w-full items-center">
                            <div className="z-10 size-8 rounded-full bg-foreground p-1">
                                <img src="/images/timer.png" alt="timer-clock" />
                            </div>
                            <div className="-ml-2 h-5 w-full rounded-full bg-foreground p-1.5">
                                <div className="timer h-full w-full rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                    <MiddleBox className="h-[calc(100%-7rem)] pb-0" innerClassName="h-full">
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
                                                if (answered) return;
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
                </div>
                <ProfileSidebar />
            </div>
        </div>
    );
}
