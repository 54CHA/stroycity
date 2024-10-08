import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPopup = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">
                          {item.price} ₽ x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
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
