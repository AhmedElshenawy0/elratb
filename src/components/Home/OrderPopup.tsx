import { useState } from "react";

const OrderPopup = ({ meal, onClose, onAddToCart }: any) => {
  const [size, setSize] = useState(
    meal.options?.sizes[0] ? meal.options?.sizes[0] : ""
  ); // { label, price }
  const [extras, setExtras] = useState<any>({});
  const [quantity, setQuantity] = useState(1);

  const handleExtraChange = (extraName: any) => {
    setExtras((prev: any) => ({ ...prev, [extraName]: !prev[extraName] }));
  };

  const handleFinalAddToCart = () => {
    const selectedExtras = Object.keys(extras).filter((key) => extras[key]);

    const finalOrder = {
      ...meal,
      selectedSize: size.label,
      selectedExtras,
      quantity,
      totalPrice: size.price * quantity,
    };

    onAddToCart(finalOrder);
  };

  return (
    <section
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      dir="rtl"
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-4">
          {/* صورة و تفاصيل الوجبة */}
          <div className="flex items-start gap-4">
            <img
              src={meal.image}
              alt={meal.title}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <h2 className="text-xl font-bold">{meal.title}</h2>
              <p className="text-sm text-gray-500">{meal.desc}</p>
            </div>
          </div>

          {/* الأحجام */}
          {meal.options?.sizes && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">الحجم</h3>
              <div className="flex gap-2">
                {meal.options?.sizes?.map((s: any) => (
                  <button
                    key={s.label}
                    onClick={() => setSize(s)}
                    className={`px-4 py-1.5 text-sm rounded-full border-2 ${
                      size.label === s.label
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    {s.label} ({s.price} EGP)
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* الإضافات */}
          {meal.options?.extras && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">الإضافات</h3>
              <div className="space-y-2">
                {meal.options.extras?.map((extra: any) => (
                  <label
                    key={extra}
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-md"
                  >
                    <input
                      type="checkbox"
                      checked={!!extras[extra]}
                      onChange={() => handleExtraChange(extra)}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                    <span>{extra}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* الكمية */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">الكمية</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full bg-gray-200 font-bold"
              >
                -
              </button>
              <span className="font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* السعر النهائي وزر الإضافة */}
        <div className="p-4 bg-gray-50 border-t">
          <button
            onClick={handleFinalAddToCart}
            className="w-full bg-[#C0392B] text-white font-bold py-3 rounded-lg hover:bg-[#a13024] transition-colors"
          >
            أضف إلى السلة ({size.price * quantity} EGP)
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderPopup;
