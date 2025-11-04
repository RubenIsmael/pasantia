<?php 
	class Contacto extends Controllers{
		public function __construct()
		{
			parent::__construct();
			session_start();
			getPermisos(MDPAGINAS);
		}

		public function contacto()
		{
			//$pageContent = getPageRout('contacto');
			
				$data['page_tag'] = NOMBRE_EMPESA;
				$data['page_title'] = 'contacto';
				$data['page_name'] ="contacto";
				
				$this->views->getView($this,"contacto",$data); 
			

		}

	}
 ?>