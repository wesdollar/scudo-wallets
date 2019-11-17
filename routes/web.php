<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  $launchDateMessage = "Coming Black Friday 2019";

  return view('welcome', compact("launchDateMessage"));
});

Route::post('/join', 'JoinController@store');

Route::get('/preorder', function () {
    return redirect('http://www.mgwscudo.com/scudo-vectors');
});

Route::get('/react', function () {
  return view('react');
});
