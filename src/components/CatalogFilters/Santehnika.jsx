import ProductCard from "../ProductCard";
import { Link, useLocation } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Santehnika = () => {
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
            <span className="text-gray-400">Каталог товаров </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-gray-400 mx-1"
            />
            Сантехника
          </div>
          <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 pt-10 ">
            Сантехника
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
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Santehnika;
