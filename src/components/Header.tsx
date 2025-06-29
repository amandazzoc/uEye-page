import Image from "next/image";
import "../styles/header.css"; 

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <Image
          src="/LOGO-UEYE.svg"
          alt="uEye Logo"
          width={52}
          height={52}
          className="logo"
        />
        <button className="demo-button">Receba a demo</button>
      </nav>
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h1 className="title">A Nova era do UX/UI Design</h1>
            <p className="subtitle">
              Use o poder do rastreio ocular real e da IA preditiva para gerar
              heatmaps automáticos, avaliar suas telas e otimizar a experiência
              do usuário com base em dados visuais.
            </p>
          </div>
          <div className="send-email">
            <input type="text" placeholder="Digite seu e-mail" className="email-input" />
            <button className="demo-button">Receba a demo</button>
          </div>
        </div>
        <Image
          src="/ueye-header.svg"
          alt="Header Image"
          width={1205}
          height={510}
          className="header-image"
        />
      </div>
    </div>
  );
}
