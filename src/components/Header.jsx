import { Search, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white px-6 md:px-10 py-6 flex flex-col gap-6 shadow-sm">
    
      <div className="flex items-center justify-between gap-4">
        
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <Menu size={28} />
        </button>

        <h1 className="text-primary text-2xl md:text-3xl font-bold tracking-tight flex-1 md:flex-none">
          Digital Store
        </h1>

        <div className="hidden md:flex flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full bg-[#F5F5F5] border-none rounded-lg py-3 px-4 outline-none text-sm"
          />
          <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <a href="#" className="hidden md:block underline text-gray-600 text-sm">Sign Up</a>
          <button className="bg-primary text-white px-4 md:px-8 py-2 rounded-lg font-bold text-sm">
            Log In
          </button>
          
          <div className="relative">
            <ShoppingCart className="text-primary w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              2
            </span>
          </div>
        </div>
      </div>

      <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
        <a href="#" className="text-primary border-b-2 border-primary">Home</a>
        <a href="#" className="hover:text-primary transition-all">Products</a>
        <a href="#" className="hover:text-primary transition-all">Categories</a>
        <a href="#" className="hover:text-primary transition-all">My Orders</a>
      </nav>

      {menuAberto && (
        <nav className="md:hidden flex flex-col gap-4 bg-white border-t pt-4 animate-in slide-in-from-top">
          <a href="#" className="text-primary font-bold">Home</a>
          <a href="#" className="text-gray-600">Products</a>
          <a href="#" className="text-gray-600">Categories</a>
          <a href="#" className="text-gray-600">My Orders</a>
          <hr />
          <a href="#" className="text-gray-600">Sign Up</a>
        </nav>
      )}
    </header>
  );
}