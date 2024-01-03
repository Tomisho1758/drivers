import React from "react";

function Paginado({ currentPage, totalPages, handlePage }) {
  
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i ++);


  return (
    <div className="paginado">
      <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage <= 0}>
        &lt; Previous
      </button>

      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => handlePage(pageNumber)}>
          {pageNumber+1}
        </button>
      ))}
<button
  onClick={() => currentPage +1 <= totalPages && handlePage(currentPage + 1)}
  disabled={currentPage >= totalPages}
>
  Next &gt;
</button>

    </div>
  );
}

export default Paginado;
