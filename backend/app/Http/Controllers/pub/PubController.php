<?php

namespace App\Http\Controllers\pub;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PubController extends Controller
{
    //
    public function testPublic(){
      return response()->json(['message' => 'Public response work']);
    }
}
