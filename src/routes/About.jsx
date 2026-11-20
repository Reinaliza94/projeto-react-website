import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="page">
      <h1>Sobre</h1>
      <p>
        Esta atividade demonstra navegação entre páginas, layout compartilhado,
        lazy loading e rotas dinâmicas em uma aplicação React.
      </p>
      <div className="page-links">
        <Link to="/">Ir para Home</Link>
        <Link to="/contact">Ir para Contact</Link>
      </div>
    </section>
  )
}
