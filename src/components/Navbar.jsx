import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const navLinks = [{ to: "/", label: "Inicio" }];

const authLinks = [
  {
    to: "/login",
    label: "Login",
    className: "navbar__button navbar__button--ghost"
  },
  {
    to: "/cadastro",
    label: "Fazer Cadastro",
    className: "navbar__button"
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("streambox-user"))
  );
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("streambox-user")));
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("streambox-user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--solid" : ""}`}>
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo">
          StreamBox
        </Link>
        <span className="navbar__tagline">Streaming UI Lab</span>
      </div>

      <nav className="navbar__links" aria-label="Navegacao principal">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar__actions">
        {isLoggedIn ? (
          <>
            <div className="navbar__profile">
              <span className="navbar__avatar">S</span>
              <span>Sessao ativa</span>
            </div>
            <button type="button" className="navbar__button" onClick={handleLogout}>
              Sair
            </button>
          </>
        ) : (
          authLinks.map((link) => (
            <Link key={link.to} to={link.to} className={link.className}>
              {link.label}
            </Link>
          ))
        )}
      </div>
    </header>
  );
}
