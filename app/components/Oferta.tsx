const beneficios = [
  "Aulas práticas de barbearia",
  "Conhecimento das ferramentas e equipamentos",
  "Fundamentos dos cortes masculinos",
  "Técnicas de degradê (Fade)",
  "Cortes sociais e estilos masculinos",
  "Acabamento e finalização",
  "Orientações para começar na barbearia",
];

export default function Oferta() {
  const checkoutUrl = "COLE_AQUI_SEU_LINK_DE_CHECKOUT";

  return (
    <section
      id="oferta"
      className="relative overflow-hidden bg-[#080D17] px-5 py-24"
    >
      {/* Luzes decorativas */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-bold tracking-widest text-yellow-400">
            SUA OPORTUNIDADE COMEÇA AQUI
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-white md:text-5xl">
            PRONTO PARA DAR O
            <span className="block text-yellow-400">PRIMEIRO PASSO?</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
            Tenha acesso às aulas e aprenda técnicas de barbearia com
            explicações práticas e diretas ao ponto.
          </p>
        </div>

        {/* Card da oferta */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-blue-500/40 bg-[#111827] shadow-2xl shadow-blue-950/30">
          {/* Topo */}
          <div className="bg-linear-to-r from-blue-700 to-blue-500 px-6 py-5 text-center">
            <p className="text-sm font-black tracking-widest text-white">
              OFERTA ESPECIAL
            </p>
            <p className="mt-1 text-sm text-blue-100">
              Aprenda no seu ritmo e comece do zero!
            </p>
          </div>

          <div className="p-7 md:p-10">
            {/* Produto */}
            <div className="text-center">
              <span className="text-xs font-bold tracking-[3px] text-blue-400">
                CURSO ONLINE
              </span>

              <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                APRENDA A CORTAR
                <span className="block text-yellow-400">
                  CABELO SEM FRESCURA
                </span>
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Um conteúdo pensado para quem deseja aprender técnicas de cortes
                masculinos e desenvolver habilidades na barbearia.
              </p>
            </div>

            {/* Benefícios */}
            <div className="my-9 rounded-2xl border border-white/10 bg-white/3 p-6">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                O QUE ESTÁ INCLUÍDO:
              </h4>

              <ul className="space-y-4">
                {beneficios.map(beneficio => (
                  <li
                    key={beneficio}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <span className="mt-0.5 text-blue-400">✓</span>
                    {beneficio}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preço */}
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                INVESTIMENTO PARA COMEÇAR
              </p>

              <div className="my-4 flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-gray-400">R$</span>

                <span className="text-6xl font-black tracking-tighter text-yellow-400">
                  97
                </span>

                <span className="self-end pb-2 text-xl font-bold text-yellow-400">
                  ,00
                </span>
              </div>

              <p className="text-sm text-gray-400">
                Pagamento único, conforme condições do checkout.
              </p>
            </div>

            {/* CTA */}
            <a
              href={checkoutUrl}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-5 text-center text-sm font-black text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-600/30"
            >
              QUERO COMEÇAR AGORA
              <span className="text-xl">→</span>
            </a>

            {/* Segurança */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <span className="text-blue-400">🔒</span>
                Pagamento seguro
              </span>

              <span className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Compra online
              </span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Confira as condições de acesso, pagamento e garantia disponíveis na
          plataforma antes de finalizar sua compra.
        </p>
      </div>
    </section>
  );
}
