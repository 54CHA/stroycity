import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductInfo = () => {
  const { id, name } = useParams(); // Get the id and name from URL parameters
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Add state for quantity

  const apiUrl = "https://api.bigbolts.ru";
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
        if (!token) return;
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

    fetchProduct();
  }, [id]); // Only refetch when id changes

  if (!product) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
    <div className="bg-[#DFDFDF] pb-[150px]">
      <div className=" relative w-[87%] m-auto ">
        <div className="flex items-center text-[18px] pt-[4rem] mb-10">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-400 mx-1"
          />{" "}
          <span className="text-gray-400">Каталог товаров </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-400 mx-1"
          />{" "}
          {product.name}
        </div>
        <div className="flex justify-between">
          <img
            src={product.image || "/WhiteBg.png"} // Use product image if available
            alt={product.name}
            className="w-[50%] h-[50%] object-cover"
          />

          <div className="flex flex-col w-full">
            <h className="text-[#363636] text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
              {product.name} {/* Display product name */}
            </h>
            <div className="flex items-center gap-2 text-[#ff8800] text-xl lg:text-[35px] font-bold mb-[60px]">
              <div>{product.price}₽</div> {/* Display product price */}
              <div className="opacity-50">/1м²</div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center border-2 border-[#ffffff] w-full max-w-[180px] justify-around transition-colors hover:bg-gray-100">
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
              <button className="w-full max-w-[180px] bg-[#ff8800] text-[#363636] text-[25px] font-normal py-1 self-center transition-colors hover:bg-[#ffb476]">
                В корзину
              </button>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-[#ff8800] text-[33px] border-2 border-[#ffffff] p-1"
              />
            </div>
            <h2 className="lg:text-[35px] font-normal text-[#363636] leading-9 w-[500px] mt-5">
              {product.description} {/* Display product description */}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
