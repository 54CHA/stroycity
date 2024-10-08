import productImage from "/public/product_image_temp.png";
import { useState } from "react";
import axios from "axios";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];

      const response = await axios.post(
        "/cart/add",
        {
          productId: product.id, // Assuming product has an id field
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        // Handle successful addition to cart
        console.log("Product added to cart:", response.data);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="w-full max-w-[400px] mx-auto p-4 lg:p-6 bg-white">
      <img src={product.image || productImage} alt={product.name} />
      <div className="text-[#363636] text-2xl lg:text-[25px] font-bold mb-4 mt-3">
        {product.name}
      </div>
      <div className="text-base lg:text-[25px] font-normal text-[#363636] leading-relaxed mb-4">
        {product.description}
      </div>
      <div className="flex items-center gap-2 text-[#ff8800] text-xl lg:text-[25px] font-bold mb-20 mt-5">
        <div>{product.price}₽</div>
        <div className="opacity-50">/1м²</div>
      </div>
      <div className="flex items-center justify-between flex-row gap-4">
        <div className="flex items-center border-2 border-[#dfdfdf] w-full max-w-[180px] justify-around transition-colors hover:bg-gray-100">
          <button
            className="text-[30px] mt-[-3px]"
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
          >
            -
          </button>
          <div className="text-[#363636] text-[27px] mt-[-2px]">{quantity}</div>
          <button
            className="text-[30px] mt-[-3px]"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className="w-full max-w-[180px] bg-[#ff8800] text-[#363636] text-[25px] font-normal py-1 self-center transition-colors hover:bg-[#ffb476]"
          onClick={addToCart}
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
