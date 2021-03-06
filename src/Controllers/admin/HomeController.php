<?php

require_once(MODEL_PATH . '/User.php');

class HomeController extends Controller
{
    private $connection;
    private $userModel;
    private $exhibitorModel;
    private $customerModel;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
        $this->userModel = new User($connection);
    }

    public function home()
    {
        try {
            $userCount = $this->userModel->count();

            $this->render('admin/dashboard.view.php', [
                'userCount' => $userCount,
            ], 'layouts/admin.layout.php');
        } catch (Exception $e) {
            $this->render('500.view.php', [
                'message' => $e->getMessage(),
            ], 'layouts/admin.layout.php');
        }
    }

    public function getGlobalInfo()
    {
        $res = new Result();
        try {
            
            $res->success = true;
        } catch (Exception $e) {
            $res->message = $e->getMessage();
        }
        echo json_encode($res);
    }
}
