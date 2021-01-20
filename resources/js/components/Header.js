import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import "../../css/Header.css";

function Header() {
    const handleLogout = () => {
        Inertia.post("/logout");
        window.location = "/login";
    };

    return (
        <header className="header">
            <div className="container">
                <InertiaLink href="/">Home</InertiaLink>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
}

export default Header;
