import Hero from "./components/Hero";
import Aprendizado from "./components/Aprendizado";
import Conteudo from "./components/Conteudo";
import Professor from "./components/Professor";
import NaPratica from "./components/NaPratica";
import Oferta from "./components/Oferta";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Aprendizado />
      <Conteudo />
      <Professor />
      <NaPratica />
      <Oferta />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
}
