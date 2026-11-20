import { Link, useParams } from 'react-router-dom'

export default function UserProfile() {
  const { id } = useParams()

  return (
    <section className="page">
      <h1>Perfil do usuário</h1>
      <p>
        Exibindo o perfil com o ID dinâmico: <strong>{id}</strong>
      </p>
      <div className="page-links">
        <Link to="/user/1">Perfil 1</Link>
        <Link to="/user/2">Perfil 2</Link>
        <Link to="/">Voltar para Home</Link>
      </div>
    </section>
  )
}
