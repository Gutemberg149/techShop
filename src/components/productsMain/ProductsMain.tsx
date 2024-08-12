import styled from "styled-components";
import ProdBox from "../prodbox/ProdBox";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProdContext } from "../prodsContex/ProdsContext";

function ProductsMain() {
  const context = useContext(ProdContext);
  if (!context) {
    throw new Error("Forgot to pass provider");
  }
  const { prods, NoProduct } = context;

  return (
    <Wrapper>
      <section>
        {NoProduct ? (
          <div className="noPRod">
            <h3>No Products found</h3>
          </div>
        ) : (
          prods.map((prod) => (
            <Link to={`/prodInfo/${prod.id}`} key={prod.id}>
              <ProdBox id={prod.id} name={prod.name} description={prod.description} price={prod.price} images={prod.images} />
            </Link>
          ))
        )}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .noPRod {
      width: 100vw;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 3rem;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;

export default ProductsMain;
