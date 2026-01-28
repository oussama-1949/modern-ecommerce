import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-arabic">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link to="/">
          <h1 className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-[#614b96] to-[#916fc2] bg-clip-text text-transparent">
            modern store
          </h1>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#contact" className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#614b96] hover:to-[#916fc2] transition">
            اتصل بنا
          </a>

          {/* use Link here too */}
          <Link
            to="/products"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#614b96] hover:to-[#916fc2] transition"
          >
            المنتجات
          </Link>
        </nav>

        {/* Button redirect */}
        <Link to="/products">
          <button className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#614b96] to-[#916fc2] hover:opacity-90 transition">
            تسوق الآن
          </button>
        </Link>

      </div>
    </header>
  );
}