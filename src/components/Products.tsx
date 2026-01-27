import { useNavigate } from 'react-router-dom';
import lintRemover from '../assets/photo_2026-01-22_15-11-18.jpg'; 

const products = [
  {
    id: '1',
    name: 'مزيل الوبر الكهربائي',
    price: '119 د.م',
    oldPrice: '250 د.م',
    desc: 'تمريرة بسيطة تعيد لملابسك مظهرها الجديد في ثوانٍ.',
    details: [
      'سريع وفعّال: يزيل الوبر والبقع في ثوانٍ، ويعيد للملابس مظهرها الجديد.',
      'آمن على الأقمشة: مناسب لجميع الأقمشة مثل الصوف، القطن، والحرير.',
      'قابل للشحن ومحمول: خفيف الوزن وسهل الحمل.',
      'سهولة الاستخدام والتنظيف.'
    ],
    img: lintRemover,
    stock: 8,
    viewers: 9,
  }
];

export default function Products() {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <section id="products" className="py-20 font-arabic">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">المنتجات الشائعة</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => handleClick(p.id)}
              className="border rounded-2xl p-4 hover:shadow-lg transition cursor-pointer group"
            >
              {/* الصورة */}
              <div className="h-40 rounded-xl mb-4 overflow-hidden bg-gray-100">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    صورة
                  </div>
                )}
              </div>

              {/* المعلومات */}
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{p.desc}</p>
              <span className="font-bold text-indigo-600">{p.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}