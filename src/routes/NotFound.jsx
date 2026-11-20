import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page">
      <h1>Erro 404</h1>
      <p>A página que você tentou acessar não existe.</p>
      <div className="page-links">
        <Link to="/">Voltar para a página inicial</Link>
      </div>
    </section>
  )
}
