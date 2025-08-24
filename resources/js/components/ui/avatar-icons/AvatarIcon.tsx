export default function AvatarIcon({ iconName, onClick, active = false }: { iconName: string; onClick: any; active?: boolean }) {
    const iconPath = `images/account-icons/${iconName}.png`;

    return (
        <div
            className={`size-36 cursor-pointer overflow-hidden rounded-full border-8 ${active ? 'border-foreground' : 'border-white'}`}
            onClick={onClick}
        >
            <img src={iconPath} alt="Icon" />
        </div>
    );
}
