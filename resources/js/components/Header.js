import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import "../../css/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <InertiaLink href="/">Home</InertiaLink>
            </div>
        </header>
    );
}

export default Header;
