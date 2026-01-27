export default function Footer() {
  return (
    <footer id="contact" className="bg-white-100 text-gray-400 py-12 font-arabic">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-[#614b96] to-[#916fc2] bg-clip-text text-transparent">
            متجر مودرن
          </h4>
          <p className="text-sm">صفحة هبوط لمتجر إلكتروني تم تصميمها عن طريق أسامة.</p>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-semibold mb-3 bg-gradient-to-r from-[#614b96] to-[#916fc2] bg-clip-text text-transparent">
            روابط
          </h5>
          <ul className="space-y-2 text-sm">
            <li className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#614b96] hover:to-[#916fc2] transition cursor-pointer">
              من نحن
            </li>
            <li className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#614b96] hover:to-[#916fc2] transition cursor-pointer">
              المنتجات
            </li>
            <li className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#614b96] hover:to-[#916fc2] transition cursor-pointer">
              اتصل بنا
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="font-semibold mb-3 bg-gradient-to-r from-[#614b96] to-[#916fc2] bg-clip-text text-transparent">
            النشرة البريدية
          </h5>
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="w-full px-4 py-2 rounded-lg text-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#614b96] focus:ring-opacity-70"
          />
        </div>
      </div>

      <p className="text-center text-xs mt-10 bg-gradient-to-r from-[#614b96] to-[#916fc2] bg-clip-text text-transparent">
        © 2026 متجر مودرن. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}