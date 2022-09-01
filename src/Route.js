import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from "./view/pages/Sobre/sobre";
import Products from "./view/pages/Products/products";

function Rota() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route />
            </Routes>
        </Router>
    );
}

export default Rota;