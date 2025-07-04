import Image from "next/image"

type Props = {
    icon: string;
    alternativeText: string;
    title:string;
    description: string;
}

export default function ProblemCard(props: Props) {
    const { icon, alternativeText, title, description } = props;
    return (
        <div className="card-container">
            <Image
                src={icon}
                alt={alternativeText}
                width={86}
                height={86}
            />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    )
}