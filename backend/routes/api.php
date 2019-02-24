<?php
Route::group([
    'middleware' => 'api',
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
});
Route::group(['middleware' => 'api','prefix' => 'pub'], function () {
  Route::get('getpublic','pub\PubController@testPublic');
});

Route::group(['middleware' => ['CheckAdmin','api'],'prefix' => 'user'], function () {
  Route::get('getuser','user\UserController@getuser');
});
Route::group(['middleware' => ['CheckAdmin','api'],'prefix' => 'admin'], function () {
  Route::get('getAllUser','admin\AdminController@getAllUser');

});
