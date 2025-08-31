import { useContext } from "react";
import { CartContext } from "../components/CartContext";

const TrashIcon = () => (
  <svg
    xmlns="http://www.w.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z"
      clipRule="evenodd"
    />
  </svg>
);
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);
const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);

// --- المكون الرئيسي لصفحة السلة ---
export default function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext)!;

  const handleQuantityChange = (orderId: string, amount: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.orderId === orderId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (orderId: string) => {
    setCartItems((items) => items.filter((item) => item.orderId !== orderId));
  };

  // --- حسابات السعر ---
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = 25;
  const total = subtotal + deliveryFee;

  // --- العرض في حالة السلة الفارغة ---
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8 pt-20">
        <h1 className="text-3xl font-bold text-gray-800 mt-6">
          سلة مشترياتك فارغة!
        </h1>
        <p className="text-gray-600 mt-2">
          يبدو أنك لم تقم بإضافة أي وجبات حتى الآن.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-[#C0392B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a13024] transition-colors"
        >
          اكتشف قائمة الطعام
        </button>
      </div>
    );
  }

  // --- العرض في حالة وجود منتجات ---
  return (
    <div
      dir="rtl"
      className="bg-gray-50 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
          سلة المشتريات
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* قائمة المنتجات */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.orderId}
                className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    الحجم: {item.selectedSize}
                    <br />
                    {item.selectedExtras.length > 0 &&
                      `  الإضافات: ${item.selectedExtras.join(", ")}`}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-3 border border-gray-200 rounded-full px-2 py-1">
                      <button
                        onClick={() => handleQuantityChange(item.orderId, 1)}
                        className="text-gray-600 hover:text-black"
                      >
                        <PlusIcon />
                      </button>
                      <span className="font-bold text-md w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.orderId, -1)}
                        className="text-gray-600 hover:text-black"
                      >
                        <MinusIcon />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-left flex flex-col items-end h-full justify-between">
                  <p className="font-extrabold text-sm text-[#C0392B]">
                    {item.price * item.quantity} EGP
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.orderId)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="حذف المنتج"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ملخص الطلب */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">ملخص الطلب</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>المجموع الفرعي</span>
                  <span className="font-semibold">
                    {subtotal.toFixed(2)} EGP
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>رسوم التوصيل</span>
                  <span className="font-semibold">
                    {deliveryFee.toFixed(2)} EGP
                  </span>
                </div>
                <div className="border-t pt-4 mt-4 flex justify-between font-bold text-xl text-gray-900">
                  <span>الإجمالي</span>
                  <span>{total.toFixed(2)} EGP</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-[#C0392B] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#a13024] transition-colors">
                إتمام الطلب
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
