import React from "react";
import { useReactToPrint } from "react-to-print";

const PrintPage = ({ componentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: landscape;
        margin: 10mm;
      }
      @media print {
        html, body {
          height: 100%;
          margin: 0 !important;
          padding: 0 !important;
          overflow: visible !important;
        }
        .print-container {
          width: 100% !important;
          height: auto !important;
          overflow: visible !important;
          page-break-inside: avoid;
        }
        .print-table {
          width: 100% !important;
          table-layout: fixed;
          font-size: 8pt !important;
        }
        .print-table th,
        .print-table td {
          padding: 4px !important;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .no-print {
          display: none !important;
        }
      }
    `,
  });

  return (
    <button
      onClick={handlePrint}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Print Timetable
    </button>
  );
};

export default PrintPage;
