const modulos = [
  {
    numero: "01",
    titulo: "Conhecendo as ferramentas",
    descricao:
      "Conheça as principais ferramentas de barbearia, os tipos de máquinas, pentes, tesouras e acessórios utilizados nos cortes.",
    topico: "Primeiros passos",
    icone: "✂️",
  },
  {
    numero: "02",
    titulo: "Fundamentos dos cortes masculinos",
    descricao:
      "Entenda as técnicas básicas, divisão do cabelo, utilização da máquina e os primeiros movimentos para executar um corte.",
    topico: "Fundamentos",
    icone: "💈",
  },
  {
    numero: "03",
    titulo: "Técnicas de degradê (Fade)",
    descricao:
      "Aprenda os conceitos do degradê, transições entre alturas e técnicas para conseguir um acabamento mais uniforme.",
    topico: "Técnica",
    icone: "🔥",
  },
  {
    numero: "04",
    titulo: "Cortes sociais e estilos masculinos",
    descricao:
      "Conheça diferentes estilos de cortes masculinos e aprenda a trabalhar formatos e comprimentos de cabelo.",
    topico: "Estilos",
    icone: "💇",
  },
  {
    numero: "05",
    titulo: "Acabamento e finalização",
    descricao:
      "Aprenda sobre contornos, detalhes, finalização e cuidados que fazem diferença no resultado de um corte.",
    topico: "Detalhamento",
    icone: "⚡",
  },
  {
    numero: "06",
    titulo: "Prática e evolução profissional",
    descricao:
      "Entenda como desenvolver suas habilidades, ganhar experiência e dar os primeiros passos para atender seus próprios clientes.",
    topico: "Próximos passos",
    icone: "🚀",
  },
];

export default function Conteudo() {
  return (
    <section id="conteudo" className="bg-[#080D17] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-widest text-blue-400">
            CONTEÚDO DO CURSO
          </span>

          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            O QUE VOCÊ VAI
            <span className="block text-yellow-400">APRENDER NA PRÁTICA?</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
            Um aprendizado direto ao ponto, com técnicas de barbearia explicadas
            passo a passo para ajudar você a desenvolver suas habilidades, mesmo
            começando do zero.
          </p>
        </div>

        {/* Módulos */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modulos.map(modulo => (
            <div
              key={modulo.numero}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-950/30"
            >
              {/* Número e ícone */}
              <div className="mb-7 flex items-center justify-between">
                <span className="text-4xl font-black text-blue-500/30 transition-colors group-hover:text-blue-400">
                  {modulo.numero}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl">
                  {modulo.icone}
                </div>
              </div>

              {/* Categoria */}
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                {modulo.topico}
              </span>

              {/* Título */}
              <h3 className="mt-3 text-xl font-bold leading-snug text-white">
                {modulo.titulo}
              </h3>

              {/* Descrição */}
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {modulo.descricao}
              </p>

              {/* Detalhe */}
              <div className="mt-7 h-1 w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mt-16 rounded-2xl border border-blue-500/20 bg-linear-to-r from-blue-950/40 to-[#111827] px-6 py-10 text-center md:px-12">
          <h3 className="text-2xl font-black text-white md:text-3xl">
            Chegou a hora de tirar esse projeto do papel!
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-400">
            Aprenda novas técnicas, desenvolva suas habilidades e comece a
            construir seu caminho no mundo da barbearia.
          </p>

          <a
            href="#oferta"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1 hover:bg-blue-500"
          >
            QUERO COMEÇAR A APRENDER
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
