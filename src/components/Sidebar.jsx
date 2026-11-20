import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Links rápidos</h2>
      <Link to="/user/1">Perfil 1</Link>
      <Link to="/user/2">Perfil 2</Link>
      <Link to="/pagina-inexistente">Testar 404</Link>
    </aside>
  )
}
