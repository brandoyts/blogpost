import React, { useEffect, useState } from "react";
import Layout from "../components/Layout.js";
import PostList from "../components/PostList.js";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

function Home({ posts }) {
    return (
        <Layout>
            <div className="home">
                <PostList posts={posts} />
            </div>
        </Layout>
    );
}

export default Home;
