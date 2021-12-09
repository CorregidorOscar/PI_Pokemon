import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Paged({ amountPerPage, total, paged, currentPage }) {
  const inputs = useSelector((store) => store.inputs);
  const pageNumbers = [];
  //   console.log("paged", total);
  for (let i = 1; i <= Math.ceil(total / amountPerPage); i++) {
    pageNumbers.push(i);
  }
  //   console.log("paged", pageNumbers);
  return (
    <PagedContainer>
      {/* <nav>
      <ul> */}
      {pageNumbers &&
        !inputs.search &&
        pageNumbers.map((num) => (
          <PagedButton
            key={num}
            onClick={() => paged(num)}
            className={currentPage === num ? "current" : "notCurrent"}
          >
            {/* <a onClick={() => paged(num)}>{num}</a> */}
            {num}
          </PagedButton>
        ))}
      {/* </ul>
    </nav> */}
    </PagedContainer>
  );
}
const PagedContainer = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  padding: 0.5rem 0;
`;
const PagedButton = styled.div`
  height: 1.75rem;
  width: 1.75rem;
  background-color: var(--colors-secondary);
  color: var(--colors-primary);
  font-size: 1rem;
  /* background-color: var(--colors-secondary); */
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.current {
    background-color: var(--colors-primary);
    color: var(--colors-secondary);
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
