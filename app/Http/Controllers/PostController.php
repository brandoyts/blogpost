<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Post $post) {
        $posts = $post->with("user")->get();


        return Inertia::render("Home", ["posts" => $posts]);
    }

    public function view (Post $post, $postId) {
        $post = $post->where("id", $postId)->with("comments", "user")->first();



        return Inertia::render("Post", ["post" => $post]);
    }
}
