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
    width: 100%;
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
`;

export default ProductsMain;
