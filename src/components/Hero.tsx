import ecommerce from '../assets/E-Commerce Discounts Modern Facebook Cover.jpg';

export default function Hero() {
  return (
    <section className="w-full">
      <img 
        src={ecommerce} 
        alt="Hero" 
        className="w-full h-auto max-h-screen object-cover"
      />
    </section>
  );
}