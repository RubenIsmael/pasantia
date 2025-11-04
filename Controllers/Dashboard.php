<?php
class Dashboard extends Controllers
{

    public function __construct()
    {

        parent::__construct();
        //session_regenerate_id(true);
        session_start();
        if (empty($_SESSION['login'])) {
            header('Location: ' . base_url() . 'login');
            die();
        }
       getPermisos(1);
    }
    public function dashboard()
    {

        $data['page_tag'] = 'Dashboard - Tienda Virtual';
        $data['page_title'] = 'Dashboard - Tienda Virtual';
        $data['page_name'] = 'dashboard';
        $data['page_content'] = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae consequuntur perferendis aperiam, quaerat ab voluptatum laudantium temporibus eveniet dolore officiis, consequatur dolores id iusto qui quos a maiores nemo.';
        $this->views->getView($this, 'dashboard', $data);
    }
}
