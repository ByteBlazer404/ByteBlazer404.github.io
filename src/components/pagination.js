import React from "react";

const pagination = ({ prev, next, onPrevius, onNext }) => {
  const handlePrevious = () => {
    onPrevius();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Anterior
            </button>
          </li>
        ) : (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Anterior
            </button>
          </li>
        )}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Siguiente
            </button>
          </li>
        ) : (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Anterior
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default pagination;
