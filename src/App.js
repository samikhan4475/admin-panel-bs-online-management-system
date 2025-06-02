import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MainComponent,
  LoginForm,
  SignupForm,
  Email,
  CodeVerification,
  NewPassword,
  OrderCard,
  UserCard,
  ProductCard,
  Dashboard,
  Analytics
} from "./components";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signupform" element={<SignupForm />} />
        <Route path="/email" element={<Email />} />
        <Route path="/code-verification" element={<CodeVerification />} />
        <Route path="/new-password" element={<NewPassword />} />

        <Route path="/" element={<MainComponent />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="order" element={<OrderCard />} />
          <Route path="user" element={<UserCard />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="analytic" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
