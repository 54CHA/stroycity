import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[100px] bg-white flex items-center justify-between border border-[#cacaca] ">
        {" "}
        {/* Added border here */}
        <div className="flex items-center gap-3">
          {" "}
          {/* Added border here */}
          <div className="w-[45px] h-[45px] bg-gray-400"></div>
          <div className="text-[#ff8800] text-[30px] sm:text-[40px] md:text-[50px] font-bold border-r border-[#cacaca] h-[100px] flex items-center">
            Строй сити
          </div>
        </div>
        <div className="text-[#ff8800] text-[18px] sm:text-[25px] font-bold border-r border-[#cacaca] h-full flex items-center">
          Каталог товаров
        </div>
        <div className="hidden lg:flex space-x-8">
          <a className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300">
            Доставка и оплата
          </a>
          <a className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300">
            О компании
          </a>
          <a className="text-[#363636] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#ff8800] transition duration-300">
            Стать продавцом
          </a>
        </div>
        <div className="flex items-center justify-center">
          {/* Centered icons */} {/* Added border here */}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
          />
          <FontAwesomeIcon
            icon={faUser}
            className="size-[20px] border-l border-[#cacaca] h-[100px] px-10 hover:text-[#ff8800] transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
