import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer"; 

const products = [
  { id: 1, name: "Jumpman Air Jordan Nike Retro 4 Cement White Outdoor", category: "Tênis", price: 659, oldPrice: 942, image: "https://png.pngtree.com/png-vector/20250227/ourmid/pngtree-jumpman-air-jordan-sports-shoes-nike-retro-4-cement-white-outdoor-png-image_15609615.png", discount: "30%" },
  { id: 2, name: "Air Jordan Blue Nike Off White", category: "Tênis", price: 406, oldPrice: 580, image: "https://png.pngtree.com/png-vector/20250223/ourmid/pngtree-blue-air-jordan-sneakers-nike-off-white-white-png-image_15573177.png", discount: "30%" },
  { id: 3, name: "Air Jordan “Black Chile Red-White”", category: "Tênis", price: 144, oldPrice: 170, image: "https://png.pngtree.com/png-vector/20250209/ourmid/pngtree-nike-jordan-1-mid-black-chile-red-white-shoes-png-image_15369409.png", discount: "15%"  },
  { id: 4, name: "Free Air Cyan", category: "Tênis", price: 49, oldPrice: 196, image: "https://png.pngtree.com/png-vector/20250223/ourmid/pngtree-nike-free-air-max-shoe-sneakers-blue-teal-png-image_15573175.png", discount: "75%"  },
  { id: 5, name: "Air Jordan 1 Mid Frozen", category: "Tênis", price: 378, oldPrice: 420, image: "https://png.pngtree.com/png-clipart/20250106/original/pngtree-nike-shoes-blue-and-white-color-winter-snakers-png-image_20062411.png", discount: "10%"  },
  { id: 6, name: "Air Force 1 Mid Off-White Pine Green", category: "Tênis", price: 445, oldPrice: 890, image: "https://hypedfam.com/cdn/shop/files/nike-off-white-air-force-1-mid-sp-pine-green-1.png?v=1712358864&width=700", discount: "50%"  },
  { id: 7, name: "Zoom Speed Trainer 3", category: "Tênis", price: 220, oldPrice: 550, image: "https://png.pngtree.com/png-vector/20241108/ourmid/pngtree-comfortable-red-sports-shoe-png-image_14321880.png", discount: "60%"  },
  { id: 8, name: "Air Max 1 Speed Yellow", category: "Tênis", price: 200, oldPrice: 235, image: "https://png.pngtree.com/png-vector/20250223/ourmid/pngtree-sneakers-air-jordan-shoe-nike-max-white-orange-png-image_15573180.png", discount: "15%"  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <Hero />
      <FeaturedCollections />
      
      <section className="px-10 py-10">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-[#474747] text-xl">Hot Products</h3>
          <a href="#" className="text-primary hover:underline italic">See All &rarr;</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;