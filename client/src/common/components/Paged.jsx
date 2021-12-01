export default function Paged({ amountPerPage, total, paged }) {
  const pageNumbers = [];
  //   console.log("paged", total);
  for (let i = 1; i <= Math.ceil(total / amountPerPage); i++) {
    pageNumbers.push(i);
  }
  //   console.log("paged", pageNumbers);
  return (
    <div>
      {/* <nav>
      <ul> */}
      {pageNumbers &&
        pageNumbers.map((num) => (
          <button key={num} onClick={() => paged(num)}>
            {/* <a onClick={() => paged(num)}>{num}</a> */}
            {num}
          </button>
        ))}
      {/* </ul>
    </nav> */}
    </div>
  );
}
