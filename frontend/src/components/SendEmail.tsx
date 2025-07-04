'use client';
import axios from "axios";
import Image from "next/image"
import { useState } from "react";

export default function SendEmail() {
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/subscribe`,
          {
            email,
          }
        );

        setMensagem(res.data.message);
        setErro("");
        setEmail("");
      } catch (err) {
        console.error(err);
        setMensagem("");
        if (axios.isAxiosError(err)) {
          setErro(err.response?.data?.error || "Erro ao se inscrever");
        } else {
          setErro("Erro ao se inscrever");
        }
      }
    };

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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="email-input"
                required
              />
              <button className="demo-button" type="submit">
                Entrar na fila
              </button>
            </form>
          </div>
          {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <p>✅ Não enviamos spam • ✅ Acesso gratuito ao beta</p>
        </div>
      </div>
    );
}