import { useNavigate } from "react-router-dom";
import { faStar, faTrash, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import productImage from "/public/product_image_temp.png"; // Placeholder image
import { Link } from "react-router-dom";

const User = () => {
  const apiUrl = "https://api.bigbolts.ru";
  const navigate = useNavigate();
  const orderStatus = ["Собран", "В пути", "Доставлен", "Отменен"];
  const [userInfo, setUserInfo] = useState(null);
  const [rating, setRating] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [error, setError] = useState(null);

  const fetchUserInfo = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];

      if (!token) {
        console.error("No JWT token found");
        navigate("/login");
        return;
      }

      const response = await axios.get(`${apiUrl}/buyer`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data);

      if (response.data && response.data.favorites) {
        setFavoriteItems(response.data.favorites);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
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
      await axios.delete(`${apiUrl}/buyer/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { item_id: itemId },
      });

      setFavoriteItems(favoriteItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing favorite:", error);
      setError("Failed to remove favorite item.");
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  function deleteToken() {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }

  return (
    <div className="bg-[#DFDFDF]">
      <div className="w-[87%] m-auto py-20 text-[25px]">
        {/* User Information Section */}
        <div className="w-full lg:w-[47%] h-[400px] bg-white p-6 flex flex-col justify-between">
          <div className="flex flex-col m-auto mn:m-0 mn:ml-5">
            <img
              src="/avatar.png"
              alt="Аватар"
              className="bg-[#DFDFDF] p-3 rounded-full size-[170px]"
            />
            <div className="flex w-full justify-between">
              <h1 className="font-bold m-auto mn:m-0">
                {userInfo ? userInfo.name : "Loading..."}
              </h1>
            </div>
          </div>
          <div className="flex flex-col mn:flex-row justify-between items-center px-4">
            <h1 className="text-[#6a6a6a] font-medium text-[20px] mn:text-[25px]">
              Почта:
              <br />
              <span className="text-black font-medium">
                {userInfo ? userInfo.email : " Loading..."}
              </span>
            </h1>
            <button
              className="underline text-[#6a6a6a] hover:text-[#ff8800] transition-all font-medium"
              onClick={deleteToken}
            >
              Выйти
            </button>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="flex-col lg:flex-row flex gap-10 lg:mt-10">
          <div className="w-full lg:w-[41%] bg-white p-6 flex flex-col justify-between mt-10 lg:mt-0">
            <h1 className="font-bold mb-4">Избранное</h1>
            {favoriteItems.length === 0 ? (
              <p>У вас пока нет избранных товаров.</p>
            ) : (
              <div className="flex space-x-4 overflow-x-auto">
                {favoriteItems.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[200px] flex-shrink-0 bg-white border p-4 flex flex-col items-center"
                  >
                    <Link
                      to={`/catalog/product/${item.id}/${encodeURIComponent(
                        item.name
                      )}`}
                    >
                      {" "}
                      <img
                        src={item.image || productImage}
                        alt={item.name}
                        className=" h-[150px] object-cover"
                      />
                    </Link>

                    <Link
                      className="hover:text-orange-500"
                      to={`/catalog/product/${item.id}/${encodeURIComponent(
                        item.name
                      )}`}
                    >
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                    </Link>
                    <p className="text-black font-semibold text-center">
                      {item.price} ₽
                    </p>
                    <button
                      onClick={() => handleRemoveFavorite(item.id)}
                      className="mt-2 text-gray-500 hover:text-orange-500 transition-all"
                      title="Удалить из избранного"
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-xl" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Orders History Section */}
          <div className="w-full lg:w-[41%] bg-white p-6 flex flex-col justify-between">
            <h1 className="font-bold mb-6">История заказов</h1>
            <div className="bg-[#DFDFDF] w-[180px] h-[180px] flex flex-col justify-between">
              <div className="text-[20px] flex gap-1 justify-end mr-2">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mt-[8px] size-4 text-[#ff8800]"
                />
                {orderStatus[0]}
              </div>
              <div className="flex justify-center mb-3 text-white">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStarClick(index)}
                    className={`focus:outline-none ${
                      index < rating ? "text-[#ff8800]" : "text-white"
                    }`}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
