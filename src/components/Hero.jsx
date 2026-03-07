export default function Hero() {
  return (
    <section className="bg-[#F5F5F5] px-10 py-12 flex items-center justify-between overflow-hidden">
      <div className="max-w-md">
        <p className="text-primary font-bold mb-4">Best Personalized Deals</p>
        <h2 className="text-6xl font-extrabold text-[#1F1F1F] mb-6 leading-tight">
          Nike Clearance Up to 75% Off! 🔥
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          The best of Nike's street style and performance, 
          now with exclusive prices. Don't miss out on the season's hottest drops.
        </p>
        <button className="bg-primary text-white px-10 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
          See Deals
        </button>
      </div>

      <div className="relative">
        
        <img 
          src="https://png.pngtree.com/png-clipart/20250110/original/pngtree-black-and-yellow-sneakers-with-wings-symbolizing-fast-movement-style-png-image_19002433.png" 
          alt="Tênis Nike" 
          className="w-[600px] rotate-[-20deg] drop-shadow-2xl"
        />
      </div>
    </section>
  );
}