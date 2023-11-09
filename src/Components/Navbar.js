
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-primary bg-gradient ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/general">News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-Link text-dark mx-1" aria-current="page" to="/general">General</Link>
                                </li>   
                               
                                <li className="nav-item "><Link className="nav-Link text-dark mx-1" to="/business">business</Link></li>
                                <li className="nav-item "><Link className="nav-Link text-dark mx-1" to="/entertainment">entertainment</Link></li>
                                <li className="nav-item "><Link className="nav-Link text-dark mx-1" to="/health">health</Link></li>
                                <li className="nav-item "><Link className="nav-Link text-dark mx-1" to="/sports">sports</Link></li>
                                <li className="nav-item "><Link className="nav-Link text-dark mx-1" to="/technology">technology</Link></li>
                                
                               
                            </ul>
                           
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
