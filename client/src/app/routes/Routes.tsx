import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import About from "../../features/about/About";
import Contact from "../../features/contact/Contact";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import LoginForm from "../../features/account/LoginForm";
import RegisterForm from "../../features/account/RegisterForm";
import RequireAuth from "./RequireAuth";
import CheckoutSuccess from "../../features/checkout/CheckoutSuccess";
import OrdersPage from "../../features/orders/OrdersPage";
import OrderDetailedPage from "../../features/orders/OrderDetailedPage";
import Home from "../../features/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            element: <RequireAuth />, children: [
                {
                    path: "checkout", element: <CheckoutPage />
                },
                {
                    path: "checkout/success", element: <CheckoutSuccess />
                },
                {
                    path: "orders", element: <OrdersPage />
                },
                {
                    path: "orders/:id", element: <OrderDetailedPage />
                }
            ]
        },
        { path: "", element: <Home /> },
        { path: "catalog", element: <Catalog /> },
        { path: "catalog/:id", element: <ProductDetails /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "basket", element: <BasketPage /> },
        { path: "server-error", element: <ServerError /> },
        { path: "login", element: <LoginForm /> },
        { path: "register", element: <RegisterForm /> },
        { path: "not-found", element: <NotFound /> },
        { path: '*', element: <Navigate replace to='/not-found' /> }
        ]
    }
]);