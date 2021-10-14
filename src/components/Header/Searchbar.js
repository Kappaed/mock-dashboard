import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    opacity: 0.3;
    font-size: 0.8rem;
  }
  @media (max-width: 900px) {
    display: ${(props) => (!props.mobile ? "none" : "block")};
    border-top: 1px solid var(--light-border-color);
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 20px 0 20px 40px;
  border: none;
  height: 100%;
`;

const Search = (props) => {
  return (
    <SearchWrapper mobile={props.mobile}>
      <SearchBar placeholder="Search for something..." />
      <FaSearch />
    </SearchWrapper>
  );
};

export default Search;
