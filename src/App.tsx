import React, { Suspense,lazy } from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
const Home=lazy(()=>import("./pages/home"))
const Cart=lazy(()=>import("./pages/cart"))
const Search=lazy(()=>import("./pages/search"))


import Loader from './components/loader';
import Header from './components/header';
//admin imports 
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionmanagement")
);
function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Router>
        <Header/>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/search" element={<Search/>} />

          {/* Admin Routes */}
          <Route
          //   element={
          //     <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />
          //   }
           >
            <Route path="admin">
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product" element={<Products />} />
              <Route path="customer" element={<Customers />} />
              <Route path="transaction" element={<Transaction />} />
              {/* Charts */}
              <Route path="chart">
                <Route path="bar" element={<Barcharts />} />
                <Route path="pie" element={<Piecharts />} />
                <Route path="line" element={<Linecharts />} />
              </Route>
              {/* Apps */}
              <Route path="app">
                <Route path="coupon" element={<Coupon />} />
                <Route path="stopwatch" element={<Stopwatch />} />
                <Route path="toss" element={<Toss />} />
              </Route>
              {/* Management */}
              <Route path="management">
                <Route path="new-product" element={<NewProduct />} />
                <Route path="product/:id" element={<ProductManagement />} />
                <Route path="transaction/:id" element={<TransactionManagement />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;


