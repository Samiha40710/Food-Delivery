import StatCard from "./StatCard";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import OrderRow from "./OrderRow";
import coffee from "../../assets/images/Coffee/Latte.jpeg";
import burger from "../../assets/images/Burger/ChickenBurger3.webp";
import noodles from "../../assets/images/Noodles/ChickenNoodles.jpeg";
import pizza from "../../assets/images/Pizza/CheeseBurst.jpeg";

const Dashboard = () => {
  return (
    <div className="space-y-10">
      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard value="325.7K" title="Total Revenue" change="10%" />
        <StatCard value="2.6K" title="New Orders" change="50%" />
        <StatCard value="12.6K" title="Received Orders" change="34%" />
      </div>

      {/* CATEGORY SECTION */}
      <h2 className="text-2xl font-semibold text-gray-800">Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <CategoryCard img={coffee} name="Coffee" />
        <CategoryCard img={burger} name="Burger" />
        <CategoryCard img={noodles} name="Noodles" />
        <CategoryCard img={pizza} name="Pizza" />
      </div>

      {/* BEST SELLING PRODUCTS */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Best Selling Products</h2>
        <button className="text-orange-500 hover:text-orange-600 font-semibold">
          View all →
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard img={pizza} name="Italian Pizza" price="39.5" />
        <ProductCard img={burger} name="Veg Burger" price="483" />
        <ProductCard img={noodles} name="Noodles" price="23" />
      </div>

      {/* RECENT ORDERS */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Recent Orders</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-gray-600 font-medium">Order ID</th>
              <th className="p-4 text-gray-600 font-medium">Dish</th>
              <th className="p-4 text-gray-600 font-medium">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <OrderRow id="#C0E4F7" img={pizza} name="Italian Pizza" price="359.69" />
            <OrderRow id="#12939F" img={burger} name="Veg Burger" price="350.3" />
            <OrderRow id="#9F36CA" img={noodles} name="Spaghetti" price="67.99" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;