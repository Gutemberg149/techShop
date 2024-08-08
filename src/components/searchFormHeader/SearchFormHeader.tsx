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
`;
export default SearchFormHeader;
