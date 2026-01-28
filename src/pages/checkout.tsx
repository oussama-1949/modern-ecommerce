import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CheckoutPage() {
  const location = useLocation();

  const order = location.state as {
    name: string;
    phone: string;
    address: string;
    product: string;
    quantity: number;
    price: number;
  };

  if (!order) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 font-semibold text-lg">لا يوجد طلب!</p>
        <Link to="/products" className="text-indigo-600 underline mt-2 block">
          العودة للمنتجات
        </Link>
      </div>
    );
  }

  const total = order.price * order.quantity;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-arabic">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start py-12 px-6">
        <h1 className="text-4xl font-bold mb-8 text-[#614b96] text-center">
          شكراً على طلبك! ✅
        </h1>

        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          {/* Order Summary */}
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#916fc2]">
              ملخص الطلب
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <span className="font-medium">المنتج:</span>
              <span>{order.product}</span>

              <span className="font-medium">الكمية:</span>
              <span>{order.quantity}</span>

              <span className="font-medium">السعر لكل قطعة:</span>
              <span>{order.price} د.م</span>

              <span className="font-medium text-[#614b96]">المبلغ الإجمالي:</span>
              <span className="font-bold text-[#916fc2]">{total} د.م</span>
            </div>
          </div>

          {/* Customer Info */}
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#916fc2]">
              معلومات العميل
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <span className="font-medium">الاسم:</span>
              <span>{order.name}</span>

              <span className="font-medium">الهاتف:</span>
              <span>{order.phone}</span>

              <span className="font-medium">العنوان:</span>
              <span>{order.address}</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link
              to="/products"
              className="inline-block mt-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#614b96] to-[#916fc2] hover:from-[#916fc2] hover:to-[#614b96] transition"
            >
              العودة للمنتجات
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}