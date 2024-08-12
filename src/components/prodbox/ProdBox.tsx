import styled from "styled-components";

type ProdProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string;
};
const ProdBox = ({ name, description, price, images }: ProdProps) => {
  return (
    <Wrapper>
      <div className="prodbox">
        <img src={images} alt="" />
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <p className="price">R$ {price}</p>
        <p className="stallment">
          em até <b>12 x de </b> <span className="parcelas">{Math.floor(price / 12)}</span>
        </p>
        <p className="frete">Frete Gratis</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .prodbox {
    position: relative;
    height: 30rem;
    width: 18rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #edf1f3;
    margin: 1rem;
    cursor: pointer;
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 1rem;
      transition: 0.4s;
    }
    .name {
      margin: 0.4rem 0;
      font-weight: 600;
      font-size: 0.9rem;
    }
    .description {
      font-size: 0.7rem;
      text-align: justify;
    }
    .price {
      color: black;
      font-weight: 700;
      margin-top: 0.5rem;
    }
    .stallment {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      b {
        margin-left: 0.3rem;
      }
      span {
        margin-left: 0.3rem;
      }
    }
    .frete {
      position: absolute;
      bottom: 1rem;
      left: 0.8rem;
      margin-top: 1rem;
      background-color: #4194e2;
      color: white;
      width: fit-content;
      padding: 0.4rem 1rem;
      border-radius: 1rem;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
  .prodbox:hover > img {
    transform: scale(0.95);
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    .prodbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: fit-content;
      width: 100vw;
      padding: 1rem;
      margin: 1rem 0;

      img {
        width: 60%;
      }
      .name {
        margin: 0.2rem 0;
        font-weight: 600;
        font-size: 0.9rem;
      }
      .description {
        font-size: 0.7rem;
        text-align: justify;
      }
      .price {
        color: black;
        font-weight: 700;
        margin-top: 0.5rem;
      }
      .stallment {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        b {
          margin-left: 0.3rem;
        }
        span {
          margin-left: 0.3rem;
        }
      }
      .frete {
        position: relative;
        bottom: 1rem;
        left: 0rem;
        margin-top: 1rem;
        /* background-color: #4194e2; */
        /* color: white; */
        /* width: fit-content; */
        padding: 0.2rem 0.8rem;
        /* border-radius: 1rem; */
        font-size: 0.7rem;
        /* font-weight: 500; */
      }
    }
    .prodbox:hover > img {
      transform: scale(0.95);
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
export default ProdBox;
