import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className="page">
      <h1>Contato</h1>
      <p>Entre em contato pelo e-mail: contato@exemplo.com</p>
      <div className="page-links">
        <Link to="/">Voltar para Home</Link>
        <Link to="/about">Ir para About</Link>
      </div>
    </section>
  )
}
