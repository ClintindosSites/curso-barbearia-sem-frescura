const checkoutUrl = "COLE_AQUI_SEU_LINK_DE_CHECKOUT";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-[#080D17] px-5 py-24 md:py-32">
      {/* Efeitos de fundo */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-linear-to-br from-[#111C30] via-[#0D1524] to-[#111827] px-6 py-14 text-center shadow-2xl shadow-black/30 md:px-16 md:py-20">
          {/* Selo */}
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-bold tracking-[0.2em] text-yellow-400">
            SEU PRÓXIMO PASSO COMEÇA AQUI
          </span>

          {/* Título */}
          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
            NÃO ESPERE O MOMENTO PERFEITO.
            <span className="mt-2 block text-yellow-400">
              COMECE A APRENDER HOJE!
            </span>
          </h2>

          {/* Descrição */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Aprenda os fundamentos da barbearia, conheça diferentes técnicas de
            corte e desenvolva suas habilidades com aulas práticas.
          </p>

          {/* Benefícios */}
          <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3 text-left">
            {[
              "Aprenda mesmo começando do zero",
              "Conheça técnicas de cortes masculinos",
              "Estude no seu próprio ritmo",
              "Coloque o aprendizado em prática",
            ].map((beneficio, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-sm font-bold text-green-400">
                  ✓
                </span>

                <span className="text-sm text-gray-200 md:text-base">
                  {beneficio}
                </span>
              </div>
            ))}
          </div>

          {/* Oferta */}
          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Comece sua jornada na barbearia
            </p>

            <p className="mt-3 text-4xl font-black text-white md:text-5xl">
              R$ 97,00
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Valor conforme a oferta apresentada nesta página.
            </p>
          </div>

          {/* CTA */}
          <a
            href={checkoutUrl}
            className="mx-auto mt-8 flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-5 text-base font-black text-gray-950 shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-yellow-400/30 md:text-lg"
          >
            QUERO COMEÇAR AGORA
            <span className="text-xl">→</span>
          </a>

          <p className="mt-5 text-xs leading-relaxed text-gray-500">
            Após a confirmação do pagamento, siga as instruções da plataforma
            para acessar o curso.
          </p>
        </div>
      </div>
    </section>
  );
}
