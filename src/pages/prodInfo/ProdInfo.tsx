import styled from "styled-components";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProdContext } from "../../components/prodsContex/ProdsContext";

function ProdInfo() {
  const [popUp, setPopUp] = useState(false);

  const context = useContext(ProdContext);
  if (!context) {
    throw new Error("Forgot to pass provider");
  }
  const { prodInCart, setProdInCart } = context;

  const { id } = useParams<{ id: string }>();
  let prodId: number;

  let prods = [];
  const prodsFromStorage = localStorage.getItem("allProds");
  if (prodsFromStorage) {
    prods = JSON.parse(prodsFromStorage);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(prodInCart));
  }, [prodInCart]);

  //pop meesagem when product be added to the cart.
  function popUpFun() {
    setPopUp(true);

    setTimeout(() => {
      setPopUp(false);
    }, 4000);
  }

  // ---------return--------------------------
  if (id !== undefined) {
    prodId = parseInt(id, 10);
    if (id === undefined || isNaN(prodId)) {
      return <h1>Prod not found</h1>;
    } else {
      prodId = parseInt(id, 10);
      const addProdToCart = () => {
        const existingProdIndex = prodInCart.findIndex((item) => item.id === prods[prodId - 1].id);
        if (existingProdIndex !== -1) {
          setProdInCart((prod) => {
            const updatedCart = [...prod];
            updatedCart[existingProdIndex].qtd += 1;
            popUpFun();
            return updatedCart;
          });
        } else {
          setProdInCart((prod) => [...prod, { ...prods[prodId - 1], qtd: 1 }]);
          popUpFun();
        }
      };

      return (
        <Wrapper>
          <header>
            <Nav />
          </header>
          <main>
            {popUp ? (
              <div className="popUp">
                <p>Produto Adicionado ao carrinho</p>
              </div>
            ) : (
              ""
            )}

            <div className="left">
              <img src={prods[prodId - 1].images} alt="" />
            </div>
            <div className="right">
              <h4 className="name">{prods[prodId - 1].name}</h4>
              <p className="fulldesc">{prods[prodId - 1].full_description}</p>

              <div className="priceContainer">
                <p className="price">RS {prods[prodId - 1].price}</p>
                <p className="stallment">
                  em até <b>12 x de </b>{" "}
                  <span className="parcelas">{Math.floor(prods[prodId - 1].price / 12).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                </p>
              </div>
              <div className="btnContainer">
                <button onClick={addProdToCart}>Adicionar</button>
              </div>
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </Wrapper>
      );
    }
  }
}

const Wrapper = styled.div`
  main {
    position: relative;
    background-color: #1b1b1b;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    .popUp {
      position: absolute;
      width: 18rem;
      height: 3rem;
      background-color: #4f9bda;
      color: white;
      border-radius: 0.5rem;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 1rem;
      letter-spacing: 0.08rem;
      font-weight: 500;
    }
    .left {
      width: 50%;
      display: grid;
      place-items: center;

      img {
        width: 70%;
      }
    }
    .right {
      width: 40%;
      color: white;
      padding: 6rem 0;
      .name {
        margin-bottom: 3rem;
        font-size: 1.6rem;
      }
      .fulldesc {
        font-size: 1.1rem;
        margin-bottom: 3rem;
      }
      button {
        width: 20rem;
        height: 3rem;
        border-radius: 0.5rem;
        font-size: 1.4rem;
        background-color: #5eb1f5;
        border: none;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      .priceContainer {
        margin-bottom: 3rem;
        .price {
          margin-bottom: 1rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .popUp {
        position: absolute;
        width: 95vw;
        height: 3rem;
        font-size: 0.65rem;
        font-weight: 600;

        top: 30rem;
        letter-spacing: 0.08rem;
        font-weight: 600;
      }
      .left {
        width: 100%;
        display: grid;
        place-items: center;
        margin-top: 1rem;
        img {
          width: 50%;
        }
      }
      .right {
        width: 100%;
        padding: 1rem;
        margin-top: 1rem;
        .name {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fulldesc {
          font-size: 0.9rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: justify;
        }

        .priceContainer {
          margin-bottom: 2rem;
          .price {
            margin-bottom: 1rem;
          }
        }
        .btnContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            width: 10rem;
            height: 2.5rem;
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .popUp {
        position: absolute;
        width: 65vw;
        height: 3rem;
        font-size: 0.65rem;
        font-weight: 600;
        top: 31rem;
        letter-spacing: 0.08rem;
        font-weight: 600;
      }
      .left {
        width: 100%;
        display: grid;
        place-items: center;
        margin-top: 1rem;
        img {
          width: 50%;
        }
      }
      .right {
        width: 100%;
        padding: 1rem;
        margin-top: 1rem;
        .name {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fulldesc {
          font-size: 0.9rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: justify;
        }

        .priceContainer {
          margin-bottom: 2rem;
          .price {
            margin-bottom: 1rem;
          }
        }
        .btnContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            width: 10rem;
            height: 2.5rem;
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .popUp {
        position: absolute;
        width: 16rem;
        height: 3rem;
        font-size: 0.65rem;
        font-weight: 600;
        top: 34rem;
        letter-spacing: 0.08rem;
        font-weight: 600;
      }
      .left {
        width: 100%;
        display: grid;
        place-items: center;
        margin-top: 1rem;
        img {
          width: 50%;
        }
      }
      .right {
        width: 100%;
        padding: 1rem;
        margin-top: 1rem;
        .name {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fulldesc {
          font-size: 0.9rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: justify;
        }

        .priceContainer {
          margin-bottom: 2rem;
          .price {
            margin-bottom: 1rem;
          }
        }
        .btnContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            width: 10rem;
            height: 2.5rem;
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
export default ProdInfo;
