
const features = [
  { title: 'توصيل سريع', desc: 'احصل على منتجاتك في وقت قياسي.' },
  { title: 'دفع آمن', desc: 'بياناتك محمية بأعلى مستوى من الأمان.' },
  { title: 'جودة ممتازة', desc: 'أفضل المنتجات مختارة خصيصًا لك.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 ">لماذا تختارنا؟</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl shadow-lg text-center text-white"
              style={{
                background: 'linear-gradient(135deg, #614b96, #916fc2)'
              }}
            >
              <h4 className="text-xl font-semibold mb-3 ">{f.title}</h4>
              <p className="text-white/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}