export default function CategoryCard({ img, name }) {
  return (
    <div className="
      bg-white/80 backdrop-blur-sm shadow-lg p-6 rounded-2xl text-center 
      border border-transparent
      hover:border-orange-500 hover:shadow-2xl hover:-translate-y-1 
      transition-all duration-300 cursor-pointer
    ">
      <div className="w-20 h-20 mx-auto flex items-center justify-center bg-orange-50 rounded-full shadow-inner">
        <img src={img} className="w-12 object-contain" />
      </div>
      <h3 className="mt-4 font-semibold text-gray-800 text-lg">{name}</h3>
    </div>
  );
}
