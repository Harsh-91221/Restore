import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import { Home } from "@mui/icons-material";
import About from "../../features/about/About";
import Contact from "../../features/contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Home/>},
            {path: "/catalog", element: <Catalog/>},
            {path: "/catalog/:id", element: <ProductDetails/>},
            {path: "/about", element: <About/>},
            {path: "/contact", element: <Contact/>},
        ]
    }
]);