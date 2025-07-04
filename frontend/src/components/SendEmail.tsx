import Image from "next/image"

export default function SendEmail() {
    return (
      <div className="send-email-container">
        <div className="title-content">
          <Image src="/email.svg" alt="Ícone de Email" width={64} height={64} />
          <h1 className="title">Garanta seu acesso antecipado!</h1>
        </div>
        <p className="subtitle">
          Seja um dos primeiros a testar o <span>uEye</span> e revolucione seu
          processo de design com insights de eye tracking baseados em IA
        </p>
        <div className="input-email-content">
          <div className="send-email">
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="email-input"
            />
            <button className="demo-button">Entrar na fila</button>
          </div>
          <p>✅ Não enviamos spam • ✅ Acesso gratuito ao beta</p>
        </div>
      </div>
    );
}