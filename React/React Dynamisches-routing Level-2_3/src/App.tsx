import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import BrandOverview from "./pages/brandOverview/BrandOverview";
import data from "./data.json";
import NotFound from "./pages/notFound/NotFound";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home data={data} />} />
                <Route path="/:brand" element={<BrandOverview data={data} />} />
                <Route path="*" element={<NotFound />} />
            </>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
