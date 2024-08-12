import styled from "styled-components";
import SearchFormHeader from "../searchFormHeader/SearchFormHeader";
import cube from "./../../images/logo/cube4.svg";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProdContext } from "../prodsContex/ProdsContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/FirebaseAuth";

function Nav() {
  const [user, setUser] = useState<string>("");
  const [showSearch, setShowSearch] = useState(false);
  const [showSign, setShowSign] = useState(false);

  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    setShowSearch(pathName === "/");
    setShowSign(pathName === "/signin");
  }, [pathName]);

  const context = useContext(ProdContext);
  if (!context) {
    throw new Error("Forgot to pass provider");
  }

  const { prodInCart } = context;

  const logOut = () => {
    localStorage.setItem("localStorageUserName", JSON.stringify(" "));
    return signOut(auth);
  };

  //this code bellow is to check if the user is logged in or not.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser?.displayName || "");
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Wrapper>
      <nav>
        <Link to="/">
          <div className="logo">
            <img src={cube} alt="" />
            <p>
              Tech<span>S</span>tore
            </p>
          </div>
        </Link>
        {showSearch && (
          <div className="formSearchContainer">
            <SearchFormHeader />
          </div>
        )}

        <div className="userContainer">
          <Link to="/cart">
            <div className="carrinhoLink">
              <div className="bagContainer">
                <p className="prodCount">{prodInCart.length}</p>
                <FaShoppingBag className="shopBag" />
              </div>
              <p className="pCarrinho">carrinho</p>
            </div>
          </Link>
          {user != "" ? (
            <p className="welcome">
              <span>Bem vindo</span> {user}
            </p>
          ) : null}

          {user != "" ? (
            <div className="userSinged" onClick={() => logOut()}>
              <p>Log out</p>
            </div>
          ) : showSign ? null : (
            <div className="userSinged">
              <Link to="/signin">
                <p>Sig in</p>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 1rem 2rem;
    background-color: black;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50px;
        margin-right: 0.5rem;
      }
      p {
        font-size: 1.6rem;
        font-weight: 700;
        color: white;
        span {
          color: #04aed0;
          font-size: 2.2rem;
        }
      }
    }
    .formSearchContainer {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      border-radius: 1rem;
      background-color: white;
    }

    .userContainer {
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      .carrinhoLink {
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 5%;
        margin-right: 2rem;
        cursor: pointer;
        .bagContainer {
          margin-right: 0.5rem;
          position: relative;
          .shopBag {
            font-size: 1.5rem;
          }
          .prodCount {
            position: absolute;
            color: white;
            font-size: 0.8rem;
            top: -1rem;
            right: -1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.2rem;
            height: 1.2rem;
            background-color: blue;
            border-radius: 50%;
          }
        }
      }

      .welcome {
        color: white;
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        span {
          font-weight: 600;
          font-size: 1rem;
        }
      }
    }
    .userSinged {
      width: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: 1rem;
      border: 1px solid white;
      height: fit-content;
      padding: 0.3rem 0.4rem;
      border-radius: 0.3rem;
      p {
        color: white;
        font-weight: 600;
        font-size: 0.9rem;
      }
      &:hover {
        background-color: #80808083;
      }
    }
  }
  @media only screen and (min-device-width: 250px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 50vh;
      padding: 0.5rem;
      background-color: black;
      padding: 0rem;
      .logo {
        justify-content: center;

        img {
          width: 32px;
          margin-right: 0.2rem;
          margin-bottom: 0;
        }
        p {
          font-size: 0.75rem;
          span {
            color: #04aed0;
            font-size: 1.7rem;
            margin: 0;
          }
        }
      }
      .formSearchContainer {
        width: 95vw;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        border-radius: 1rem;
        background-color: white;
      }

      .userContainer {
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        padding: 0rem;
        height: 60%;
        .carrinhoLink {
          width: 10%;
          margin-right: 0rem;
          .bagContainer {
            .shopBag {
            }
            .prodCount {
            }
          }
        }

        p {
          align-items: center;
          span {
          }
        }
      }
      .userSinged {
        cursor: pointer;
        margin-left: 0rem;
        .welcome {
          font-size: 0.8rem;
        }
        &:hover {
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 40vh;
      padding: 0.5rem;
      background-color: black;
      padding: 0rem;
      .logo {
        justify-content: center;
        margin: 1rem 0;
        img {
          width: 32px;
          margin-right: 0.2rem;
          margin-bottom: 0;
        }
        p {
          font-size: 0.75rem;
          span {
            color: #04aed0;
            font-size: 1.7rem;
            margin: 0;
          }
        }
      }
      .formSearchContainer {
        width: 95vw;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        border-radius: 1rem;
        background-color: white;
      }

      .userContainer {
        justify-content: space-around;
        width: 100%;
        padding: 0rem;
        height: 60%;
        .carrinhoLink {
          width: 10%;
          margin-right: 0rem;

          .bagContainer {
            .shopBag {
            }
            .prodCount {
            }
          }
        }

        .welcome {
          align-items: center;
          span {
          }
        }
      }
      .userSinged {
        cursor: pointer;
        margin-left: 0rem;
        p {
          font-size: 0.8rem;
        }
        &:hover {
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100vw;
      padding: 0.2rem 0;
      background-color: black;
      min-height: 4.5rem;
      padding: 0 1rem;
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        img {
          width: 30px;
          margin-right: 0.3rem;
        }
        p {
          font-size: 1rem;
          span {
            font-size: 1.2rem;
          }
        }
      }
      .formSearchContainer {
        width: 50%;
        height: 2.5rem;
      }

      .userContainer {
        padding: 0 0.4rem;
        .carrinhoLink {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 5%;
          margin-right: 0.5rem;
          .bagContainer {
            margin-right: 0.5rem;
            .shopBag {
              font-size: 0.9rem;
            }
            .prodCount {
              font-size: 0.7rem;
              top: -0.6rem;
              right: -1rem;
              width: 1rem;
              height: 1rem;
              font-size: 0.6rem;
            }
          }
          .pCarrinho {
            font-size: 0.8rem;
          }
        }

        .welcome {
          font-size: 0.5rem;
          align-items: center;
          width: 4rem;
          span {
            font-weight: 600;
            font-size: 0.6rem;
          }
        }
      }
      .userSinged {
        width: 3.5rem;
        padding: 0.2rem 0.2rem;
        border-radius: 0.3rem;
        p {
          color: white;
          font-weight: 600;
          font-size: 0.6rem;
        }
        &:hover {
          background-color: #80808083;
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100vw;
      min-height: 4.5rem;
      padding: 0.5rem 1rem;
      background-color: black;

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        img {
          width: 35px;
          margin-right: 0.3rem;
        }
        p {
          font-size: 1.1rem;
          span {
            font-size: 1.4rem;
          }
        }
      }
      .formSearchContainer {
        width: 50%;
        height: 2.5rem;
      }

      .userContainer {
        padding: 0 0.4rem;
        justify-content: space-between;
        width: 28%;
        .carrinhoLink {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-right: 0.5rem;
          .bagContainer {
            margin-right: 0.5rem;
            .shopBag {
              font-size: 1rem;
            }
            .prodCount {
              font-size: 0.7rem;
              top: -0.8rem;
              right: -1rem;
              width: 1.1rem;
              height: 1.1rem;
              font-size: 0.6rem;
            }
          }
          .pCarrinho {
            font-size: 0.9rem;
          }
        }

        .welcome {
          font-size: 0.7rem;
          align-items: center;
          width: 5.5rem;
          span {
            font-weight: 600;
            font-size: 0.7rem;
          }
        }
      }
      .userSinged {
        width: 4rem;
        padding: 0.2rem 0.2rem;
        border-radius: 0.3rem;
        p {
          color: white;
          font-weight: 600;
          font-size: 0.7rem;
        }
        &:hover {
          background-color: #80808083;
        }
      }
    }
  }
`;
export default Nav;
