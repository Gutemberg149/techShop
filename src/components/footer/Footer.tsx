import React from "react";
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
      cursor: pointer;
      &:hover {
        transform: scale(1.4);
        color: black;
      }
    }
  }
`;
export default Footer;
