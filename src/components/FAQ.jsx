import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQ = () => {
  return (
    <div className="bg-[#DFDFDF]">
      <div className=" relative w-[87%] m-auto ">
        <div className="flex items-center text-[18px] pt-[4rem] mb-10">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-400 mx-1"
          />{" "}
          Вопросы и ответы
        </div>
        <div className="flex flex-col ">
          <h className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 text-center">
            Ответы на часто-задаваемые вопросы
          </h>
          <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9 mb-[150px]">
            Нужен текст к каждому вопросу
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
