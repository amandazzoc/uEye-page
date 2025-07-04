'use client';
import Image from "next/image";
import "../styles/header.css"; 
import { useState } from "react";
import axios from "axios";

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
            {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
            {erro && <p style={{ color: "red" }}>{erro}</p>}
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
