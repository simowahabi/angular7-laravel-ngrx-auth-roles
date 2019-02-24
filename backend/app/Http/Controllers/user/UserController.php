<?php

namespace App\Http\Controllers\user;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
class UserController extends Controller
{
    //
    public function __construct(){
         //$user = JWTAuth::parseToken()->authenticate();
    }

    public function getuser(){
      $user = JWTAuth::parseToken()->authenticate();
        return $user;
    }


}
