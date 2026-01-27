import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function CheckoutPage() {
  const location = useLocation();

  // Get the order data passed from ProductDetail
  const order = location.state as {
    name: string;
    phone: string;
    address: string;
    product: string;
    quantity: number;
    price?: string; // optional, will pass from ProductDetail
  };

  if (!order) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">لا يوجد طلب!</p>
        <Link to="/products" className="text-blue-600 underline">العودة للمنتجات</Link>
      </div>
    );
  }

  // Extract numeric value from price string (e.g., "119 د.م" → 119)
  const numericPrice = order.price ? parseInt(order.price.replace(/[^\d]/g, '')) : 0;
  const total = numericPrice * order.quantity;

  return (
    <div>
        <Header/>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-green-600">شكراً على طلبك! ✅</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4 text-right">
        <h2 className="text-xl font-semibold mb-2">تفاصيل الطلب</h2>
        <p><strong>المنتج:</strong> {order.product}</p>
        <p><strong>الكمية:</strong> {order.quantity}</p>
        <p><strong>السعر لكل قطعة:</strong> {order.price}</p>
        <p><strong>المبلغ الإجمالي:</strong> {total} د.م</p>
        <p><strong>الاسم:</strong> {order.name}</p>
        <p><strong>الهاتف:</strong> {order.phone}</p>
        <p><strong>العنوان:</strong> {order.address}</p>
      </div>

      <Link to="/products" className="mt-6 text-indigo-600 hover:underline">
        &larr; العودة للمنتجات
      </Link>
    </div>
    <Footer/>
    </div>

  );
}