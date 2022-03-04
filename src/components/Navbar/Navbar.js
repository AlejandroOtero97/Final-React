import React from "react";


const Navbar = () => {
    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand" href="#">MoebiuzIT</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <p className="nav-link active" aria-current="page" href="#">Home</p>
                    </li>
                    <li className="nav-item">
                    <p className="nav-link" href="#">AboutUs</p>
                    </li>
                    <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sections
                    </p>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><p className="dropdown-item">Action</p></li>
                        <li><p className="dropdown-item">Another action</p></li>
                        <li></li>
                        <li><p className="dropdown-item">Something else here</p></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        

    )
}

export default Navbar;