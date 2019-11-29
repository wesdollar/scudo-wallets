<?php

Route::get('/', function () {
  return view('react');
});

Route::post('/join', 'JoinController@store');

Route::get('/preorder', function () {
    return redirect('http://www.mgwscudo.com/scudo-vectors');
});

Route::get('/react', function () {
  return view('react');
});

Route::fallback(function () {
  return view('react');
});
