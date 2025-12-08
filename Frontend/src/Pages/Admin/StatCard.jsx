export default function StatCard({ value, title, change }) {
  return (
    <div
      className="
      bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-transparent
      hover:border-orange-500 hover:shadow-xl hover:-translate-y-1
      transition-all duration-300 cursor-pointer
    "
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        {value}
      </h2>

      <p className="text-gray-500 text-sm sm:text-base">
        {title}
      </p>

      <p className="text-green-500 font-semibold mt-2 text-sm sm:text-base">
        +{change}
      </p>
    </div>
  );
}
