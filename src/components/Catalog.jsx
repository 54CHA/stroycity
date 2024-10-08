import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Catalog = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // New state for current page
  const itemsPerPage = 16; // Number of items per page

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
      const response = await axios.post(
        "https://api.bigbolts.ru/item",
        {},
        {
          // Changed to POST
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Calculate the items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to go to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <div className="bg-[#DFDFDF] pb-40 ">
        <div className="w-[87%] m-auto">
          <div className="flex items-center text-[18px] pt-[4rem]">
            <span className="text-gray-400">Главная </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-gray-400 mx-1"
            />{" "}
            Каталог товаров
          </div>
          <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 pt-10 ">
            Каталог
          </div>
          <div className="flex gap-5 mb-10 ">
            <select className="p-1 flex shadow-md">
              <option value="">Бренд</option>
              {/* Add options for brands */}
            </select>

            <select className="p-1 flex shadow-md">
              <option value="">Доступность</option>
              <option value="in-stock">В наличии</option>
              <option value="out-of-stock">Нет в наличии</option>
            </select>

            <select className="p-1 flex shadow-md">
              <option value="">Продавец</option>
              {/* Add options for sellers */}
            </select>

            <select className="p-1 flex shadow-md">
              <option value="">Материал</option>
              {/* Add options for materials */}
            </select>

            <select className="p-1 flex shadow-md">
              <option value="">Цена, Р</option>
              <option value="0-1000">{">"} 1000 Р</option>
              <option value="1000-5000">{">"} 5000 Р</option>
              <option value="5000-10000">{">"} 10000 Р</option>
              {/* Add more price options */}
            </select>
          </div>
          {loading && <p>Loading items...</p>}
          {error && <p>Error: {error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map(
              (
                item // Use currentItems for display
              ) => (
                <ProductCard key={item.id} product={item} />
              )
            )}
          </div>
          {/* Pagination Controls */}
          <div className="flex mt-20">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-[18px] py-1 rounded-full text-[20px] ${
                  currentPage === index + 1
                    ? "bg-[#ff8800] text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            {/* Next Page Button */}
            <button
              onClick={handleNextPage}
              className={`mx-1 px-3 py-1 rounded text-[25px] ${
                currentPage < totalPages ? " text-[#ff8800]" : "opacity-30"
              }`}
              disabled={currentPage >= totalPages} // Disable if on the last page
            >
              Следующая страница
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
