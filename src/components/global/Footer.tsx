import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="px-6 md:px-20 py-10 bg-white shadow-inner text-gray-700 text-center space-y-6 border-t"
    >
      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/babelhara" // Replace with actual if different
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-[#268781] hover:text-white transition-colors mx-auto"
        aria-label="Instagram"
      >
        <FaInstagram size={20} />
      </a>

      {/* Contact Email or Phone */}
      <p className="text-base font-medium tracking-wide text-[#268781]">
        elratb.elshamy.restaurant@gmail.com
      </p>

      {/* About the Restaurant */}
      <p className="max-w-3xl mx-auto text-sm leading-loose text-gray-600">
        مطعم الراتب الشامي يقدم أشهى المأكولات الشرقية والمشاوي الشامية في أجواء
        مستوحاة من الحارات الدمشقية الأصيلة. نخدم زبائننا في القاهرة وجميع أنحاء
        مصر، مع التزام بجودة المذاق وكرم الضيافة.
      </p>

      {/* Legal */}
      <div className="text-sm space-y-2 text-gray-500">
        <p>
          الراتب الشامي - جميع الحقوق محفوظة ٢٠٢٥ |{" "}
          <span className="underline cursor-pointer hover:text-[#268781] transition">
            سياسة الخصوصية
          </span>
        </p>

        <p className="text-gray-400">
          Powered by{" "}
          <span className="text-[#268781] font-bold transition">Rikaz</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
