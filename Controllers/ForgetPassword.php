<?php 

	class ForgetPassword extends Controllers{
		public function __construct()
		{

			parent::__construct();
		}

		public function forgetPassword()
		{
			$data['page_tag'] = "Login - Tienda Virtual";
			$data['page_title'] = "Tienda Virtual";
			$data['page_name'] = "login";
			$data['page_functions_js'] = "functions_login.js";
			$this->views->getView($this,"fPassword",$data);
		}
    }