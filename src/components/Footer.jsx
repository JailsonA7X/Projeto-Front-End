import { Facebook, Instagram, Twitter } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white px-10 py-16 mt-10">
      <div className="flex flex-wrap justify-between gap-10">

        <div className="max-w-xs">
          <h1 className="text-3xl font-bold mb-6">Digital Store</h1>
          <p className="text-gray-400 leading-relaxed mb-8">
            Digital Store is your ultimate destination for premium sneakers and streetwear. 
            We bring together the world's most iconic brands to keep you ahead of the trends with comfort and style.
          </p>
          <div className="flex gap-5 mt-8">
  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
    <Facebook size={24} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
    <Instagram size={24} />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
    {/* O Lucide ainda usa o nome Twitter para o ícone do pássaro/X */}
    <Twitter size={24} />
  </a>
</div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Information</h4>
          <ul className="text-gray-400 flex flex-col gap-3">
            <li><a href="#" className="hover:text-primary">About Us</a></li>
            <li><a href="#" className="hover:text-primary">Security</a></li>
            <li><a href="#" className="hover:text-primary">Wishlist</a></li>
            <li><a href="#" className="hover:text-primary">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Categories</h4>
          <ul className="text-gray-400 flex flex-col gap-3">
            <li><a href="#" className="hover:text-primary">T-shirts</a></li>
            <li><a href="#" className="hover:text-primary">Pants</a></li>
            <li><a href="#" className="hover:text-primary">Caps</a></li>
            <li><a href="#" className="hover:text-primary">Headphones</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <p className="text-gray-400 max-w-[200px] mb-4">
            1510 Sunset Boulevard, 1st Floor – Downtown, Los Angeles, CA 90012, USA
          </p>
          <p className="text-gray-400">+1 (310) 555-7428</p>
        </div>
      </div>

      <hr className="border-gray-800 my-10" />
      <p className="text-center text-gray-500 text-sm">
        © 2024 Digital College
      </p>
    </footer>
  );
}