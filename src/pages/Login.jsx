import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/cadastro";

  const handleChange = ({ target }) => {
    setFormData((currentData) => ({
      ...currentData,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Preencha email e senha para continuar.");
      return;
    }

    localStorage.setItem(
      "streambox-user",
      JSON.stringify({
        email: formData.email
      })
    );

    navigate("/");
  };

  return (
    <section className="page page--login">
      <div className="login-panel">
        <div className="login-panel__intro">
          <span className="section-tag">
            {isSignup ? "Novo acesso" : "Acesso rapido"}
          </span>
          <h1>{isSignup ? "Criar sua conta" : "Entrar na StreamBox"}</h1>
          <p>
            {isSignup
              ? "Use esta versao para simular cadastro no front-end e testar navegacao entre fluxos de autenticacao."
              : "Esta tela simula autenticacao no front-end e continua servindo como base para estudo de formularios e hooks."}
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-form__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="voce@exemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="login-form__field">
            <span>Senha</span>
            <input
              type="password"
              name="password"
              placeholder={isSignup ? "Crie uma senha" : "Digite qualquer senha"}
              value={formData.password}
              onChange={handleChange}
            />
          </label>

          {error && <p className="login-form__error">{error}</p>}

          <button type="submit" className="button button--primary button--full">
            {isSignup ? "Criar conta" : "Entrar"}
          </button>
        </form>

        <p className="login-panel__switch">
          {isSignup ? "Ja possui conta?" : "Ainda nao tem conta?"}{" "}
          <Link to={isSignup ? "/login" : "/cadastro"}>
            {isSignup ? "Fazer login" : "Fazer cadastro"}
          </Link>
        </p>
      </div>
    </section>
  );
}
