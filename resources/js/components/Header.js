import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import "../../css/Header.css";

function Header() {
    const {
        props: { user },
    } = usePage();

    const handleLogout = () => {
        Inertia.post("/logout");
        window.location = "/login";
    };

    const renderAuthOption = () => {
        return (
            user && (
                <div className="authOption">
                    <p>{user}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )
        );
    };

    return (
        <header className="header">
            <div className="container">
                <nav>
                    <InertiaLink href="/">Inertia React</InertiaLink>
                    {renderAuthOption()}
                </nav>
            </div>
        </header>
    );
}

export default Header;
