'use client';
import Image from "next/image";
import "../styles/header.css"; 
import { useState } from "react";
import axios from "axios";
import FadeInSection from "./FadeInSection";

export default function Header() {

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
    <div className="header">
      <FadeInSection direction="top">
        <nav className="navbar">
          <Image
            src="/LOGO-UEYE.svg"
            alt="uEye Logo"
            width={52}
            height={52}
            className="logo"
          />
        </nav>
      </FadeInSection>
      <div className="container">
        <FadeInSection direction="left">
          <div className="content">
            <div className="text-content">
              <h1 className="title">A Nova era do UX/UI Design</h1>
              <p className="subtitle">
                Use o poder do rastreio ocular real e da IA preditiva para gerar
                heatmaps automáticos, avaliar suas telas e otimizar a
                experiência do usuário com base em dados visuais.
              </p>
            </div>

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
                  Receba a demo
                </button>
              </form>
            </div>

            {mensagem && (
              <p style={{ color: "green", fontSize: "1.4rem" }}>{mensagem}</p>
            )}
            {erro && <p style={{ color: "red", fontSize: "1.4rem" }}>{erro}</p>}
          </div>
        </FadeInSection>
        <FadeInSection direction="right">
          <Image
            src="/ueye-header.svg"
            alt="Header Image"
            width={1205}
            height={510}
            className="header-image"
          />
        </FadeInSection>
      </div>
    </div>
  );
}
