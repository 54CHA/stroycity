import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Use navigate for redirecting

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];

    try {
      const response = await axios.post(
        "https://api.bigbolts.ru/item",
        {
          brands: 0,
          categories: 0,
          materials: 0,
          max_price: 0,
          min_price: 0,
          query: searchTerm, // Send the search term
          sellers: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Redirect to the catalog page with the search results passed as state
      navigate("/catalog", { state: { searchResults: response.data } });
      window.location.reload;
    } catch (error) {
      console.error("Error performing search:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-10/12 mn:w-8/12 lg:w-6/12 m-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Поиск товаров..."
        className="w-full h-[60px] pl-4 pr-20 rounded-md border border-[#cacaca] focus:outline-none focus:border-[#ff8800] transition-colors text-xl"
        autoFocus
      />
      <button
        type="submit"
        className="absolute right-12 top-1/2 transform -translate-y-1/2"
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-[#ff8800] hover:text-[#ff6a00] transition-colors text-2xl"
        />
      </button>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="text-[#cacaca] hover:text-[#ff8800] transition-colors text-2xl"
        />
      </button>
    </form>
  );
};

export default SearchBar;
