import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const name = JSON.parse(localStorage.getItem('name'));

  return (
    <div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle d-flex justify-content-center">
                    <img src="img/bars.png"  alt="logo"/>
                    </button>
                    <div
                        className="d-none d-lg-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="">
                            <h3 >Welcome Back, {name}</h3>
                        </div>
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown no-arrow d-flex align-items-center">
                            <Link className="nav-link dropdown-toggle text-gray-600 small" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="img-profile rounded-circle" src="asset/img/profile.svg" alt='user'/>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                {/* <Link className="dropdown-item" to={"/profile"}>Profile</Link>
                                <div className="dropdown-divider"></div> */}
                                {/* <Link className="dropdown-item" to={"/change-password"}>Change Password</Link>
                                <div className="dropdown-divider"></div> */}
                                <Link className="dropdown-item" to={"/logout"}>Logout</Link>
                            </div>
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{name}</span>
                        </li>
                    </ul>
                </nav>
    </div>
  )
}

export default Navbar