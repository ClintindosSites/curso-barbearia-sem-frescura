const demonstracoes = [
  {
    numero: "01",
    titulo: "Degradê Low Fade",
    descricao:
      "Aprenda a construir um degradê baixo e trabalhar as transições do corte.",
    video: "/videos/low-fade.mp4",
    poster: "/cortes/low-fade.jpg",
  },
  {
    numero: "02",
    titulo: "Degradê Mid Fade",
    descricao:
      "Conheça as técnicas para executar um degradê médio com equilíbrio.",
    video: "/videos/mid-fade.mp4",
    poster: "/cortes/mid-fade.jpg",
  },
  {
    numero: "03",
    titulo: "Degradê High Fade",
    descricao: "Veja como trabalhar um degradê alto e suas diferentes alturas.",
    video: "/videos/high-fade.mp4",
    poster: "/cortes/high-fade.jpg",
  },
  {
    numero: "04",
    titulo: "Corte social",
    descricao: "Aprenda os fundamentos de um corte clássico e sua finalização.",
    video: "/videos/corte-social.mp4",
    poster: "/cortes/corte-social.jpg",
  },
];

export default function NaPratica() {
  return (
    <section id="na-pratica" className="bg-[#080D17] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-widest text-blue-400">
            APRENDIZADO NA PRÁTICA
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            NÃO FIQUE SÓ NA
            <span className="block text-yellow-400">
              TEORIA. APRENDA FAZENDO!
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
            Acompanhe demonstrações práticas de cortes masculinos e conheça
            algumas das técnicas que serão trabalhadas durante o curso.
          </p>
        </div>

        {/* Galeria de vídeos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {demonstracoes.map(item => (
            <article
              key={item.numero}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >
              {/* Vídeo */}
              <div className="relative aspect-4/5 overflow-hidden bg-black">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={item.poster}
                >
                  <source src={item.video} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>

                <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/70 px-3 py-1 text-xs font-bold text-white">
                  CORTE {item.numero}
                </span>
              </div>

              {/* Informações */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{item.titulo}</h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.descricao}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black text-white md:text-3xl">
            Sua jornada na barbearia pode começar aqui!
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Aprenda novas técnicas, pratique e desenvolva suas habilidades no
            seu próprio ritmo.
          </p>

          <a
            href="#oferta"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1 hover:bg-blue-500"
          >
            QUERO APRENDER BARBEARIA
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
