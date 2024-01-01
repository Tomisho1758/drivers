import React from "react";

function Paginado({ currentPage, totalPages, handlePage }) {
  console.log(currentPage, totalPages);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);


  return (
    <div className="paginado">
      <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage <= 1}>
        &lt; Previous
      </button>

      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => handlePage(pageNumber)}>
          {pageNumber}
        </button>
      ))}
<button
  onClick={() => currentPage < totalPages && handlePage(currentPage + 1)}
  disabled={currentPage >= totalPages}
>
  Next &gt;
</button>

    </div>
  );
}

export default Paginado;
