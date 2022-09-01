import React from "react";
import { BsMenuApp } from "react-icons/bs"
import {Button} from "react-bootstrap/Button"
import {Link} from "react-router-dom"


function Header() {
    return (
        <nav className="d-flex flex-row p-2 mb-2 bg-warning justify-content-between ">
            <div className="col-2 d-flex flex-row justify-content-evenly align-items-center border-end border-start border-dark">
                <BsMenuApp className="" /> 
                <span>TESTE</span>
            </div>
            
            <div className="col-5 d-flex justify-content-end align-items-end">
                <ul className="d-flex col-12 p-0 mb-0 list-inline justify-content-end">
                    <li className="p-1 list-inline-item border-start border-dark">
                       <Link to="/products" className="btn btn-sm">Produtos</Link> 
                    </li>
                    <li className="p-1 list-inline-item border-start border-dark">
                        <Link to="/" className="btn btn-sm">Home</Link> 
                    </li>
                </ul>  
            </div>
                
                
            
        </nav>
    );
}

export default Header;