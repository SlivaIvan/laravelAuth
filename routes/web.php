<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/user-info', [App\Http\Controllers\UserInfoController::class, 'index']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

