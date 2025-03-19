import React, { useState } from "react";
const files = [
  { image: "1.png", pdf: "1.pdf", text: "Tiếng Anh" },
  { image: "2.png", pdf: "2.pdf", text: "Tiếng Việt" },
  { image: "3.png", pdf: "3.pdf", text: "Tiếng Trung" },
];

export default function PdfViewer() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold  text-center">
        Ping Roun Group Catalog
      </h2>
      <ul className="rounded p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {files.map((file, index) => (
          <li
            key={index}
            className="cursor-pointer relative group flex flex-col justify-center items-center"
          >
            <div className=" w-10/12  font-medium text-center py-2 ">
              {file.text}
            </div>
            <img
              src={`./img/${file.image}`}
              alt={file.image}
              className="w-10/12 h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
              onClick={() => setSelectedPdf(`./pdf/${file.pdf}`)}
            />
          </li>
        ))}
      </ul>

      {/* Hiển thị PDF toàn màn hình */}

      {selectedPdf && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg"
            onClick={() => setSelectedPdf(null)}
          >
            ✖
          </button>
          <iframe
            src={selectedPdf}
            className="w-full h-full border rounded"
          ></iframe>
        </div>
      )}
    </div>
  );
}
