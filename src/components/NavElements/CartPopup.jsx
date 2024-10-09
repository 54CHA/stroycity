import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "toastr/build/toastr.min.css";
import toastr from "toastr";

const CartPopup = ({ isOpen, onClose, removeFromCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch cart items when the popup is opened
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

    if (isOpen) {
      fetchCartItems();
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-3/12 h-full p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Корзина</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} className="size-[30px]" />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p>Ваша корзина пуста.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-4 border-b pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={item.image || "/public/product_image_temp.png"} // Use placeholder if image is missing
                        alt={item.name}
                        className="w-16 h-16 object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">
                          {item.price} ₽ x {item.quantity}
                          <br />
                          id:{item.id}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)} // Updated to use the new function
                      className="text-red-500 hover:text-red-700"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-4">
              <p className="text-xl font-bold">Итого: {total} ₽</p>
              <button className="mt-4 w-full bg-[#ff8800] text-white py-2 px-4 rounded hover:bg-[#ff6a00] transition-colors">
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
