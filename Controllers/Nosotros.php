<?php 
	class Nosotros extends Controllers{
		public function __construct()
		{
			parent::__construct();
			session_start();
			getPermisos(MDPAGINAS);
		}

		public function nosotros()
		{
			
			
				$data['page_tag'] = NOMBRE_EMPESA;
				//$data['page_title'] = NOMBRE_EMPESA." - ".$pageContent['titulo'];
				$data['page_name'] = "nosotros";
				//$data['page'] = $pageContent;
			    $this->views->getView($this,"nosotros",$data);  
			

		}

	}
 ?>