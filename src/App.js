import React from "react";
import Header from "./view/components/Header/Header";
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./view/pages/Sobre/sobre";
import Products from "./view/pages/Products/products";
import { Provider } from "react-redux"
import Rota from "./Route";

function App() {
  return (
    <Rota />
  );
}

export default App;
