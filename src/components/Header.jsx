import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/">Meu Website</Link>
      <nav className="nav" aria-label="Navegação principal">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
