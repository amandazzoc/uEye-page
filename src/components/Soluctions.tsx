import { SOLUTIONS } from "@/constants/cardCostants";
import SoluctionCard from "./SoluctionCard";

export default function Soluctions() {
  return (
    <div className="container">
      <div className="text-content">
        <div className="summary">
          <div className="separator" />
          <p className="title-problem">A solução</p>
          <div className="separator2" />
        </div>
        <div className="problem-text">
          <h1 className="title">
            Valide seus designs em <span>segundos</span> com{" "}
            <span>IA + Eye Tracking</span>
          </h1>
          <p className="subtitle">
            O uEye analisa suas telas com inteligência artificial treinada em
            dados reais de rastreamento ocular. Você envia o layout, e em
            segundos recebe insights visuais poderosos.
          </p>
        </div>
      </div>
      <div className="solutions-cards">
        {SOLUTIONS.map((solution, index) => (
          <SoluctionCard
            key={index}
            icon={solution.icon}
            alternativeText={solution.alternativeText}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>
    </div>
  );
}
