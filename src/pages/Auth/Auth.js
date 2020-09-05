import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";
import Instaclone from "../../assets/png/instaclone.png";
import "./Auth.scss";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className="auth">
      <Image src={Instaclone} />

      <div className="container-form">
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              ¿No tienes una cuenta?
              <span onClick={() => setShowLogin(!showLogin)}>Regístrate</span>
            </>
          ) : (
            <>
              ¿Tienes una cuenta?
              <span onClick={() => setShowLogin(!showLogin)}>
                Inicia sesión
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
}
