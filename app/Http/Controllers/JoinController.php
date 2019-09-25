<?php

namespace App\Http\Controllers;

use App\LandingEmail;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class JoinController extends BaseController
{
    use ValidatesRequests;

    public function store(Request $request) {
        $validatedData = $request->validate([
            'email' => 'required|email|unique:landing_emails,email',
        ]);

        LandingEmail::create(['email' => $validatedData['email']]);

        return redirect("/");
    }
}
