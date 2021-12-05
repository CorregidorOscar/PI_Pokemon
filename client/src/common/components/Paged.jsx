import styled from "styled-components";

const PagedContainer = styled.div`
  /* height: 2.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`;
const PagedButton = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background-color: var(--colors-secondary);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Paged({ amountPerPage, total, paged }) {
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
        pageNumbers.map((num) => (
          <PagedButton key={num} onClick={() => paged(num)}>
            {/* <a onClick={() => paged(num)}>{num}</a> */}
            {num}
          </PagedButton>
        ))}
      {/* </ul>
    </nav> */}
    </PagedContainer>
  );
}
