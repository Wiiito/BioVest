export default function DefaultButton(props: any) {
    const buttonProps = { ...props };
    const classesStyles = props.className;

    if (buttonProps.className) {
        delete buttonProps.className;
    }

    return (
        <button
            className={
                'rounded-xl bg-linear-to-r from-muted to-muted-foreground px-20 py-0.5 text-xl font-normal md:text-2xl xl:text-3xl dark:text-primary-foreground ' +
                classesStyles
            }
            {...buttonProps}
        >
            {props.children}
        </button>
    );
}
