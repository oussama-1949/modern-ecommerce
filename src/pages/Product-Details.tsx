import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import lintRemover from '../assets/photo_2026-01-22_15-11-18.jpg';
import lintRemover2 from '../../dist/assets/test2.jpg'
import lintRemover3 from '../../dist/assets/3.jpg'
import lintRemover4 from '../../dist/assets/4.jpg'
import lintRemover5 from '../../dist/assets/5.jpg'

import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: '1',
    name: 'مزيل الوبر الكهربائي',
    price: 119,
    oldPrice: 250,
    desc: 'تمريرة بسيطة تعيد لملابسك مظهرها الجديد في ثوانٍ.',
    details: [
      'سريع وفعّال: يزيل الوبر والبقع في ثوانٍ، ويعيد للملابس مظهرها الجديد.',
      'آمن على الأقمشة: مناسب لجميع الأقمشة مثل الصوف، القطن، والحرير.',
      'قابل للشحن ومحمول: خفيف الوزن وسهل الحمل.',
      'سهولة الاستخدام والتنظيف.',
    ],
    img: lintRemover,
    stock: 8,
    viewers: 9,
    gallery: [
      { src: lintRemover, caption: 'المنتج من الأمام' },
      { src: lintRemover2, caption: 'المنتج من الخلف' },
      { src: lintRemover3, caption: 'قريب من القاعدة' },
      { src: lintRemover4, caption: 'المنتج أثناء الاستخدام' },
      { src: lintRemover5, caption: 'مرفق مع الملحقات' },
    ],
  },
];


export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [quantity, setQuantity] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
  const increaseQuantity = () => setQuantity(prev => Math.min(product!.stock, prev + 1));

const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true); // start loading

  const payload = {
    ...formData,
    product: product?.name,
    quantity,
    price: product!.price,
  };

try {
const res = await fetch('/api/order', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});


  console.log('Fetch response status:', res.status); // ✅ See HTTP status
  console.log('Fetch response ok:', res.ok);

  const data = await res.json(); // Parse response
  console.log('Response from /api/order:', data);

  if (!res.ok) throw new Error('Request failed');

  navigate('/checkout', { state: payload });
} catch (err) {
  console.error('Error sending order:', err);
  alert('حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.');
  setLoading(false);
}
}

  if (!product)
    return (
      <p className="p-6 text-center text-red-500 font-semibold">المنتج غير موجود</p>
    );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-arabic">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
          {/* Order Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-md space-y-4 mb-6"
          >
            <h2 className="text-xl font-semibold text-center mb-2 bg-gradient-to-r from-[#614b96] to-[#916fc2] bg-clip-text text-transparent">
              معلومات الطلب
            </h2>

            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#614b96]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#614b96]"
            />

            <textarea
              name="address"
              placeholder="المدينة"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#614b96]"
            />

            {/* Quantity selector */}
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                +
              </button>
            </div>
               <p className="text-center text-gray-500 mt-2">
              المجموع: <span className="font-bold">{product.price * quantity} د.م</span>
            </p>

      <button
  type="submit"
  disabled={loading}
  className={`w-full py-3 rounded-lg text-white ${
    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#614b96] to-[#916fc2] hover:from-[#916fc2] hover:to-[#614b96]'
  } transition`}
>
  {loading ? 'جاري معالجة طلبك...' : 'تأكيد الطلب'}
</button>

         
          </form>
        {/* Image */}
     {/* Product Gallery */}
          {/* Product Gallery */}

<div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-4">
  {product.gallery?.map((item, idx) => (
    <div key={idx} className="flex flex-col items-center">
      <img
        src={item.src}
        alt={item.caption}
        className="w-full h-24 md:h-32 object-cover rounded-lg shadow-sm"
      />
      <p className="text-sm text-center mt-1 text-gray-600">{item.caption}</p>
    </div>
  ))}
</div>


        {/* Details */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold mb-2 text-[#614b96]">{product.name}</h1>
          <p className="text-gray-600">{product.desc}</p>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-[#614b96] to-[#916fc2] bg-clip-text text-transparent">
              {product.price} د.م
            </span>
            <span className="line-through text-gray-400">{product.oldPrice} د.م</span>
          </div>

          <p className="text-sm text-red-500">
            سارع! فقط {product.stock} قطعة متبقية
          </p>
          <p className="text-sm text-gray-500">
            يشاهده {product.viewers} متصفح الآن
          </p>

        

          {/* Features */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            {product.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>

          <Link
            to="/products"
            className="text-[#614b96] hover:underline font-semibold"
          >
            &larr; العودة إلى المنتجات
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}