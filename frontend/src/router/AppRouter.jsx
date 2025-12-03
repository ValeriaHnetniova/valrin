import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Collection from "../pages/Collection/Collection";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CartPage from "../pages/Cart/Cart";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collection />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route 
          path="cart" 
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;