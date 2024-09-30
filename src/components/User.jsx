import { Link, useNavigate } from "react-router-dom";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const User = () => {
  const user = {
    name: "Имя",
    phone: "999 999-99-99",
    avatar: "/avatar.png",
  };

  const orderStatus = ["Собран", "В пути", "Доставлен", "Отменен"];

  const navigate = useNavigate();

  function deleteToken() {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }

  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="bg-[#DFDFDF] ">
      <div className="w-[87%] m-auto py-20 text-[25px]">
        <div className="w-[47%] h-[400px] bg-white p-6 flex flex-col justify-between">
          <div className="flex">
            <img
              src={user.avatar}
              alt="Аватар"
              className="bg-[#DFDFDF] p-3 rounded-full"
            />
            <div className="flex w-full justify-between">
              <h1 className="font-bold">{user.name}</h1>
              <FontAwesomeIcon icon={faBell} className="text-[#ff8800] mt-2" />
            </div>
          </div>
          <div className="flex justify-between items-center px-4">
            <h1 className="text-[#6a6a6a] font-medium">
              Телефон
              <h className="text-black font-medium">+7 {user.phone}</h>
            </h1>
            <button
              className="underline text-[#6a6a6a] hover:text-[#ff8800] transition-all font-medium"
              onClick={deleteToken}
            >
              Выйти
            </button>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-[41%] h-[300px] bg-white p-6 flex flex-col justify-between mt-10">
            <div className="flex">
              <h1 className="font-bold">Избранное</h1>
            </div>
          </div>
          <div className="w-[41%] h-[300px] bg-white p-6 flex flex-col justify-between mt-10">
            <div className="flex">
              <h1 className="font-bold">История заказов</h1>
            </div>
            <div className="bg-[#DFDFDF] w-[180px] h-[180px] flex flex-col justify-between">
              <div className="text-[20px] flex gap-1 justify-end mr-2">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[#ff8800] mt-[10px] size-3"
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
