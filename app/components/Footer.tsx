import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "O que você vai aprender", href: "#conteudo" },
  { label: "Professor", href: "#professor" },
  { label: "Oferta", href: "#oferta" },
  { label: "Dúvidas frequentes", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B13] px-5 pb-8 pt-14 text-gray-300">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Link href="#inicio" className="inline-flex items-center gap-3">
              <div className="flex h-15 w-15 items-center justify-center rounded-full bg-yellow-400 font-black text-gray-950">
                <Image
                  src="/logo.png"
                  alt="Logomarca da Barbearia do Klisman"
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <h3 className="font-black leading-tight text-white">
                  APRENDA A CORTAR
                </h3>
                <span className="text-xs font-bold tracking-widest text-yellow-400">
                  SEM FRESCURA
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Aprenda técnicas de barbearia com aulas práticas e desenvolva suas
              habilidades no seu próprio ritmo.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Navegação
            </h4>

            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              Informações
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-sm text-gray-400 transition hover:text-yellow-400"
                >
                  Política de Privacidade
                </Link>
              </li>

              <li>
                <Link
                  href="/termos-de-uso"
                  className="text-sm text-gray-400 transition hover:text-yellow-400"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs leading-relaxed text-gray-500">
            © 2026 - Aprenda a Cortar Cabelo Sem Frescura. Todos os direitos
            reservados.
          </p>

          <p className="mt-2 text-center text-xs text-gray-600">
            O aprendizado e os resultados dependem da dedicação e da prática de
            cada aluno.
          </p>
          <p className="mt-2 text-center text-xs text-gray-300">
            Desenvolvido por{" "}
            <Link
              href={"https://clintindossites.com.br"}
              className="font-bold text-amber-300"
            >
              Clintin dos Sites
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
