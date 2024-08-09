import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/nav/Nav";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const storedLocation = localStorage.getItem("previuosLocation");
    const previuosLocation = storedLocation ? JSON.parse(storedLocation) : "/";

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      setEmail("");
      setSenha("");
      navigate(previuosLocation);

      const userInfoName = user.providerData[0].displayName;
      localStorage.setItem("localStorageUserName", JSON.stringify(userInfoName));
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao registrar usuário:", error.message);
        console.error("Error code:", error.name);

        alert("Ocorreu um erro ao registrar. Verifique seu email e senha.");
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  return (
    <Wrapper>
      <Nav />
      <form onSubmit={handleRegister}>
        <div className="topText">
          <h5>Entre na sua conta aqui.</h5>
          <p className="textIdentificacao">
            Utilizaremos seu e-mail para: Identificar seu perfil, histórico de compra, notificação de pedidos e carrinho de compras
          </p>
        </div>

        <div className="inputcontainer">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="inputcontainer">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>

        <button className="btnRegistrar" type="submit">
          Entrar
        </button>

        <p className="linkSing">
          Se ainda não tiver uma conta <Link to="/singup">Click aqui</Link>
        </p>
      </form>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f3f3f3;
  form {
    width: 30%;
    height: 34rem;
    border: 1px solid olive;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3rem;
    margin: 2rem 0 2rem 0;
    .topText {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      h5 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
      .textIdentificacao {
        font-size: 0.8rem;
        text-align: center;
      }
    }
    .inputcontainer {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      border: 1px solid gray;
      border-radius: 0.3rem;
      margin-bottom: 2rem;
      input {
        border-radius: 0.3rem;
        border: none;
        height: 3rem;
        padding-left: 1rem;
        font-size: 1rem;

        &:focus {
          outline: none;
        }
      }
      label {
        position: absolute;
        background-color: white;
        top: -0.7rem;
        left: 1rem;
        font-size: 0.9rem;
        padding: 0 0.3rem;
      }
    }
    .btnRegistrar {
      width: 9rem;
      height: 3rem;
      border-radius: 2rem;
      border: none;
      background-color: #03aeab;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .linkSing {
      font-size: 0.8rem;
      font-weight: 300;
      color: #5d5d5d;
      a {
        font-size: 0.9rem;
        font-weight: 600;
        margin-left: 0.2rem;
        &:hover {
          color: red;
          font-weight: 700;
        }
      }
    }
  }
`;

export default SignInPage;
