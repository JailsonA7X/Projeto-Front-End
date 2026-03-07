export default function ProductCard({ name, category, price, oldPrice, image, discount }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white p-8 rounded-lg shadow-sm relative flex justify-center items-center h-64 hover:shadow-lg transition-all group">
        {discount && (
          <span className="absolute top-4 left-4 bg-[#E7FF8D] text-[#474747] font-bold px-3 py-1 rounded-full text-[10px]">
            {discount} OFF
          </span>
        )}
        <img src={image} alt={name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
      </div>
      
      <div className="mt-2">
        <p className="text-gray-400 text-[12px] font-bold uppercase">{category}</p>
        <h4 className="text-[#474747] text-lg leading-tight mb-2">{name}</h4>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 line-through text-lg">${oldPrice}</span>
          <span className="text-[#1F1F1F] font-bold text-lg">${price}</span>
        </div>
      </div>
    </div>
  );
}