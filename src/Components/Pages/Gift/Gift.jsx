import React, { useState, useEffect } from "react";
import { data } from "./giftItems"; 
import "./Gift.css"; 

const Gift = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 31;

  // Use data in natural order (id 1 → last)
  const orderedData = [...data];

  // MAIN CATEGORIES
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  // SUBCATEGORIES (no "All")
  const subcategories =
    selectedCategory === "All"
      ? []
      : [...new Set(
          data
            .filter((item) => item.category === selectedCategory)
            .map((item) => item.subcategory)
        )];

  // FILTERING LOGIC
  const filteredData = orderedData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSubcategory =
      selectedSubcategory === "" ||
      item.subcategory === selectedSubcategory;

    return matchesCategory && matchesSubcategory;
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setSelectedSubcategory(""); // reset subcategory when switching main category
  }, [selectedCategory]);

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="my-text text-3xl font-semibold text-center mb-10">
        GIFT THAT!
      </h2>

      {/* MAIN CATEGORIES */}
      <div className="flex flex-col items-center max-w-6xl mx-auto mb-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-[#FCE9FC] text-black"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SUBCATEGORIES */}
      {subcategories.length > 0 && (
        <div className="flex flex-col items-center max-w-5xl mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedSubcategory === sub
                    ? "bg-pink-100 text-black"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ITEMS GRID */}
      <div className="max-w-6xl mx-auto">
       <div className="columns-2 sm:columns-3 md:columns-4 gap-6 space-y-6">
        {visibleItems.map((item) => (
          <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="break-inside-avoid group block"
          >
          <img
          src={item.src}
          alt=""
          className="w-full max-h-[420px] object-contain rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-lg"/>
          </a>
        ))}
        </div>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full ${
              currentPage === 1
                ? "text-gray-400"
                : "hover:bg-pink-100 text-black"
            }`}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full ${
                currentPage === i + 1
                  ? "bg-pink-100 text-black font-semibold"
                  : "hover:bg-pink-50"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full ${
              currentPage === totalPages
                ? "text-gray-400"
                : "hover:bg-pink-100 text-black"
            }`}
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gift;


