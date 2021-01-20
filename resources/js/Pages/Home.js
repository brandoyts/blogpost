import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../components/Layout.js";
import PostList from "../components/PostList.js";

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
