import productImage from '/public/product_image_temp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


const Sales = () => {
    return ( <><div className="p-4 md:p-6 lg:p-8">
        <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Gilroy'] mb-4">
          ТОВАРЫ СО СКИДКОЙ
        </div>
        <div className="w-full max-w-[400px] mx-auto p-4 lg:p-6">
<img src={productImage} alt="product_image"/>
    <div className="text-[#363636] text-2xl lg:text-[25px] font-bold font-['Gilroy'] mb-4">
      Каталог товаров
    </div>
    <div className="text-base lg:text-[25px] font-normal text-[#363636] leading-relaxed mb-4">
      Lorem ipsum odor amet, consectetuer adipiscing elit.
      Litora tempus consequat interdum suscipit sodales
      condimentum auctor? Sit orci tempor cursus suspendi
    </div>
     <div className="flex items-center gap-2 text-[#ff8800] text-xl lg:text-[25px] font-bold mb-4">
      <div>000₽</div>
      <div className="opacity-50">/1м2</div>
    </div>
    <div className="flex items-center justify-between flex-row gap-4">
    <div className="flex items-center gap-2 mb-4 border-2 border-[#dfdfdf] p-2 w-full max-w-[180px] ">
      <div className="w-[25px] h-[25px] flex items-center justify-center bg-gray-200"></div>
      <div className="text-[#363636] text-xl lg:text-[25px] font-normal">1</div>
      <div className="w-[25px] h-[25px] flex items-center justify-center bg-gray-200"></div>
    </div>
    <button className="w-full max-w-[180px] bg-[#ff8800] text-[#363636] text-xl lg:text-[25px] font-normal py-2 self-center">
      В корзину
    </button>
    </div>
  </div>
</div>
      </> );
}
 
export default Sales;
