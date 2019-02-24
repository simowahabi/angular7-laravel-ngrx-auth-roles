<?php

namespace App\Http\Middleware;

use App\User;
use Closure;

use JWTAuth;
   use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
class CheckAdmin extends BaseMiddleware
{



  public function handle($request, Closure $next)
{

  try {
               $user = JWTAuth::parseToken()->authenticate();
               if($user->role=="2")
               return response()->json(['status' => 'Not Authorized'],401);

           } catch (Exception $e) {
               if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                   return response()->json(['status' => 'Token is Invalid'],401);
               }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                   return response()->json(['status' => 'Token is Expired'],401);
               }else{
                   return response()->json(['status' => 'Authorization Token not found'],401);
               }
           }

           return $next($request);
}
}
