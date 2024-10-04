import productImage from "/public/product_image_temp.png";
import { useState } from "react"; // Add this import

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1); // Add state for quantity

  return (
    <div className="w-full max-w-[400px] mx-auto p-4 lg:p-6 bg-white">
      <img src={productImage} alt="product_image" />
      <div className="text-[#363636] text-2xl lg:text-[25px] font-bold mb-4 mt-3">
        Каталог товаров
      </div>
      <div className="text-base lg:text-[25px] font-normal text-[#363636] leading-relaxed mb-4">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Litora tempus
        consequat interdum suscipit sodales condimentum auctor? Sit orci tempor
        cursus suspendi
      </div>
      <div className="flex items-center gap-2 text-[#ff8800] text-xl lg:text-[25px] font-bold mb-20 mt-5">
        <div>000₽</div>
        <div className="opacity-50">/1м²</div>
      </div>
      <div className="flex items-center justify-between flex-row gap-4">
        <div className="flex items-center border-2 border-[#dfdfdf] w-full max-w-[180px] justify-around transition-colors hover:bg-gray-100">
          <button
            className="text-[30px] mt-[-3px]"
            onClick={() => setQuantity(Math.max(quantity - 1, 1))} // Prevent going below 0
          >
            -
          </button>
          <div className="text-[#363636] text-[27px] mt-[-2px]">{quantity}</div>{" "}
          {/* Update to use quantity */}
          <button
            className="text-[30px] mt-[-3px]"
            onClick={() => setQuantity(quantity + 1)} // Increment quantity
          >
            +
          </button>
        </div>

        <button className="w-full max-w-[180px] bg-[#ff8800] text-[#363636] text-[25px] font-normal py-1 self-center transition-colors hover:bg-[#ffb476]">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
