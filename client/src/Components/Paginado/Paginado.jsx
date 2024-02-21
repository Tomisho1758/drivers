import React from "react";

function Paginado({ currentPage, totalPages, handlePage }) {
  
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i ++);


  return (
    <div className="paginado">
      <button className="buttonPag" onClick={() => handlePage(currentPage - 1)} disabled={currentPage <= 0}>
        &lt; Previous
      </button>

      {pageNumbers.map((pageNumber) => (
        <button className="buttonPag" key={pageNumber} onClick={() => handlePage(pageNumber)}>
          {pageNumber+1}
        </button>
      ))}
<button className="buttonPag"
  onClick={() => currentPage +1 <= totalPages && handlePage(currentPage + 1)}
  disabled={currentPage >= totalPages}
>
  Next &gt;
</button>

    </div>
  );
}

export default Paginado;
