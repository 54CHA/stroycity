import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching for:", searchTerm);
    // Optionally close the search bar after submitting
    // onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-6/12 m-auto">
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
