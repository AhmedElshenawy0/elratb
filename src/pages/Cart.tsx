import React, {
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { CartContext, type CartItem } from "../components/CartContext"; // تأكد من أن هذا المسار صحيح
import toast from "react-hot-toast";

// --- 1. تعريف الأنواع (Types) ---
interface WhatsappPopupProps {
  cartItems: CartItem[];
  subtotal: number;
  total: number;
  onClose: () => void;
  onConfirm: () => void;
}

// --- 2. مكونات الأيقونات (Icons) ---
const Icon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);
const TrashIcon = () => (
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
  </Icon>
);
const PlusIcon = () => (
  <Icon>
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
  </Icon>
);
const MinusIcon = () => (
  <Icon>
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
  </Icon>
);
const WhatsappIcon = () => (
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 ml-2"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413c-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.654 4.507 1.926 6.312l-1.057 3.875 3.98-1.048z" />
    </svg>
  </Icon>
);

// --- 3. مكون النافذة المنبثقة (Popup) ---
function WhatsappPopup({
  cartItems,
  subtotal,
  total,
  onClose,
  onConfirm,
}: WhatsappPopupProps) {
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOrder = useCallback(() => {
    if (customerName.trim().length < 2) {
      toast.error("الرجاء إدخال اسم صحيح.");
      return;
    }
    if (phoneNumber.trim().length < 10) {
      toast.error("الرجاء إدخال رقم هاتف صحيح.");

      return;
    }

    const now = new Date();
    // تنسيق التاريخ والوقت باللغة العربية لمصر
    const formattedDate = now.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Africa/Cairo",
    });
    const formattedTime = now.toLocaleTimeString("ar-EG", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Africa/Cairo",
    });

    let message = `*🛎️ طلب جديد من الراتب الشامي 🛎️*\n`;
    message += `*التاريخ:* ${formattedDate}\n`;
    message += `*الوقت:* ${formattedTime}\n\n`;
    // --- نهاية التعديل ---

    message += "-----------------------------------\n*تفاصيل الطلب:*\n\n";

    cartItems.forEach((item) => {
      message += `*${item.quantity}x ${item.title}*\n`;
      message += `   - الحجم: ${item.selectedSize}\n`;
      if (item.selectedExtras.length > 0)
        message += `   - إضافات: ${item.selectedExtras.join("، ")}\n`;
      message += `   - *السعر:* ${item.price * item.quantity} ج.م\n\n`;
    });

    message += "-----------------------------------\n*ملخص الفاتورة:*\n";
    message += `   - المجموع الفرعي: ${subtotal.toFixed(2)} ج.م\n`;
    message += `   - رسوم التوصيل: ${(total - subtotal).toFixed(2)} ج.م\n`;
    message += `   - *💰 الإجمالي النهائي: ${total.toFixed(2)} ج.م*\n\n`;
    message += "-----------------------------------\n*📱 معلومات العميل:*\n";
    message += `*الاسم:* ${customerName}\n`;
    message += `*رقم الهاتف:* ${phoneNumber}`;

    const restaurantWhatsappNumber = "201500220250"; // <-- ضع رقم واتساب الخاص بالمحل هنا
    const whatsappUrl = `https://wa.me/${restaurantWhatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    onConfirm();
  }, [customerName, phoneNumber, cartItems, subtotal, total, onConfirm]);

  return (
    <div
      dir="rtl"
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm mx-auto p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          تأكيد الطلب
        </h2>
        <p className="text-center text-gray-500">
          سيتم إرسال تفاصيل طلبك مباشرة إلى واتساب المحل.
        </p>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            الاسم بالكامل
          </label>
          <input
            type="text"
            id="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="مثال: أحمد محمد"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="مثال: 01xxxxxxxxx"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
          />
        </div>

        <button
          onClick={handleSendOrder}
          className="w-full mt-2 bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <WhatsappIcon />
          أرسل الطلب عبر واتساب
        </button>
      </div>
    </div>
  );
}

// --- 4. المكون الرئيسي لصفحة السلة ---
export default function CartPage() {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartPage must be used within a CartProvider");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cartItems, setCartItems } = context;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleQuantityChange = useCallback(
    (orderId: string, amount: number) => {
      setCartItems((items) =>
        items
          .map((item) =>
            item.orderId === orderId
              ? { ...item, quantity: item.quantity + amount }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    },
    [setCartItems]
  );

  const handleRemoveItem = useCallback(
    (orderId: string) => {
      setCartItems((items) => items.filter((item) => item.orderId !== orderId));
    },
    [setCartItems]
  );

  const handleConfirmAndClearCart = useCallback(() => {
    setCartItems([]);
    setIsPopupOpen(false);
  }, [setCartItems]);

  const { subtotal, total } = useMemo(() => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const deliveryFee = 25;
    const total = subtotal + deliveryFee;
    return { subtotal, total };
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8 pt-20">
        <h1 className="text-3xl font-bold text-gray-800 mt-6">
          سلة مشترياتك فارغة!
        </h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-[#C0392B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a13024]"
        >
          اكتشف قائمة الطعام
        </button>
      </div>
    );
  }

  return (
    <>
      {isPopupOpen && (
        <WhatsappPopup
          cartItems={cartItems}
          subtotal={subtotal}
          total={total}
          onClose={() => setIsPopupOpen(false)}
          onConfirm={handleConfirmAndClearCart}
        />
      )}

      <div
        dir="rtl"
        className="bg-gray-50 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            سلة المشتريات
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      {item.selectedExtras.length > 0 &&
                        ` | الإضافات: ${item.selectedExtras.join(", ")}`}
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
                    <p className="font-extrabold text-sm text-[#268781]">
                      {item.price * item.quantity} EGP
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.orderId)}
                      className="text-red-500 transition-colors"
                      aria-label="حذف المنتج"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
                      {(total - subtotal).toFixed(2)} EGP
                    </span>
                  </div>
                  <div className="border-t pt-4 mt-4 flex justify-between font-bold text-xl text-gray-900">
                    <span>الإجمالي</span>
                    <span>{total.toFixed(2)} EGP</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full mt-8 bg-[#268781] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#a13024] transition-colors"
                >
                  إتمام الطلب
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
