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
  const [user, setUser] = useState("");
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
      return setUser(currentUser);
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
              <p>carrinho</p>
            </div>
          </Link>
          {user != null ? (
            <p>
              <span>Bem vindo</span> {user.displayName}
            </p>
          ) : null}

          {user != null ? (
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

      p {
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
`;
export default Nav;
