import React, { useEffect, useState } from 'react'
import { Link, useLocation} from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
      }, [location]);
  return (
    <>
    <ul className="navbar-nav bg-dark sidebar sidebar-dark  nav-sidebar " >
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={"/"}>
                <div className="sidebar-brand-icon ">
                    <img src="asset/img/reached.png" width="85px" height="75px" alt="logo"/>
                </div>
                <div className="sidebar-brand-text">My Workout</div>
            </Link>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item ">
                <Link className={"nav-link "+ (url === "/dashboard" ? "bg-gray-200 text-dark" : "p-1 px-3")} to={"/dashboard"}>
                    <img src="asset/img/dashboard.png" alt="logo"/>
                    <span>Dashboard</span></Link>
            </li>
            <hr className="sidebar-divider"/>
            
            <li className="nav-item p-0 m-0 ">
                <Link className={"nav-link "+ (url === "/all-activities" ? "bg-gray-200 text-dark" : "p-1 px-3")} to={"/all-activities"} > All Actavities
                </Link>
            </li>
            <li className="nav-item p-0 m-0">
                <Link className={"nav-link "+ (url === "/create-activity" ? "bg-gray-200 text-dark" : "p-1 px-3")} to={"/create-activity"}>Create Actavity
                </Link>
            </li>

        </ul>
    </>
  )
}

export default Sidebar