import Image from "next/image";

export default function Professor() {
  return (
    <section id="professor" className="bg-[#0B101B] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <span className="text-sm font-bold tracking-[3px] text-blue-400">
            QUEM VAI TE ENSINAR
          </span>

          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            CONHEÇA SEU
            <span className="block text-yellow-400">PROFESSOR</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Aprenda com quem conhece a prática da barbearia e está disposto a
            compartilhar conhecimento com você.
          </p>
        </div>

        {/* Apresentação */}
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-[#111827] md:grid-cols-2 md:gap-0">
          {/* Foto */}
          <div className="relative min-h-95 overflow-hidden md:min-h-137.5">
            <Image
              src="/professor.jpg"
              alt="Professor do curso de barbearia"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-[#111827]/40" />

            <div className="absolute bottom-6 left-6">
              <span className="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-bold tracking-wider text-white backdrop-blur-md">
                INSTRUTOR DE BARBEARIA
              </span>
            </div>
          </div>

          {/* Texto */}
          <div className="px-7 pb-9 md:px-12 md:py-14">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Prazer, sou seu professor!
            </span>

            <h3 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl">
              KLISMAN
              <span className="text-yellow-400"> AGUIAR</span>
            </h3>

            <div className="my-6 h-1 w-16 rounded-full bg-blue-500" />

            <p className="text-base leading-relaxed text-gray-300">
              A barbearia é uma profissão que exige dedicação, técnica e
              prática. Por isso, preparei este curso para compartilhar meus
              conhecimentos e ensinar você a desenvolver suas habilidades no
              mundo dos cortes masculinos.
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-400">
              Minha proposta é ensinar sem complicação, mostrando na prática
              como executar os cortes, utilizar as ferramentas e buscar um bom
              acabamento.
            </p>

            {/* Diferenciais */}
            <div className="mt-8 space-y-4">
              {[
                "Explicações diretas e objetivas",
                "Demonstrações práticas de cortes",
                "Aprendizado no seu próprio ritmo",
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-400">
                    ✓
                  </span>

                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#oferta"
              className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 text-center text-sm font-extrabold text-white transition-all hover:-translate-y-1 hover:bg-blue-500 md:w-auto"
            >
              QUERO APRENDER COM ELE
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
