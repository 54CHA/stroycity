import productImage from "/public/product_image_temp.png";
import { useState } from "react";
import axios from "axios";
// Import the heart icon (assuming you're using Font Awesome)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status

  const addToCart = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];

      const apiUrl = "https://api.bigbolts.ru";

      const response = await axios.post(
        apiUrl + "/cart/add",
        {
          item_id: product.id, // Assuming product has an id field
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
    <div className="w-full max-w-[400px] mx-auto p-4 lg:p-6 bg-white relative"> {/* Added relative positioning */}
      <img src={product.image || productImage} alt={product.name} />
      <button 
        className="absolute top-2 right-2" // Positioning the heart icon
        onClick={() => setIsFavorite(!isFavorite)} // Toggle favorite status
      >
        <FontAwesomeIcon icon={faHeart} color={isFavorite ? "red" : "gray"} /> {/* Change color based on favorite status */}
      </button>
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
