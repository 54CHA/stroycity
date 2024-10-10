import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import productImage from "/public/product_image_temp.png"; // Placeholder image
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // To handle navigation

const FavsPopup = ({ isOpen, onClose }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const fetchFavorites = async () => {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("jwt="))
          ?.split("=")[1];

        if (!token) {
          setError("Token not found");
          setLoading(false);
          return;
        }

        try {
          const response = await axios.get("https://api.bigbolts.ru/buyer", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.data && response.data.favorites) {
            setFavoriteItems(response.data.favorites);
          } else {
            setFavoriteItems([]);
          }
          setLoading(false);
        } catch (error) {
          setError("Error fetching favorites.");
          setLoading(false);
        }
      };

      fetchFavorites();
    }
  }, [isOpen]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleRemoveFavorite = async (itemId) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];

    if (!token) {
      setError("Token not found");
      return;
    }

    try {
      await axios.delete(`https://api.bigbolts.ru/buyer/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { item_id: itemId },
      });

      setFavoriteItems(favoriteItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing favorite:", error);
      setError("Failed to remove favorite item.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end ">
      <div className="bg-white  w-full lg:w-4/12 h-full p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Избранное</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} className="text-[30px]" />
          </button>
        </div>

        {loading ? (
          <p>Loading favorites...</p>
        ) : error ? (
          <p className="text-black">{error}</p>
        ) : favoriteItems.length === 0 ? (
          <p>У вас пока нет избранных товаров.</p>
        ) : (
          <ul>
            {favoriteItems.map((item) => (
              <li
                key={item.id}
                className="mb-4 pb-2 cursor-pointer flex items-center border-b"
              >
                <img
                  src={item.image || productImage}
                  alt={item.name}
                  className="w-24 h-24 object-cover mr-4"
                  onClick={() => handleProductClick(item.id)}
                />
                <div className="flex-grow">
                  <Link
                    className="hover:text-orange-500"
                    to={`product/${item.id}/${encodeURIComponent(item.name)}`}
                  >
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                  </Link>
                  <p className="text-gray-500 text-sm">
                    {item.description || "Описание отсутствует."}
                  </p>
                  <p className="text-black font-semibold">{item.price} ₽</p>
                </div>
                <button
                  onClick={() => handleRemoveFavorite(item.id)}
                  className="ml-4 text-gray-500 hover:text-orange-500 transition-all"
                  title="Удалить из избранного"
                >
                  <FontAwesomeIcon icon={faTrash} className="text-xl" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FavsPopup;
