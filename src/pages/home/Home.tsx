import styled from "styled-components";
import ProductsMain from "./../../components/productsMain/ProductsMain";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const pathName = location.pathname;
  localStorage.setItem("previuosLocation", JSON.stringify(pathName));
  return (
    <Wrapper>
      <header>
        <Nav />
      </header>

      <main>
        <ProductsMain />
      </main>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 1rem;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
export default Home;
