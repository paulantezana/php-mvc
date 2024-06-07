<?php

use App\Core\Router;

Router::get('/', 'PageController@home');

Router::get('/user/login', 'UserController@login');
Router::post('/user/loginValidate', 'UserController@loginValidate');
Router::get('/user/logout', 'UserController@logout');

Router::group('/admin', 'AdminAuthMiddleware', function () {
  Router::get('', 'Admin\\AdminController@home');
});
