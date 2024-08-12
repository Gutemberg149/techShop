import styled from "styled-components";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <p>© 2024 Gutemberg Rocha. Todos os direitos reservados</p>

      <div className="socialContainer">
        <Link to="https://www.instagram.com/accounts/onetap/?next=%2F" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="icon" />
        </Link>
        <Link to="https://www.linkedin.com/in/gutemberg-rocha-28757361/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </Link>
        <Link to="https://github.com/Gutemberg149" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 7rem;
  background-color: #ebeced;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    color: #525151;
    font-size: 0.8rem;
  }
  .socialContainer {
    display: flex;
    .icon {
      margin: 0 1rem;
      font-size: 2rem;
      color: #525151;
      transition: 0.4s;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        transform: scale(1.4);
        color: black;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      font-size: 0.5rem;
      width: 8rem;
    }
    .socialContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 5rem;
      .icon {
        margin: 0rem;
        font-size: 1.3rem;
        padding: 0;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      font-size: 0.55rem;
      width: 9rem;
    }
    .socialContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 6rem;
      .icon {
        margin: 0rem;
        font-size: 1.5rem;
        padding: 0;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      font-size: 0.55rem;
      width: 18rem;
    }
    .socialContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 8rem;
      .icon {
        margin: 0rem;
        font-size: 1.7rem;
        padding: 0;
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
export default Footer;
