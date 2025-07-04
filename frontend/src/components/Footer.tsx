import "../styles/footer.css";
import FadeInSection from "./FadeInSection";

export default function Footer() {
  return (
    <FadeInSection direction="bottom">
      <footer className="footer">
        <div className="footer-content">
          <p>© 2023 uEye. Todos os direitos reservados.</p>
          <p>
            Feito com ❤️ por{" "}
            <a href="https://amandas-world.vercel.app/" target="_blank" rel="noopener noreferrer">
              Amanda Costa - Desenvolvedora Web
            </a>
          </p>
        </div>
      </footer>
    </FadeInSection>
  );
}
