import React, { useState, createContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./components/forms/protected";
import { LoginForm } from "./components/forms/login-form";
import {
  MainComponent,
  OrderCard,
  UserCard,
  ProductCard,
  Dashboard,
  Analytics,
} from "./components";

export const ActiveContext = createContext();

function App() {
  const [isauthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isauthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isauthenticated", isauthenticated);
  }, [isauthenticated]);

  return (
    <ActiveContext.Provider value={{ isauthenticated, setIsAuthenticated }}>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginForm />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainComponent />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order" element={<OrderCard />} />
            <Route path="user" element={<UserCard />} />
            <Route path="product" element={<ProductCard />} />
            <Route path="analytic" element={<Analytics />} />
          </Route>

          {/* Unknown route redirect */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </ActiveContext.Provider>
  );
}

export default App;
