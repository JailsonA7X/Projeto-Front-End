export default function FeaturedCollections() {
  const collections = [
    { title: "New Supreme Drop", discount: "30% OFF", image: "https://lfs.creativefabrica.com/web/pages/studio/features/custom-t-shirt-design-maker/Studio_Tool_Page_Custom_T-Shirt_Design_Maker_-_paragraph_1.png" },
    { title: "Adidas Collection", discount: "30% OFF", image: "https://png.pngtree.com/png-vector/20240819/ourmid/pngtree-design-adidas-shoe-png-image_13164318.png" },
    { title: "New Beats Bass", discount: "30% OFF", image: "https://png.pngtree.com/png-clipart/20250205/original/pngtree-stylish-glowing-headphones-with-led-lights-png-image_20303781.png" }
  ];

  return (
    <section className="px-10 py-10 bg-[#F5F5F5]">
      <h3 className="font-bold text-[#474747] mb-5 text-xl">Featured Collections</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {collections.map((col, index) => (
          
          <div key={index} className="bg-[#D8E3F2] rounded-lg p-8 relative overflow-hidden h-[250px] flex flex-col justify-center">

            <div className="relative z-10">
              <span className="bg-[#E7FF8D] text-[#474747] font-bold px-3 py-1 rounded-full text-xs w-fit mb-3 inline-block">
                {col.discount}
              </span>
              <h4 className="text-2xl font-bold text-[#1F1F1F] mb-5 max-w-[150px]">{col.title}</h4>
              <button className="bg-white text-primary font-bold py-2 px-6 rounded-lg w-fit hover:bg-primary hover:text-white transition-all">
                Buy
              </button>
            </div>

            <img 
              src={col.image} 
              alt={col.title} 
              className="absolute bottom-0 right-0 w-[60%] h-[80%] object-contain object-right-bottom mix-blend-multiply opacity-90 transition-transform hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}