import { ReactNode } from 'react';

export default function MiddleBox({
    children,
    title,
    className,
    innerClassName,
}: {
    children: ReactNode;
    title?: string;
    className?: string;
    innerClassName?: string;
}) {
    return (
        <div className={'relative z-10 size-full px-6 py-12 ' + className}>
            {title && <h2 className="mx-12 mb-5 font-[Shrikhand] text-5xl">{title}</h2>}
            <div
                className={
                    'h-[calc(100%-4rem)] rounded-3xl bg-linear-to-b from-foreground via-[#4F7492] to-foreground p-6 dark:via-[#D9FFCC] ' +
                    innerClassName
                }
            >
                <div className="custom-scroll background-scroll h-full overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}
