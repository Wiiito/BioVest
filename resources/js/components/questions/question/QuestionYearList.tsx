import QuestionYear from './QuestionYear';

export default function QuestionYearList({ questionsYears }: { questionsYears: string[] }) {
    return (
        <div className="flex flex-col gap-4">
            {questionsYears.map((questionsYear) => {
                return <QuestionYear year={questionsYear} />;
            })}
        </div>
    );
}
