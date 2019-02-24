<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class AdminController extends Controller
{
    //
    public function __construct(){
        // $user = JWTAuth::parseToken()->authenticate();
    }

    public function getAllUser(){
      $users=User::all();
      return $users;
    }
}
