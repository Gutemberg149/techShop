import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProdContext } from "../../components/prodsContex/ProdsContext";
import { Link, useLocation } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";

function Payment() {
  const [nome, setNome] = useState("");
  const [celNumber, setCelNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCode, setCardCode] = useState("");
  const [ableBtn, setAbleBtn] = useState(true);

  const context = useContext(ProdContext);
  if (!context) {
    throw new Error("Forgot to pass provider");
  }
  const { prodInCart, setProdInCart, total } = context;

  useEffect(() => {
    setAbleBtn(!(nome && celNumber && cardNumber && cardCode));
  }, [nome, celNumber, cardNumber, cardCode]);

  const location = useLocation();
  const pathName = location.pathname;
  localStorage.setItem("previuosLocation", JSON.stringify(pathName));

  function cleanLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(" "));
    setProdInCart([]);
  }

  function handleNumberInputChange(setter: React.Dispatch<React.SetStateAction<string>>) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === "" || !isNaN(Number(value))) {
        setter(value);
      }
    };
  }

  return (
    <Wrapper>
      <header>
        <Nav />
      </header>
      <h1 className="title">Pagamento</h1>
      <main>
        <form>
          <div className="topText">
            <h5>Dados do cartão</h5>
            <p className="textIdentificacao">
              Utilizaremos seu e-mail para: Identificar seu perfil, histórico de compra, notificação de pedidos e carrinho de compras
            </p>
          </div>

          <div className="inputcontainer">
            <label htmlFor="fullName">Nome inteiro</label>
            <input type="text" id="fullName" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div className="inputcontainer">
            <label htmlFor="phoneNumber">Celuar - Whatssap</label>
            <input type="text" id="phoneNumber" value={celNumber} onChange={handleNumberInputChange(setCelNumber)} />
          </div>

          <div className="inputcontainer">
            <label htmlFor="cardNumber">Numero do cartão</label>
            <input type="text" id="cardNumber" value={cardNumber} onChange={handleNumberInputChange(setCardNumber)} />
          </div>
          <div className="inputcontainer">
            <label htmlFor="securityCode">Código de segurança</label>
            <input type="text" id="securityCode" value={cardCode} onChange={handleNumberInputChange(setCardCode)} />
          </div>

          <div className="pay" style={{ display: ableBtn ? "none" : "block" }}>
            <Link to="/paginafinal">
              <p onClick={() => cleanLocalStorage()}>Finalizar</p>
            </Link>
          </div>
        </form>

        <div className="resumo">
          <h3>Resumo da compra</h3>
          {prodInCart.map((prod) => {
            return (
              <div className="innerResumo" key={prod.id}>
                <img src={prod.images} alt="" />

                <div className="info">
                  <div className="name">{prod.name}</div>
                  <div className="qtd">Quant. {prod.qtd}</div>
                  <div className="price">
                    <span>R$ {prod.price}</span> und.
                  </div>
                </div>
                <div className="total">
                  <p className="totalText">Total:</p>
                  <p className="totalValue">R$ {total.toLocaleString("BR")}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 1rem;
  }
  main {
    width: 100vw;
    min-height: 75vh;
    display: flex;
    align-items: start;
    justify-content: space-around;
    padding: 0 5rem;
    margin-top: 3rem;

    form {
      width: 35%;
      height: 35rem;
      border: 2px solid #717070;
      display: flex;
      background-color: white;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-radius: 1rem;
      .topText {
        h5 {
          font-size: 1.5rem;
          color: #0c2434;
        }
        .textIdentificacao {
          font-size: 0.8rem;
          color: gray;
          margin-top: 0.5rem;
        }
      }
      .inputcontainer {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 1px solid gray;
        border-radius: 0.3rem;
        input {
          border-radius: 0.3rem;
          border: none;
          height: 3rem;
          padding-left: 1rem;
          font-size: 1rem;

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

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
      .pay {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        height: 2.5rem;
        background-color: #2da1d3;
        border-radius: 0.3rem;
        cursor: pointer;
        a {
          color: white;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        &:hover {
          background-color: #23789d;
        }
      }
    }
    .resumo {
      display: flex;
      flex-direction: column;
      border: 2px solid gray;
      width: 30%;
      min-height: 25rem;
      display: flex;
      align-items: center;
      border-radius: 1rem;
      background: white;
      padding: 0.5rem;
      margin-bottom: 2rem;
      h3 {
        margin: 1rem 0 3rem 0;
      }
      .innerResumo {
        display: flex;
        align-items: start;
        justify-content: space-around;
        width: 99%;
        height: fit-content;
        margin-bottom: 2rem;

        img {
          width: 80px;
        }
        .info {
          display: flex;
          flex-direction: column;
          align-items: start;
          margin-right: 0.5rem;
          .name {
            font-size: 0.8rem;
            height: 2rem;
          }
          .qtd {
            font-size: 0.7rem;
            height: 2rem;
          }
          .price {
            font-size: 0.8rem;
            height: 2rem;
          }
        }
        .total {
          display: flex;
          align-items: center;
          .totalText {
            margin-right: 0.5rem;
            font-weight: 500;
          }
          .totalValue {
            display: flex;
            font-size: 0.8rem;
          }
        }
      }
      .innerResumo:not(:last-child) {
        border-bottom: 1px solid gray;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    /* width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    header {
      width: 100%;
    }
    h1 {
      /* margin-top: 1rem; */
      font-size: 1.5rem;
    }
    main {
      width: 100vw;
      min-height: 75vh;
      display: flex;
      align-items: start;
      justify-content: space-around;
      padding: 0 5rem;
      margin-top: 3rem;

      form {
        width: 35%;
        height: 35rem;
        border: 2px solid #717070;
        display: flex;
        background-color: white;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 1rem;
        .topText {
          h5 {
            font-size: 1.5rem;
            color: #0c2434;
          }
          .textIdentificacao {
            font-size: 0.8rem;
            color: gray;
            margin-top: 0.5rem;
          }
        }
        .inputcontainer {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          border: 1px solid gray;
          border-radius: 0.3rem;
          input {
            border-radius: 0.3rem;
            border: none;
            height: 3rem;
            padding-left: 1rem;
            font-size: 1rem;

            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

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
        .pay {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60%;
          height: 2.5rem;
          background-color: #2da1d3;
          border-radius: 0.3rem;
          cursor: pointer;
          a {
            color: white;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          &:hover {
            background-color: #23789d;
          }
        }
      }
      .resumo {
        display: flex;
        flex-direction: column;
        border: 2px solid gray;
        width: 30%;
        min-height: 25rem;
        display: flex;
        align-items: center;
        border-radius: 1rem;
        background: white;
        padding: 0.5rem;
        margin-bottom: 2rem;
        h3 {
          margin: 1rem 0 3rem 0;
        }
        .innerResumo {
          display: flex;
          align-items: start;
          justify-content: space-around;
          width: 99%;
          height: fit-content;
          margin-bottom: 2rem;

          img {
            width: 80px;
          }
          .info {
            display: flex;
            flex-direction: column;
            align-items: start;
            margin-right: 0.5rem;
            .name {
              font-size: 0.8rem;
              height: 2rem;
            }
            .qtd {
              font-size: 0.7rem;
              height: 2rem;
            }
            .price {
              font-size: 0.8rem;
              height: 2rem;
            }
          }
          .total {
            display: flex;
            align-items: center;
            .totalText {
              margin-right: 0.5rem;
              font-weight: 500;
            }
            .totalValue {
              display: flex;
              font-size: 0.8rem;
            }
          }
        }
        .innerResumo:not(:last-child) {
          border-bottom: 1px solid gray;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
export default Payment;
