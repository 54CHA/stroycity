import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Catalog = () => {
  const [items, setItems] = useState([]);
  const [brands, setBrands] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sellers, setSellers] = useState([]);

  const location = useLocation();
  const selectedCategoryFromLink = location.state?.selectedCategory || null;
  const searchResults = location.state?.searchResults || null; // Get search results from state

  // Fetch all necessary data on component mount if no search results are provided
  useEffect(() => {
    if (!searchResults) {
      const fetchData = async () => {
        const token = localStorage.getItem("token");

        try {
          const [brandsResponse, materialsResponse, categoriesResponse] =
            await Promise.all([
              axios.get("https://api.bigbolts.ru/brand", {
                headers: { Authorization: `Bearer ${token}` },
              }),
              axios.get("https://api.bigbolts.ru/material", {
                headers: { Authorization: `Bearer ${token}` },
              }),
              axios.get("https://api.bigbolts.ru/category", {
                headers: { Authorization: `Bearer ${token}` },
              }),
            ]);

          setBrands(brandsResponse.data);
          setMaterials(materialsResponse.data);
          setCategories(categoriesResponse.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setItems(searchResults); // Use search results if they are provided
      setLoading(false);
    }
  }, [searchResults]);

  // Fetch items when filters or selected category change, but not when there are search results
  useEffect(() => {
    if (!searchResults) {
      const fetchFilteredItems = async () => {
        const token = localStorage.getItem("token");
        const payload = {
          brands: selectedBrand ? [parseInt(selectedBrand)] : 0,
          categories: selectedCategoryFromLink
            ? [parseInt(selectedCategoryFromLink)]
            : selectedCategory
            ? [parseInt(selectedCategory)]
            : 0,
          materials: selectedMaterial ? [parseInt(selectedMaterial)] : 0,
          min_price: minPrice,
          max_price: maxPrice,
          sellers: sellers.length > 0 ? sellers : 0,
        };

        try {
          const response = await axios.post(
            "https://api.bigbolts.ru/item",
            payload,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setItems(response.data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchFilteredItems();
    }
  }, [
    selectedBrand,
    selectedCategory,
    selectedMaterial,
    selectedCategoryFromLink,
    searchResults, // Dependency to prevent data fetch when search results exist
  ]);

  // Handle changes in filters
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <div className="bg-[#DFDFDF] pb-40">
        <div className="w-[87%] m-auto">
          <div className="flex items-center text-[18px] pt-[4rem]">
            <span className="text-gray-400">Главная </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-gray-400 mx-1"
            />
            {!selectedCategoryFromLink && <h>Каталог товаров</h>}
            {selectedCategoryFromLink == 9 && <h>Материалы</h>}
            {selectedCategoryFromLink == 10 && <h>Инструменты</h>}
            {selectedCategoryFromLink == 11 && <h>Сантехника</h>}
            {selectedCategoryFromLink == 12 && <h>Электрооборудование</h>}
          </div>
          <div className="text-[#363636] text-5xl lg:text-6xl font-bold mb-10 pt-10">
            {!selectedCategoryFromLink && <h>Каталог</h>}
            {selectedCategoryFromLink == 9 && <h>Материалы</h>}
            {selectedCategoryFromLink == 10 && <h>Инструменты</h>}
            {selectedCategoryFromLink == 11 && <h>Сантехника</h>}
            {selectedCategoryFromLink == 12 && <h>Электрооборудование</h>}
          </div>

          <div className="flex gap-5 mb-10 whitespace-norma flex-wrap">
            <select
              name="brand"
              className="p-1 flex shadow-md l"
              onChange={handleBrandChange}
            >
              <option value="">Бренд</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>

            {!selectedCategoryFromLink && (
              <select
                name="category"
                className="p-1 flex shadow-md"
                onChange={handleCategoryChange}
              >
                <option value="">Категория</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}

            <select
              name="material"
              className="p-1 flex shadow-md"
              onChange={handleMaterialChange}
            >
              <option value="">Материал</option>
              {materials.map((material) => (
                <option key={material.id} value={material.id}>
                  {material.name}
                </option>
              ))}
            </select>
          </div>

          {loading && <p>Loading items...</p>}
          {error && <p>Error: {error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 4xl:grid-cols-5 gap-6">
            {currentItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
          <div className="flex mt-20 justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-[5px] px-[15px] sm:px-[17px] rounded-full text-[30px] sm:text-[20px] ${
                  currentPage === index + 1
                    ? "bg-[#ff8800] text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className={`mx-1 px-3 py-1 text-[25px] flex items-center gap-1 ${
                currentPage < totalPages ? " text-[#ff8800]" : "opacity-30"
              }`}
              disabled={currentPage >= totalPages}
            >
              <span className="hidden sm:flex">Следующая страница </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="translate-y-[2px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
