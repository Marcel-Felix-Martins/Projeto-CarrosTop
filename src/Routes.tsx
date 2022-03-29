import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import Catalog from "./Pages/Catalog";

const BRoutes = () => (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Catalog />} />
                
            </Routes>
        </BrowserRouter>

    );


    export default BRoutes;