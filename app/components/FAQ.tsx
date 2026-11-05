"use client";

import { useState } from "react";

const perguntas = [
  {
    pergunta: "Preciso ter experiência como barbeiro?",
    resposta:
      "Não! O curso foi pensado também para quem está começando do zero. Você poderá aprender os fundamentos da barbearia e acompanhar demonstrações práticas das técnicas de corte.",
  },
  {
    pergunta: "Preciso comprar equipamentos para fazer o curso?",
    resposta:
      "Para colocar as técnicas em prática, você precisará de ferramentas de barbearia, como máquina de corte, pentes e tesoura. Recomendamos começar com os equipamentos básicos.",
  },
  {
    pergunta: "Como vou acessar as aulas?",
    resposta:
      "Após a confirmação da compra, você receberá as instruções de acesso pela plataforma onde o curso estiver hospedado.",
  },
  {
    pergunta: "Posso assistir pelo celular?",
    resposta:
      "Sim! Você poderá acompanhar as aulas pelo celular, tablet ou computador, desde que tenha acesso à internet e utilize um dispositivo compatível com a plataforma.",
  },
  {
    pergunta: "O curso ensina diferentes tipos de cortes?",
    resposta:
      "O conteúdo inclui os fundamentos dos cortes masculinos, técnicas de degradê, cortes sociais, acabamento e outras demonstrações práticas previstas no programa do curso.",
  },
  {
    pergunta: "Por quanto tempo terei acesso ao curso?",
    resposta:
      "O período de acesso será aquele informado na oferta e na plataforma no momento da compra. Confira essas condições antes de finalizar o pedido.",
  },
  {
    pergunta: "Vou receber certificado?",
    resposta:
      "A emissão de certificado depende das condições definidas pelos responsáveis pelo curso e pela plataforma. Consulte a descrição oficial da oferta para confirmar.",
  },
  {
    pergunta: "E se eu não gostar do curso?",
    resposta:
      "A compra seguirá a política de garantia e reembolso informada no checkout da plataforma. Consulte o prazo e as condições antes de comprar.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-[#0B101B] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-bold tracking-widest text-blue-400">
            CENTRAL DE DÚVIDAS
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            PERGUNTAS
            <span className="block text-yellow-400">FREQUENTES</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400">
            Reunimos as principais dúvidas sobre o curso para ajudar você a
            tomar sua decisão com segurança.
          </p>
        </div>

        {/* Perguntas */}
        <div className="space-y-4">
          {perguntas.map((item, index) => {
            const isOpen = aberta === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500/50 bg-[#111827]"
                    : "border-white/10 bg-[#111827]/60 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setAberta(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                >
                  <span className="text-sm font-bold leading-relaxed text-white md:text-base">
                    {item.pergunta}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-blue-600 text-white"
                        : "bg-white/5 text-blue-400"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-relaxed text-gray-400 md:px-6 md:text-base">
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fechamento */}
        <div className="mt-14 text-center">
          <h3 className="text-xl font-bold text-white md:text-2xl">
            Ainda tem alguma dúvida?
          </h3>

          <p className="mt-3 text-sm text-gray-400">
            Entre em contato com nossa equipe e obtenha mais informações.
          </p>

          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-lg border border-blue-500/40 bg-blue-500/10 px-7 py-4 text-sm font-bold text-blue-400 transition-all hover:bg-blue-600 hover:text-white"
          >
            FALAR PELO WHATSAPP
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
