<?php 
	
	class Controllers
	{
		protected $model;
		protected $views;
		public function __construct()
		{
			$this->views = new Views();
			$this->loadModel();
		}

		public function loadModel()
		{
			//HomeModel.php
			$modelo = get_class($this)."Model";
			$routClass = "Models/".$modelo.".php";
			if(file_exists($routClass)){
				require_once($routClass);
				$this->model = new $modelo();
			}
		}
	}

 ?>