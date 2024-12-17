import { useState } from "react";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Detailpage from "./pages/detailpage/Detailpage";
import Products from "./pages/products/Products";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/deon" element={<Detailpage />} />
                <Route path="/jenson" element={<Detailpage />} />
                <Route path="/krisha" element={<Detailpage />} />
            </>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
