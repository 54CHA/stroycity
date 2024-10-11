import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import productImage from "/public/product_image_temp.png";

const Sales = () => {
  const [saleItems, setSaleItems] = useState([]);
  const [quantities, setQuantities] = useState([]); // Array to track quantity for each item
  const [isFavorite, setIsFavorite] = useState([]); // Array to track favorite status for each item
  const navigate = useNavigate();

  const apiUrl = "https://api.bigbolts.ru";

  // Get the token from cookies
  const getToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];
  };

  // Fetch sale items on component mount
  useEffect(() => {
    const fetchSaleItems = async () => {
      try {
        const response = await axios.post(apiUrl + "/item"); // Make GET request to /item
        const itemsOnSale = response.data.filter(
          (item) => item.price_with_discount < item.price
        );
        setSaleItems(itemsOnSale);
        setQuantities(itemsOnSale.map(() => 1)); // Initialize quantity array with default value 1

        // Check if each sale item is already in the favorites
        const token = getToken();
        if (token) {
          const buyerResponse = await axios.get(apiUrl + `/buyer`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const favoriteItems = buyerResponse.data.favorites || [];
          setIsFavorite(
            itemsOnSale.map((item) =>
              favoriteItems.some((favItem) => favItem.id === item.id)
            )
          );
        }
      } catch (error) {
        console.error("Error fetching sale items:", error);
      }
    };

    fetchSaleItems();
  }, []);

  // Toggle favorite status for a given item
  const toggleFavorite = async (item, index) => {
    try {
      const token = getToken();
      if (!token) {
        navigate("/signin"); // Redirect to sign-in page if no token
        return;
      }

      const isItemFavorite = isFavorite[index];
      if (isItemFavorite) {
        // Remove from favorites
        await axios.delete(apiUrl + `/buyer/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            item_id: item.id,
          },
        });
      } else {
        // Add to favorites
        await axios.post(
          apiUrl + "/buyer/favorites",
          {
            item_id: item.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              item_id: item.id,
            },
          }
        );
      }

      // Update the isFavorite state
      setIsFavorite((prev) => prev.map((fav, i) => (i === index ? !fav : fav)));
    } catch (error) {
      console.error("Error toggling favorite status:", error);
    }
  };

  // Update quantity for a specific item
  const updateQuantity = (index, value) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) =>
        i === index ? Math.max(qty + value, 1) : qty
      )
    );
  };

  // Add item to cart
  const addToCart = async (item, index) => {
    try {
      const token = getToken();
      if (!token) {
        navigate("/signin"); // Redirect to sign-in page if no token
        return;
      }

      await axios.post(
        apiUrl + "/buyer/cart",
        {
          item_id: item.id,
          quantity: quantities[index], // Use the correct quantity for each item
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Product added to cart:", item.name);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <>
      <div className="bg-[#DFDFDF] pb-40">
        <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 pt-10 w-[87%] m-auto">
          ТОВАРЫ СО СКИДКОЙ
        </div>

        {/* Loop through saleItems to display each item */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {saleItems.map((item, index) => (
            <div
              key={item.id}
              className="p-6 bg-white shadow-md rounded-md flex flex-col justify-between relative"
            >
              {/* Image */}
              <img
                src={
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : productImage
                } // Added check for images
                alt={item.name}
                className="w-full h-64 object-cover mb-4" // Change h-64 to h-64 to make it square
                style={{ height: "auto", aspectRatio: "1 / 1" }} // Added style for square aspect ratio
              />

              {/* Favorite Button */}
              <button
                className="absolute top-10 right-10"
                onClick={() => toggleFavorite(item, index)}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  color={isFavorite[index] ? "orange" : "gray"} // Toggle favorite color
                  className="size-8"
                />
              </button>

              {/* Item Details */}
              <div className="text-[#363636] text-2xl font-bold mb-2 transition-all hover:text-[#ff8800]">
                <Link
                  to={`catalog/product/${item.id}/${encodeURIComponent(
                    item.name
                  )}`}
                >
                  {item.name}
                  {/* <br />
                  id: {item.id} */}
                </Link>
              </div>
              <div className="text-lg text-gray-500 mb-4">
                {item.description}
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 text-[#ff8800] text-xl font-bold mb-4">
                <div>{item.price_with_discount}₽</div>
                <div className="line-through text-gray-400">{item.price}₽</div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center border-2 border-[#dfdfdf] w-full max-w-[180px] justify-around transition-colors hover:bg-gray-100">
                  <button
                    className="text-[30px] mt-[-3px]"
                    onClick={() => updateQuantity(index, -1)} // Decrease quantity for this item
                  >
                    -
                  </button>
                  <div className="text-[#363636] text-[27px] mt-[-2px]">
                    {quantities[index]}{" "}
                    {/* Show the correct quantity for this item */}
                  </div>
                  <button
                    className="text-[30px] mt-[-3px]"
                    onClick={() => updateQuantity(index, 1)} // Increase quantity for this item
                  >
                    +
                  </button>
                </div>

                <button
                  className="w-full max-w-[180px] bg-[#ff8800] text-[#363636] text-[25px] font-normal py-1 self-center transition-colors hover:bg-[#ffb476]"
                  onClick={() => addToCart(item, index)} // Pass the correct index to add to cart
                >
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
