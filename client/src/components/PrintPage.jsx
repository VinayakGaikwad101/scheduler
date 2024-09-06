import React from "react";
import { useReactToPrint } from "react-to-print";

const PrintPage = ({ componentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <button
      onClick={handlePrint}
      className="flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-12 text-3xl p-2 rounded-lg bg-red-900 text-white"
    >
      Print Page
    </button>
  );
};

export default PrintPage;
