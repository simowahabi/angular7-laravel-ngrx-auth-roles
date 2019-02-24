<?php

namespace App\Http\Middleware;

use Closure;

class CheckUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
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
