import productImage from "/public/product_image_temp.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status
  const navigate = useNavigate(); // Initialize useNavigate

  const apiUrl = "https://api.bigbolts.ru";

  // Get the token from cookies
  const getToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];
  };

  // useEffect to check if the product is already in favorites
  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const token = getToken();
        if (!token) return;

        const response = await axios.get(apiUrl + `/buyer`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Assuming response.data.favorites is an array of favorite products
        if (
          response.data.favorites &&
          response.data.favorites.some((favItem) => favItem.id === product.id)
        ) {
          setIsFavorite(true); // Set state to true if it's already in favorites
        }
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    checkIfFavorite();
  }, [product.id]); // Only run when the product ID changes

  // Function to add/remove from favorites based on current status
  const toggleFavorite = async () => {
    try {
      const token = getToken();
      if (!token) {
        navigate("/signin"); // Redirect to sign-in page if no token
        return;
      }

      if (isFavorite) {
        // Send DELETE request to remove from favorites
        const response = await axios.delete(apiUrl + `/buyer/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            item_id: product.id,
          },
        });
        if (response.status === 200) {
          console.log("Product removed from favorites");
        }
      } else {
        // Send POST request to add to favorites
        const response = await axios.post(
          apiUrl + "/buyer/favorites",
          {
            item_id: product.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              item_id: product.id,
            },
          }
        );
        if (response.status === 200) {
          console.log("Product added to favorites:", response.data);
        }
      }

      // Toggle the favorite state
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error toggling favorite status:", error);
    }
  };

  const addToCart = async () => {
    try {
      const token = getToken();
      if (!token) {
        navigate("/signin"); // Redirect to sign-in page if no token
        return;
      }

      const response = await axios.post(
        apiUrl + "/buyer/cart",
        {
          item_id: product.id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            item_id: product.id,
          },
        }
      );
      if (response.status === 200) {
        console.log("Product added to cart:", response.data);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="w-full max-w-[400px] mx-auto p-4 lg:p-6 bg-white relative rounded-md shadow-md">
      <img src={product.image || productImage} alt={product.name} />
      <button
        className="absolute top-10 right-10" // Positioning the heart icon
        onClick={toggleFavorite} // Call the function to toggle favorites
      >
        <FontAwesomeIcon
          icon={faHeart}
          color={isFavorite ? "orange" : "gray"} // Heart color based on favorite state
          className="size-8"
        />
      </button>
      <div className="text-[#363636] text-2xl lg:text-[25px] font-bold mb-4 mt-3 transition-all hover:text-[#ff8800]">
        <Link to={`product/${product.id}/${encodeURIComponent(product.name)}`}>
          {" "}
          {/* Updated to use product name in URL */} {/* Added hover effect */}
          {product.name}
          {/* <br />
          id: {product.id} */}
        </Link>
      </div>
      <div className="text-base lg:text-[25px] font-normal text-[#363636] leading-relaxed mb-4">
        {product.description}
      </div>
      <div className="flex items-center gap-2 text-[#ff8800] text-xl lg:text-[25px] font-bold mb-20 mt-5">
        <div>{product.price}₽</div>
        <div className="opacity-50">/1м²</div>
      </div>
      <div className="flex items-center justify-between flex-col xl:flex-row gap-4">
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
