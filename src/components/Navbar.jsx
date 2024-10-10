import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser as faUserRegular,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./NavElements/SearchBar";
import FavsPopup from "./NavElements/FavsPopup";
import CartPopup from "./NavElements/CartPopup";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isFavsPopupOpen, setIsFavsPopupOpen] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]); // This should be managed by a global state or fetched from an API
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // This should be managed by a global state or fetched from an API

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate("/catalog", { state: { selectedCategory: categoryId } });
  };

  useEffect(() => {
    // Load Tawk.to chat widget
    const loadTawkTo = () => {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/66edd5d3e5982d6c7bb1e780/1i88gmgs6";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.head.appendChild(s1);
    };

    loadTawkTo();

    // Cleanup function to remove the script when component unmounts
    return () => {
      const tawkScript = document.querySelector(
        'script[src^="https://embed.tawk.to"]'
      );
      if (tawkScript) {
        tawkScript.remove();
      }
    };
  }, []);

  return (
    <div>
      {" "}
      <nav className="mn:hidden bg-white shadow-lg relative">
        <div className="flex justify-between items-center p-4">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="w-[40px]" />
          </Link>
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faBars}
              className="hover:text-[#ff8800] transition-all text-2xl"
            />
          </button>
        </div>

        {/* Menu Items (will be hidden by default on mobile, toggle with isMenuOpen) */}
        {isMenuOpen && (
          <div className="bg-white p-4 flex flex-col space-y-4">
            <Link
              to="/catalog"
              className="text-lg font-semibold hover:text-[#ff8800] transition-all"
            >
              Каталог товаров
            </Link>
            <Link
              to="/DeliveryAndPayment"
              className="text-lg font-semibold hover:text-[#ff8800] transition-all"
            >
              Доставка и оплата
            </Link>
            <Link
              to="/About"
              className="text-lg font-semibold hover:text-[#ff8800] transition-all"
            >
              О компании
            </Link>
            <Link
              to="/FAQ"
              className="text-lg font-semibold hover:text-[#ff8800] transition-all"
            >
              FAQ
            </Link>
          </div>
        )}

        {/* Icon section */}
        <div className="flex justify-around items-center py-2 border-t">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="hover:text-[#ff8800] transition-all text-xl"
          />
          <div className="relative">
            <FontAwesomeIcon
              icon={faHeart}
              className="hover:text-[#ff8800] transition-all text-xl"
              onClick={() => setIsFavsPopupOpen(true)}
            />
            {/* <div className="w-4 h-4 rounded-full bg-[#FF8900] absolute top-0 right-0 text-xs text-white flex items-center justify-center">
              {favoriteItems.length}
            </div> */}
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="hover:text-[#ff8800] transition-all text-xl"
              onClick={() => setIsCartPopupOpen(true)}
            />
            {/* <div className="w-4 h-4 rounded-full bg-[#FF8900] absolute top-0 right-0 text-xs text-white flex items-center justify-center">
              {cartItems.length}
            </div> */}
          </div>
          <Link to="/user">
            <FontAwesomeIcon
              icon={faUserRegular}
              className="hover:text-[#ff8800] transition-all text-xl"
            />
          </Link>
        </div>

        {/* Favorite and Cart Popups */}
        <FavsPopup
          isOpen={isFavsPopupOpen}
          onClose={() => setIsFavsPopupOpen(false)}
          favoriteItems={favoriteItems}
        />
        <CartPopup
          isOpen={isCartPopupOpen}
          onClose={() => setIsCartPopupOpen(false)}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </nav>
      <nav className="hidden mn:block">
        <div className="w-full h-[100px] bg-white flex items-center justify-between border border-[#cacaca] relative whitespace-nowrap">
          {!isSearchBarOpen && (
            <div className="w-full h-[100px] bg-white flex items-center justify-between border border-[#cacaca]">
              <div className="flex">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center gap-3">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="w-[50px] ml-10 sm:mx-5 xs:mr-10 lg:mr-0"
                    />
                    <div
                      className="text-[#ff8800] border-[#cacaca] h-[100px]  items-center mr-10 font-bold hidden 
                  lg:flex lg:text-[30px] 
                  xl:text-[30px] 
                  2xl:text-[50px] "
                    >
                      СТРОЙ СИТИ
                    </div>
                  </Link>
                </div>
                <div className="flex items-center border-l border-r border-[#cacaca] h-full align-">
                  <div
                    className=" cursor-pointer items-center flex"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <FontAwesomeIcon
                      icon={faBars}
                      className="size-[20px] h-[100px] pl-10 text-[#ff8800] transition duration-300"
                    />
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute top-[100px] bg-white border ml-[-20px] border-[#cacaca] z-10 text-[14px] sm:text-[20px] p-8">
                      <Link
                        to="/catalog"
                        className="block py-2 hover:text-[#ff8800] pb-4"
                      >
                        Весь Каталог
                      </Link>
                      <h
                        onClick={() => handleCategoryClick("9")}
                        to="/catalog/materials"
                        className="block py-2 hover:text-[#ff8800] pb-4"
                      >
                        Материалы
                      </h>
                      <h
                        onClick={() => handleCategoryClick("10")}
                        to="/catalog/tools"
                        className="block py-2 hover:text-[#ff8800] pb-4"
                      >
                        Инструменты
                      </h>
                      <h
                        onClick={() => handleCategoryClick("11")}
                        to="/catalog/plumbing"
                        className="block py-2 hover:text-[#ff8800] pb-4"
                      >
                        Сантехника
                      </h>
                      <h
                        onClick={() => handleCategoryClick("12")}
                        to="/catalog/power_tools"
                        className="block py-2 hover:text-[#ff8800] pb-4"
                      >
                        Электрооборудование
                      </h>
                    </div>
                  )}
                  <div className="text-[#ff8800] text-[18px] sm:text-[25px] font-bold pr-10 pl-5 h-full flex items-center">
                    Каталог товаров
                  </div>
                </div>

                <div className="hidden 2xl:flex items-center space-x-8 ml-10 ">
                  <Link
                    to="/DeliveryAndPayment"
                    className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-lg font-medium hover:text-[#ff8800] transition duration-300"
                  >
                    Доставка и оплата
                  </Link>
                  <Link
                    to="/About"
                    className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-lg font-medium hover:text-[#ff8800] transition duration-300"
                  >
                    О компании
                  </Link>
                  <Link
                    to="/FAQ"
                    className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-lg font-medium hover:text-[#ff8800] transition duration-300"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300 cursor-pointer"
                    onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
                  />
                  {isSearchBarOpen && (
                    <div className="absolute top-full right-0 w-[300px] bg-white border border-[#cacaca] p-4 z-10">
                      <SearchBar onClose={() => setIsSearchBarOpen(false)} />
                    </div>
                  )}
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300 cursor-pointer"
                    onClick={() => setIsFavsPopupOpen(true)}
                  />
                  <div className="w-4 h-4 rounded-full bg-[#FF8900] absolute top-12 left-[52px]"></div>
                  <div className="text-[13px] absolute top-[46px] left-[56.5px]">
                    {favoriteItems.length}
                  </div>
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300 cursor-pointer"
                    onClick={() => setIsCartPopupOpen(true)}
                  />
                  <div className="w-4 h-4 rounded-full bg-[#FF8900] absolute top-12 left-[52px]"></div>
                  <div className="text-[13px] absolute top-[46px] left-[56.5px]">
                    {cartItems.length}
                  </div>
                </div>
                <Link to="/user">
                  <FontAwesomeIcon
                    icon={faUserRegular}
                    className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
                  />
                </Link>
              </div>
            </div>
          )}
          {isSearchBarOpen && (
            <div className="absolute top-0 left-0 w-full h-[180%] bg-white z-20 flex items-center px-4 shadow-lg">
              <SearchBar onClose={() => setIsSearchBarOpen(false)} />
            </div>
          )}
        </div>
        <FavsPopup
          isOpen={isFavsPopupOpen}
          onClose={() => setIsFavsPopupOpen(false)}
          favoriteItems={favoriteItems}
        />
        <CartPopup
          isOpen={isCartPopupOpen}
          onClose={() => setIsCartPopupOpen(false)}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </nav>
    </div>
  );
};

export default Navbar;
