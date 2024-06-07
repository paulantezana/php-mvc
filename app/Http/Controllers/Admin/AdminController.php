<?php

namespace App\Http\Controllers\Admin;

use App\Core\BaseController;
use App\Http\Request;
use App\Http\Response;

class AdminController extends BaseController
{
  public function home(Request $request, Response $response)
  {
    return $response->view('admin/admin', [
      'title' => 'ADMIN',
    ], 'admin', 'admin');
  }
}
