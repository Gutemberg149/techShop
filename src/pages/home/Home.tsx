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
`;
export default Home;
