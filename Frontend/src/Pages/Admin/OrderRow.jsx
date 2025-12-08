export default function OrderRow({ id, img, name, price }) {
  return (
    <tr className="hover:bg-gray-50 transition-all duration-200 cursor-pointer">
      
      {/* ORDER ID */}
      <td className="p-4 font-semibold text-gray-700">{id}</td>
      
      {/* IMAGE + NAME */}
      <td className="p-4 flex items-center gap-4">
        
        {/* Image Box */}
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
          <img 
            src={img} 
            className="w-full h-full object-contain"
          />
        </div>

        <span className="font-medium text-gray-800">{name}</span>
      </td>

      {/* PRICE */}
      <td className="p-4 font-semibold text-gray-900">${price}</td>
    </tr>
  );
}
