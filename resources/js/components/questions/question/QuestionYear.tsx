export default function QuestionYear({ year }: { year: string }) {
    const pathArray = window.location.pathname.split('/');
    const categoryId = pathArray[2];

    return (
        <a href={route('questions.index', [categoryId, year])}>
            <div className="flex h-10 items-center justify-between rounded-xl bg-white px-6 font-[Bree_Serif] text-black">
                <span>Questões ENEM {year}</span>
                <span className="h-3/5">
                    <img src="/images/graduation-icon.svg" alt="Graduation Icon" className="h-full" />
                </span>
            </div>
        </a>
    );
}
