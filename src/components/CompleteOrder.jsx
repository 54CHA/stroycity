import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupPoint: "",
    comment: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch cart items when the component loads
    const fetchCartItems = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("jwt="))
          ?.split("=")[1];

        const apiUrl = "https://api.bigbolts.ru";

        const response = await axios.get(apiUrl + "/buyer/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const items = response.data.items || [];
          setCartItems(items);

          // Calculate the total price
          const totalPrice = items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          setTotal(totalPrice);
        }
      } catch (error) {
        console.error("Error fetching cart items", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (itemId) => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];

      const apiUrl = "https://api.bigbolts.ru";

      // Send DELETE request to remove item from cart
      await axios.delete(`${apiUrl}/buyer/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          cart_item_id: itemId,
        },
      });

      // Update cart items after removal
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );

      // Recalculate the total price after removing the item
      const newTotal = cartItems
        .filter((item) => item.id !== itemId)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotal(newTotal);
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add submit logic here
  };

  return (
    <div className="flex justify-between w-[90%] mx-auto my-10 py-10">
      {/* Left section: Form */}
      <div className="w-[60%]">
        <h2 className="lg:text-5xl text-4xl font-bold mb-10">
          Оформление заявки
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2">Имя</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Номер телефона</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Выбрать пункт выдачи</label>
            <input
              type="text"
              name="pickupPoint"
              value={formData.pickupPoint}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Комментарий к заказу</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2"
              rows="5"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 text-lg mt-4"
          >
            Оформить заказ
          </button>
        </form>
      </div>

      {/* Right section: Cart Summary */}
      <div className="w-[35%] bg-white shadow-xl p-5">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-300" />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <span className="mx-2">{item.quantity}</span>
                </div>
                <p className="mt-2">{item.price}₽</p>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="ml-4 text-gray-500 hover:text-orange-500 transition-all text-[20px]"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Корзина пуста</p>
        )}
        <div className="text-lg font-bold mt-4">Сумма: {total}₽</div>
      </div>
    </div>
  );
};

export default CheckoutForm;
