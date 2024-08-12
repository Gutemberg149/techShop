import { useContext } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { ProdContext } from "../prodsContex/ProdsContext";

function SearchFormHeader() {
  const contex = useContext(ProdContext);
  if (!contex) {
    throw new Error("Forgot to pass provider");
  }
  const { search, setSearch } = contex;

  return (
    <Wrapper>
      <div className="searchcontainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="O que está buscando?" />
          <div className="searchIcon">
            <IoSearch />
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .searchcontainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        margin-left: 1rem;
        border: none;
        height: 2rem;
        padding-left: 1rem;
        width: 90%;
        font-size: 1.1rem;
        &:focus {
          outline: none;
        }
      }
      .searchIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8%;
        height: 2rem;
        margin-right: 0.5rem;
        background-color: #0c62b3;
        border: none;
        border-radius: 0.5rem;
        color: white;
        font-size: 1.3rem;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .searchcontainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
          margin-left: 0rem;
          border: none;
          height: 3rem;
          padding-left: 1rem;
          width: 90%;
          font-size: 0.8rem;
          border-radius: 1rem;
          &:focus {
            outline: none;
          }
        }

        .searchIcon {
          width: 15%;
          height: 3rem;
          margin-right: 0rem;
          border-radius: 0rem;
          font-size: 0.7rem;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .searchcontainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          margin-left: 0rem;
          border: none;
          height: 3rem;
          padding-left: 1rem;
          width: 90%;
          font-size: 0.9rem;
          border-radius: 1rem;
          &:focus {
            outline: none;
          }
        }

        .searchIcon {
          width: 10%;
          height: 3rem;
          margin-right: 0rem;
          border-radius: 0rem;
          font-size: 1rem;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    align-items: center;
    justify-content: center;
    .searchcontainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.5rem;
        input {
          margin-left: 0rem;
          border: none;
          border-radius: 0.5rem;
          height: 2.5rem;
          padding-left: 1rem;
          width: 90%;
          font-size: 0.9rem;
          overflow: hidden;
          &:focus {
            outline: none;
          }
        }

        .searchIcon {
          width: 10%;
          height: 2.5rem;
          margin-right: 0rem;
          border-radius: 0rem;
          font-size: 0.9rem;
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    align-items: center;
    justify-content: center;
    .searchcontainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.5rem;
        input {
          margin-left: 0rem;
          border: none;
          border-radius: 1rem;
          height: 2.5rem;
          padding-left: 1rem;
          width: 90%;
          font-size: 0.9rem;
          overflow: hidden;
          &:focus {
            outline: none;
          }
        }

        .searchIcon {
          width: 10%;
          height: 2.5rem;
          margin-right: 0rem;
          border-radius: 0rem;
          font-size: 1.1rem;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }
      }
    }
  }
`;
export default SearchFormHeader;
