import { PROBLEMS } from "@/constants/cardCostants";
import "../styles/problem.css";
import ProblemCard from "./ProblemCard";

export default function Problem() {
    return (
      <div className="problem-container">
        <div className="container">
          <div className="text-content">
            <div className="summary">
              <div className="separator" />
              <p className="title-problem">O problema</p>
              <div className="separator2" />
            </div>
            <div className="problem-text">
              <h1 className="title">
                Fazer bons designs <span>não é</span> o bastante
              </h1>
              <p className="subtitle">
                Mesmo os melhores designers enfrentam dificuldades para validar
                suas interfaces com dados reais. Testes são demorados, caros e
                nem sempre confiáveis.
              </p>
            </div>
          </div>
          <div className="problems-container">
            {PROBLEMS.map((problem, index) => (
              <ProblemCard
                key={index}
                icon={problem.icon}
                alternativeText={problem.alternativeText}
                title={problem.title}
                description={problem.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
}