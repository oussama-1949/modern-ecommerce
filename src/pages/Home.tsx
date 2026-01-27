import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
// import HomepageProducts from '../components/'
import Testimonials from '../components/Testimisonals';
import Footer from '../components/Footer';

export default function Home() {
return (
<div className="font-sans text-gray-800">
<Header />
<Hero />
<Features />
<Products/>
<Testimonials />
{/* <CTA /> */}
<Footer />
</div>
);
}