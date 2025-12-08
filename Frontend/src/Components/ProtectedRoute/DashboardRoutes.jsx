import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Dashboard from "../../Pages/Admin/Dashboard";
import Manage from "../../Pages/Admin/Manage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// ⭐ New import
import OrdersPage from "../../Pages/Admin/OrdersPage";
import Customer from "../../Pages/Admin/Customer";
import Dishes from "../../Pages/Admin/Dishes";
import Sellers from "../../Pages/Admin/Sellers";

const Customers = () => <div className="p-8">Customers Page</div>;

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />              
        <Route path="manage" element={<Manage />} />          
        {/* ⭐ REPLACED: /dashboard/orders */}
        <Route path="orders" element={<OrdersPage />} />

        <Route path="customers" element={<Customer />} />
        <Route path="dishes" element={<Dishes />} />
        <Route path="sellers" element={<Sellers />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
