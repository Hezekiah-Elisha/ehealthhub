<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
    });
});

Route::group(['prefix' => 'patient'], function () {
    Route::post('create', [PatientController::class, 'create']);
    Route::get('index', [PatientController::class, 'index']);
    Route::get('show/{id}', [PatientController::class, 'show']);
    Route::put('update/{id}', [PatientController::class, 'update']);
    Route::delete('delete/{id}', [PatientController::class, 'delete']);
});

ROute::group(['prefix' => 'doctor'], function () {
    Route::post('create', [DoctorController::class, 'create']);
    Route::get('index', [DoctorController::class, 'index']);
    Route::get('show/{id}', [DoctorController::class, 'show']);
    Route::put('update/{id}', [DoctorController::class, 'update']);
    Route::delete('delete/{id}', [DoctorController::class, 'delete']);
});