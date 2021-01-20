import React from "react";
import Header from "./Header";

function Layout({ children }) {
    return (
        <main>
            <Header />

            <div className="container mt-5">{children}</div>
        </main>
    );
}

export default Layout;
