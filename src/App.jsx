import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPass from "./pages/Auth/forgotPass";
import VerifyCode from "./pages/Auth/verifyCode";
import ResetPassword from "./pages/Auth/resetPassword";
import HomePage from "./pages/homepage/HomePage";
import ArticleHome from "./pages/article/ArticleHome";
import ArticleList from "./pages/article/ArticleList";
import ArticleDetail from "./pages/article/ArticleDetail";
import ScrollTop from "./components/ScrollTop";
import ProductList from "./pages/product/ProductList";
import DetailProduct from "./pages/product/DetailProduct";
import BuyNowProduct from "./pages/product/BuyNowProduct";
import PaymentSucces from "./pages/PaymentSucces";
const routes = [
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/register", element: <Register /> },
  { path: "/aturulang", element: <ForgotPass /> },
  { path: "*", element: <div>404 - Page Not Found</div> },
  { path: "/login", element: <Login /> },
  { path: "/reset", element: <ResetPassword /> },
  { path: "/verify", element: <VerifyCode /> },
  {
    path: "/",
    element: <ScrollTop />,
    children: [
      { path: "/article", element: <ArticleHome /> },
      { path: "/article/list", element: <ArticleList /> },
      { path: "/article/:id", element: <ArticleDetail /> },
      { path: "/products", element: <ProductList /> },
      { path: "/product/:id", element: <DetailProduct /> },
      { path: "/buy-now", element: <BuyNowProduct /> },
      { path: "/success", element: <PaymentSucces /> },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
