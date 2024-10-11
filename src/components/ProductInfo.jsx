import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import Reviews from "./Reviews";

const ProductInfo = () => {
  const { id } = useParams(); // Get the id from URL parameters
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Add state for quantity
  const [isFavorite, setIsFavorite] = useState(false); // State for favorite status
  const navigate = useNavigate(); // Initialize useNavigate for redirect

  const apiUrl = "https://api.bigbolts.ru";

  // Function to get the token from cookies
  const getToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];
  };

  useEffect(() => {
    // Fetch product data based on the id
    const fetchProduct = async () => {
      try {
        const token = getToken();
        if (!token) {
          navigate("/signin"); // Redirect to sign-in if no token
          return;
        }
        const response = await axios.get(apiUrl + `/item`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            id: id,
          },
        });
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Check if the product is in favorites
    const checkIfFavorite = async () => {
      try {
        const token = getToken();
        if (!token) return;

        const response = await axios.get(apiUrl + `/buyer`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const isFav = response.data.favorites.some(
          (favorite) => favorite.id === parseInt(id) // Check if the product is in the favorites list
        );
        setIsFavorite(isFav);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    fetchProduct();
    checkIfFavorite();
  }, [id, navigate]);

  // Function to add/remove product from favorites
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

  // Function to add product to cart
  const addToCart = async () => {
    try {
      const token = getToken();
      if (!token) {
        navigate("/signin"); // Redirect to sign-in if no token
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

  if (!product) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
    <div className="bg-[#DFDFDF] pb-[150px] overflow-x-hidden">
      <div className="relative w-[87%] m-auto">
        <div className="flex items-center text-[18px] pt-[4rem] mb-10">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-400 mx-1" />{" "}
          <span className="text-gray-400">Каталог товаров </span>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-400 mx-1" />{" "}
          {product.name}
        </div>

        <div className="flex flex-col 2xl:flex-row gap-5 items-center">
          <div className="flex flex-row 2xl:flex-col gap-3 2xl:gap-5 justify-center overflow-x-auto">
            <img
              src={product.image || "/WhiteBg.png"} // Use product image if available
              alt={product.name}
              className="w-[100px] h-[100px] mn:w-[150px] mn:h-[150px] lg:w-[170px] lg:h-[170px] object-cover"
            />
            <img
              src={product.image || "/WhiteBg.png"} // Use product image if available
              alt={product.name}
              className="w-[100px] h-[100px] mn:w-[150px] mn:h-[150px] lg:w-[170px] lg:h-[170px] object-cover"
            />
            <img
              src={product.image || "/WhiteBg.png"} // Use product image if available
              alt={product.name}
              className="w-[100px] h-[100px] mn:w-[150px] mn:h-[150px] lg:w-[170px] lg:h-[170px] object-cover"
            />
            <img
              src={product.image || "/WhiteBg.png"} // Use product image if available
              alt={product.name}
              className="w-[100px] h-[100px] mn:w-[150px] mn:h-[150px] lg:w-[170px] lg:h-[170px] object-cover"
            />
          </div>
          <img
            src={product.image || "/WhiteBg.png"} // Use product image if available
            alt={product.name}
            className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] mn:w-[600px] mn:h-[600px] object-cover"
          />

          <div className="flex flex-col text-center mn:text-left flex-wrap">
            <h className="text-[#363636] text-3xl sm:text-4xl lg:text-5xl font-bold lg:mb-10">
              {product.name} {/* Display product name */}
            </h>
            <div className="flex items-center gap-2 text-[#ff8800] text-xl lg:text-[35px] font-bold mb-5 md:mb-[60px] justify-center mn:justify-start">
              <div>{product.price}₽</div> {/* Display product price */}
              <div className="opacity-50">/1м²</div>
            </div>
            <div className="flex gap-5 justify-center flex-col-reverse mn:flex-row">
              <div className="flex justify-center">
                <div className="flex items-center border-2 border-[#ffffff] w-[180px] justify-around transition-colors hover:bg-gray-100">
                  <button
                    className="text-[30px] mt-[-3px]"
                    onClick={() => setQuantity(Math.max(quantity - 1, 1))} // Prevent going below 1
                  >
                    -
                  </button>
                  <div className="text-[#363636] text-[27px] mt-[-2px]">
                    {quantity}
                  </div>
                  <button
                    className="text-[30px] mt-[-3px]"
                    onClick={() => setQuantity(quantity + 1)} // Increment quantity
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="w-[180px] bg-[#ff8800] text-[#363636] text-[25px] font-normal py-1 self-center transition-colors hover:bg-[#ffb476]"
                onClick={addToCart} // Add to cart functionality
              >
                В корзину
              </button>
              <button onClick={toggleFavorite}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[33px] border-2 border-[#ffffff] p-1"
                  color={isFavorite ? "#ff8800" : "gray"} // Heart color based on favorite state
                />
              </button>
            </div>
            <h2 className="lg:text-[35px] font-normal text-[#363636] leading-9 w-[500px] mt-5">
              {product.description} {/* Display product description */}
            </h2>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default ProductInfo;
