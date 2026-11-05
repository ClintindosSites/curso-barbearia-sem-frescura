const publicos = [
  {
    numero: "01",
    titulo: "Quem quer aprender do zero",
    descricao:
      "Nunca pegou em uma máquina de cortar cabelo? Aprenda os fundamentos e desenvolva suas primeiras técnicas com aulas práticas.",
    destaque: "Iniciantes",
  },
  {
    numero: "02",
    titulo: "Quem busca uma renda extra",
    descricao:
      "Aprenda uma habilidade que pode ser utilizada para atender clientes e construir uma nova fonte de renda.",
    destaque: "Renda extra",
  },
  {
    numero: "03",
    titulo: "Quem deseja mudar de profissão",
    descricao:
      "Está pensando em começar uma nova jornada profissional? Conheça as técnicas da barbearia e dê seus primeiros passos.",
    destaque: "Nova profissão",
  },
  {
    numero: "04",
    titulo: "Barbeiros iniciantes",
    descricao:
      "Já sabe fazer alguns cortes, mas quer melhorar suas técnicas, ganhar mais segurança e evoluir no acabamento.",
    destaque: "Aperfeiçoamento",
  },
];

export default function Aprendizado() {
  return (
    <section className="aprendizado py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
            Comece sua jornada
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Para quem é esse <span className="text-blue-400">curso?</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-5 leading-relaxed">
            Se você tem vontade de aprender a cortar cabelo e desenvolver uma
            habilidade profissional, esse curso pode ser o seu ponto de partida.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {publicos.map(item => (
            <div
              key={item.numero}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-7 transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/5"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-blue-400/40">
                  {item.numero}
                </span>

                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  {item.destaque}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.titulo}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {item.descricao}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-base md:text-lg">
            Não importa se você está começando do zero.
          </p>

          <p className="text-blue-400 font-bold text-lg mt-2">
            O importante é dar o primeiro passo!
          </p>
        </div>
      </div>
    </section>
  );
}
