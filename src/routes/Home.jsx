import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page">
      <h1>Bem-vindo!</h1>
      <p>
        Esta é a página inicial do nosso website desenvolvido com React e
        React Router.
      </p>
      <div className="page-links">
        <Link to="/about">Conheça o projeto</Link>
        <Link to="/contact">Fale conosco</Link>
        <Link to="/user/1">Ver perfil</Link>
      </div>
    </section>
  )
}
