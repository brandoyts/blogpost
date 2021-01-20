<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Events\NewComment;

class CommentController extends Controller
{

    public function store(Post $post, Request $request)
    {

        $comment = $post->comments()->create([
            'content' => $request->content,
            'user_id' => Auth::id()
        ]);

        $comment = Comment::where('id', $comment->id)->with('user')->first();

        event(new NewComment($comment));

        return Redirect::back();
    }


    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {
    }
}
