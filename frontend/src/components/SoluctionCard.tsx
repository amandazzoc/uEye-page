import Image from "next/image";

type Props = {
  icon: string;
  alternativeText: string;
  title: string;
  description: string;
};

export default function SoluctionCard(props: Props) {
  const { icon, alternativeText, title, description } = props;
  return (
    <div className="solution-card">
      <Image src={icon} alt={alternativeText} width={50} height={50} />
      <h2 className="solution-title">{title}</h2>
      <p className="solution-description">{description}</p>
    </div>
  );
}
