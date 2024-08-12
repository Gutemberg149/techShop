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
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      h1 {
        margin-bottom: 3rem;
        font-size: 1.5rem;
        word-wrap: break-word;
        text-align: center;
      }
      .purchaseContainer {
        width: 90%;

        text-align: center;
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      h1 {
        padding: 0 2rem;
        margin-bottom: 3rem;
        font-size: 1.7rem;
        word-wrap: break-word;
        text-align: center;
      }
      .purchaseContainer {
        width: 20rem;

        text-align: center;
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      h1 {
        margin-bottom: 3rem;
        font-size: 1.8rem;
        word-wrap: break-word;
        text-align: center;
      }
      .purchaseContainer {
        width: 24rem;

        text-align: center;
        p {
          font-size: 1.3rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
export default PaginaFinal;
