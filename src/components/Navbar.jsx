import { Link } from 'react-router-dom';
import logo from "/logo.png";

const Navbar = () => {
    return (
        <div className="w-[1920px] h-[100px] relative bg-white">
        <div className="left-[85px] top-[33px] absolute text-[#ff8800] text-[50px] font-bold font-['Bebas Neue']">Строй сити</div>
        <div className="left-[650px] top-[43px] absolute">
          <div className="left-0 top-0 absolute text-[#363636] text-xl font-medium font-['Gilroy']">Доставка и оплата</div>
          <div className="left-[229px] top-0 absolute text-[#363636] text-xl font-medium font-['Gilroy']">О компании</div>
          <div className="left-[392px] top-0 absolute text-[#363636] text-xl font-medium font-['Gilroy']">Стать продавцом</div>
        </div>
        <div className="w-[310px] h-[100px] left-[305px] top-0 absolute">
          <div className="w-[100px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-[#cacaca]"></div>
          <div className="w-[100px] h-[0px] left-[310px] top-0 absolute origin-top-left rotate-90 border border-[#cacaca]"></div>
          <div className="left-[75px] top-[41px] absolute text-[#ff8800] text-[25px] font-bold font-['Gilroy']">Каталог товаров</div>
          <div className="w-[30px] h-[30px] px-[5px] py-[7.50px] left-[35px] top-[35px] absolute justify-center items-center inline-flex" />
        </div>
        <div className="w-[1920px] h-[100px] left-0 top-0 absolute">
          <div className="w-[100px] h-[100px] left-[1520px] top-0 absolute">
            <div className="w-[100px] h-[0px] left-[100px] top-0 absolute origin-top-left rotate-90 border border-[#cacaca]"></div>
            <div className="w-[100px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-[#cacaca]"></div>
            <div className="w-[30px] h-[30px] pl-[2.32px] pr-[2.34px] pt-[2.32px] pb-[2.34px] left-[35px] top-[35px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[65px] h-[100px] left-[1655px] top-0 absolute">
            <div className="w-[30px] h-[30px] px-[2.50px] pt-[3.75px] pb-[3.31px] left-0 top-[35px] absolute justify-center items-center inline-flex" />
            <div className="w-[100px] h-[0px] left-[65px] top-0 absolute origin-top-left rotate-90 border border-[#cacaca]"></div>
            <div className="w-[15px] h-[15px] p-[5px] left-[15px] top-[48px] absolute bg-[#ff8800] rounded-[9px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-[10px] font-normal font-['Gilroy']">0</div>
            </div>
          </div>
          <div className="w-[30px] h-[30px] px-[5.16px] pt-[5.16px] pb-[3.28px] left-[1855px] top-[35px] absolute justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch relative">
            </div>
          </div>
          <div className="w-[1920px] h-[100px] left-0 top-0 absolute">
            <div className="w-[1920px] h-[0px] left-0 top-[100px] absolute border border-[#cacaca]"></div>
            <div className="w-[100px] h-[0px] left-[1820px] top-0 absolute origin-top-left rotate-90 border border-[#cacaca]"></div>
            <div className="w-[30px] h-[30px] pl-[1.25px] pr-[3.75px] py-[2.50px] left-[1755px] top-[35px] absolute justify-center items-center inline-flex" />
            <div className="w-[15px] h-[15px] p-[5px] left-[1770px] top-[48px] absolute bg-[#ff8800] rounded-[9px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-[10px] font-normal font-['Gilroy']">0</div>
            </div>
          </div>
        </div>
        <div className="w-[45px] h-[45px] left-[35px] top-[28px] absolute" />
      </div>
    );
}
export default Navbar;


