export default function ProductCard({ img, name, price }) {
  return (
    <div className="
      bg-white rounded-2xl shadow-lg p-5 border border-transparent
      hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 
      transition-all duration-300 cursor-pointer
    ">

      {/* IMAGE BOX */}
      <div className="w-full h-40 flex items-center justify-center overflow-hidden">
        <img
          src={img}
          className="h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="mt-4 font-bold text-gray-800 text-lg">{name}</h3>
      <p className="text-gray-500 mb-2">${price}</p>
    </div>
  );
}
