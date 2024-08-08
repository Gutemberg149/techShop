import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import ProdInfo from "./pages/prodInfo/ProdInfo";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import ScrollToTop from "./components/keepPageAtThetop/keepPageAtTheTop";
import SignInPage from "./pages/signIn/SignInPage";
import SignUpPage from "./pages/signUp/SignUp";

const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/prodInfo/:id",
    element: (
      <>
        <ScrollToTop />
        <ProdInfo />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <ScrollToTop />
        <Cart />
      </>
    ),
  },
  {
    path: "/payment",
    element: (
      <>
        <ScrollToTop />
        <Payment />
      </>
    ),
  },
  {
    path: "/singup",
    element: (
      <>
        <ScrollToTop />
        <SignUpPage />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <ScrollToTop />
        <SignInPage />
      </>
    ),
  },
]);

export default RouterApp;
