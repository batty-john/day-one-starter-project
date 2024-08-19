import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
    function hideNavbar() {
        const element = document.getElementById('offcanvasMenu');
        element.classList.remove('show');
    }

    return (
        <div className="row mx-0">
            <div className="col px-0">
                <nav className="navbar">
                    <div className="container">
                        <Link href="/" className="navbar-brand">
                            <h3>Day One Software</h3>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="offcanvasMenu">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-start">
                                <li className="nav-item px-1">
                                    <Link href="/" className="nav-link" onClick={hideNavbar}>Home</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/about" className="nav-link" onClick={hideNavbar}>About</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/contact" className="nav-link" onClick={hideNavbar}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;