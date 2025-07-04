import { PROBLEMS } from "@/constants/cardCostants";
import "../styles/problem.css";
import ProblemCard from "./ProblemCard";
import FadeInSection from "./FadeInSection";

export default function Problem() {
  return (
    <div className="problem-container">
      <FadeInSection direction="top">
        <div className="container">
          <FadeInSection direction="left">
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
                  Mesmo os melhores designers enfrentam dificuldades para
                  validar suas interfaces com dados reais. Testes são demorados,
                  caros e nem sempre confiáveis.
                </p>
              </div>
            </div>
          </FadeInSection>
          <div className="problems-container">
            {PROBLEMS.map((problem, index) => (
              <FadeInSection direction="right" key={index}>
                <ProblemCard
                  icon={problem.icon}
                  alternativeText={problem.alternativeText}
                  title={problem.title}
                  description={problem.description}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
