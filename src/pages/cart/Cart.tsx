import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProdContext } from "../../components/prodsContex/ProdsContext";
import Footer from "../../components/footer/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/FirebaseAuth";
import Nav from "../../components/nav/Nav";

function Cart() {
  const [noProdsMessage, setNoProdsMessage] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const context = useContext(ProdContext);
  if (!context) {
    throw new Error("Forgot to pass provider");
  }
  const { prodInCart, setProdInCart, total } = context;

  function deleteProd(id: number) {
    setProdInCart((prevCart) => {
      const updatedCart = prevCart.filter((prod) => prod.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  useEffect(() => {
    if (prodInCart.length === 0) {
      setNoProdsMessage(true);
    } else {
      setNoProdsMessage(false);
    }
  }, [prodInCart]);

  const location = useLocation();
  const pathName = location.pathname;
  localStorage.setItem("previuosLocation", JSON.stringify(pathName));

  // ---------------------------------------------------------------------
  //this code bellow is to check if the user is logged in or not.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsEnabled(currentUser == null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Wrapper>
      <header>
        <Nav />
      </header>
      <main>
        <div className="resumo">
          <h3>Resumo da compra</h3>
          {noProdsMessage ? (
            <Link to="/">
              <div className="messageNoproducts">
                <h4>Não há produtos no carrinho!</h4>

                <button className="CompreAqui">Compre aqui</button>
              </div>
            </Link>
          ) : (
            prodInCart.map((prod) => {
              return (
                <div className="innerResumo" key={prod.id}>
                  <div className="prodFinalInfo">
                    <img src={prod.images} alt="" />

                    <div className="info">
                      <div className="name">{prod.name}</div>
                      <div className="qtd">Quant. {prod.qtd}</div>
                      <div className="price">
                        <span>R$ {prod.price}</span> und.
                      </div>
                    </div>
                    <div className="deleteBtn">
                      <button className="btnDelete" onClick={() => deleteProd(prod.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          <div className="bottomInfo">
            <div className="total">
              <p className="totalText">Total:</p>
              <p className="totalValue">R$ {total.toLocaleString("BR")}</p>
            </div>
            {noProdsMessage ? (
              ""
            ) : (
              <Link to={isEnabled ? "/signin" : "/payment"}>
                <button className="btnPay">Pague Aqui</button>
              </Link>
            )}
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  main {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .resumo {
      margin: 3rem 0;
      width: 40vw;
      min-height: 70vh;
      background-color: #f0f4f4;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
        rgba(0, 0, 0, 0.07) 0px 16px 16px;
      h3 {
        color: #012f41;
        font-size: 1.3rem;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 0.5px solid #626262;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageNoproducts {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h4 {
          color: #012f41;
          font-size: 1.3rem;
          margin-bottom: 2rem;
        }
        .CompreAqui {
          width: 8rem;
          height: 2.4rem;
          background-color: #6ebef4;
          border: none;
          border-radius: 0.4rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      .innerResumo {
        width: 100%;
        margin-bottom: 2rem;

        .prodFinalInfo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
            rgba(0, 0, 0, 0.07) 0px 16px 16px;

          img {
            width: 50px;
          }
          .info {
            display: flex;
            flex-direction: column;
            .name {
              font-size: 0.8rem;
            }
            .qtd {
              font-size: 0.8rem;
              margin-top: 0.4rem;
            }
            .price {
              font-size: 0.9rem;
              margin-top: 0.4rem;
              span {
                font-weight: 600;
              }
            }
          }
          .btnDelete {
            width: 3.5rem;
            height: 1.5rem;
            font-size: 0.7rem;
            background-color: #ab0303;
            color: white;
            border: none;
            border-radius: 0.2rem;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
      .bottomInfo {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0.5rem;
      }
      .total {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 2rem;
        border-top: 0.5px solid #626262;
        padding-top: 0.5rem;
      }
      a {
        width: 100%;
        .btnPay {
          width: 90%;
          height: 2.5rem;
          border: none;
          background-color: #7a7979;
          border-radius: 0.2rem;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
            color: #1f1f1f;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .resumo {
        margin: 1rem 0;
        width: 100vw;

        padding: 1rem 0.5rem;

        h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
        }
        .messageNoproducts {
          h4 {
            font-size: 0.8rem;
          }
          .CompreAqui {
            width: 7rem;

            font-size: 0.8rem;

            cursor: pointer;
            &:hover {
            }
          }
        }
        .innerResumo {
          margin-bottom: 1rem;

          .prodFinalInfo {
            img {
            }
            .info {
              display: flex;
              flex-direction: column;
              margin-left: 0.8rem;
              .name {
                font-size: 0.7rem;
              }
              .qtd {
                font-size: 0.7rem;
                margin-top: 0.3rem;
              }
              .price {
                font-size: 0.8rem;
                margin-top: 0.3rem;
                span {
                  font-weight: 600;
                }
              }
            }
            .btnDelete {
              width: 3rem;

              cursor: pointer;
              &:hover {
              }
            }
          }
        }
        .bottomInfo {
        }
        .total {
          margin-bottom: 1rem;

          .totalText {
            font-size: 0.9rem;
            font-weight: 600;
          }
          .totalValue {
            font-size: 0.9rem;
            font-weight: 600;
          }
        }
        a {
          .btnPay {
            width: 100%;
            height: 2.5rem;
            border: none;
            background-color: #7a7979;
            border-radius: 0.2rem;
            font-size: 1rem;
            font-weight: 600;
            color: white;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              color: #1f1f1f;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .resumo {
        margin: 1rem 0;
        width: 90vw;
        padding: 1rem 0rem;
        align-items: center;
        justify-content: center;

        h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
        }
        .messageNoproducts {
          min-height: 15rem;
          h4 {
            font-size: 1rem;
          }
          .CompreAqui {
            width: 8rem;
            font-size: 0.9rem;
            cursor: pointer;
            &:hover {
            }
          }
        }
        .innerResumo {
          margin-bottom: 1rem;
          width: 20rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .prodFinalInfo {
            height: 8rem;
            width: 90%;
            img {
            }
            .info {
              margin-left: 0.8rem;
              .name {
                font-size: 0.8rem;
              }
              .qtd {
                font-size: 0.8rem;
                margin-top: 0.3rem;
              }
              .price {
                font-size: 0.9rem;
                margin-top: 0.4rem;
                span {
                  font-weight: 600;
                }
              }
            }
            .btnDelete {
              width: 3rem;

              cursor: pointer;
              &:hover {
              }
            }
          }
        }
        .bottomInfo {
        }
        .total {
          margin-bottom: 1rem;

          .totalText {
            font-size: 0.9rem;
            font-weight: 600;
          }
          .totalValue {
            font-size: 0.9rem;
            font-weight: 600;
          }
        }
        a {
          .btnPay {
            width: 100%;
            height: 2.5rem;
            border: none;
            background-color: #7a7979;
            border-radius: 0.2rem;
            font-size: 1rem;
            font-weight: 600;
            color: white;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              color: #1f1f1f;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .resumo {
        margin: 1rem 0;
        width: 90vw;
        padding: 1rem 0rem;
        align-items: center;
        justify-content: center;

        h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
        }
        .messageNoproducts {
          min-height: 15rem;
          h4 {
            font-size: 1.1rem;
          }
          .CompreAqui {
            width: 8rem;
            font-size: 0.9rem;
            cursor: pointer;
            &:hover {
            }
          }
        }
        .innerResumo {
          margin-bottom: 1rem;
          width: 23rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .prodFinalInfo {
            height: 10rem;
            width: 90%;
            img {
              width: 80px;
            }
            .info {
              margin-left: 0.9rem;
              .name {
                font-size: 0.9rem;
              }
              .qtd {
                font-size: 0.9rem;
                margin-top: 0.3rem;
              }
              .price {
                font-size: 0.9rem;
                margin-top: 0.4rem;
                span {
                  font-weight: 600;
                }
              }
            }
            .btnDelete {
              width: 3.5rem;
              height: 2rem;

              cursor: pointer;
              &:hover {
              }
            }
          }
        }
        .bottomInfo {
        }
        .total {
          margin-bottom: 1rem;
          padding: 1rem 2rem 0 2rem;
          .totalText {
            font-size: 1.1rem;
            font-weight: 600;
          }
          .totalValue {
            font-size: 1rem;
            font-weight: 600;
          }
        }
        a {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .btnPay {
            width: 12rem;
            height: 2.5rem;
            border: none;
            background-color: #7a7979;
            border-radius: 0.2rem;
            font-size: 1rem;
            font-weight: 600;
            color: white;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              color: #1f1f1f;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      .resumo {
        h3 {
        }
        .messageNoproducts {
          min-height: 15rem;
          h4 {
            font-size: 1.1rem;
          }
          .CompreAqui {
            width: 8rem;
            font-size: 0.9rem;
            cursor: pointer;
            &:hover {
            }
          }
        }
        .innerResumo {
          .prodFinalInfo {
            img {
            }
            .info {
              .name {
              }
              .qtd {
              }
              .price {
                span {
                }
              }
            }
            .btnDelete {
              cursor: pointer;
              &:hover {
              }
            }
          }
        }
        .bottomInfo {
        }
        .total {
          margin-bottom: 1rem;
          padding: 1rem 2rem 0 2rem;
          .totalText {
            font-size: 1.1rem;
            font-weight: 600;
          }
          .totalValue {
            font-size: 1rem;
            font-weight: 600;
          }
        }
        a {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .btnPay {
            width: 12rem;
            height: 2.5rem;
            border: none;
            background-color: #7a7979;
            border-radius: 0.2rem;
            font-size: 1rem;
            font-weight: 600;
            color: white;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
              color: #1f1f1f;
            }
          }
        }
      }
    }
  }
`;
export default Cart;
