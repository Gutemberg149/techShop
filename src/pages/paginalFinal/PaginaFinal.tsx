import React from "react";
import styled from "styled-components";
import Nav from "../../components/nav/Nav";

function PaginaFinal() {
  return (
    <Wrapper>
      <header>
        <Nav />
      </header>
      <main>
        <h1>Parabéns, compra efetuada.</h1>

        <div className="purchaseContainer">
          <p>Acompanhe o envio da compra pelo seu amail.</p>
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  main {
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    h1 {
      margin-bottom: 3rem;
    }
    .purchaseContainer {
      width: 50%;
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      border-radius: 0.51rem;
      p {
        font-size: 1.2rem;
      }
    }
  }
`;
export default PaginaFinal;
