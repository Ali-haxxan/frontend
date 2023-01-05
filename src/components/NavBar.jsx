import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <nav className="navbar bg-light navbar-expand fixed-top mb-5 border-dark">
            <div className="container">
                <div className="d-flex col-6">
                    <img src="/asset/pictures/reached.png" alt="Logo" width="60" height="40" className="d-inline-block align-text-top"/>
                    <Link className="navbar-brand col-lg-6 d-none d-lg-block" to='/'>My Workout Traker</Link>
                </div>
                <div className="d-flex justify-content-end col-6 ">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">  
                          <Link to="/signup" className="nav-link btn btn-sm btn-primary px-4 text-white" aria-current="page" >Signup</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/login" className="nav-link btn btn-sm btn-outline-primary px-4 " aria-current="page" >Login</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar