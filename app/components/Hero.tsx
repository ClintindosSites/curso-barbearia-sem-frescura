export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-tag">
            <span className="hero-dot"></span>
            CURSO ONLINE DE BARBEARIA
          </span>

          <h1>
            APRENDA A CORTAR CABELO
            <span> DO ZERO!</span>
          </h1>

          <p className="hero-subtitle">
            Aprenda técnicas de barbearia com aulas práticas, passo a passo, e
            desenvolva uma habilidade que pode abrir novas oportunidades
            profissionais.
          </p>

          <div className="hero-benefits">
            <span>✓ Aulas 100% online</span>
            <span>✓ Aprenda no seu ritmo</span>
            <span>✓ Para iniciantes</span>
          </div>

          <a href="#oferta" className="hero-button">
            QUERO APRENDER A CORTAR CABELO
            <span>→</span>
          </a>

          <span className="hero-note">
            Comece hoje mesmo sua jornada na barbearia.
          </span>
        </div>
      </div>
    </section>
  );
}
