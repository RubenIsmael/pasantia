<?php
const BASE_URL = "http://localhost/tiendacsn";

//Zona horaria
date_default_timezone_set('America/Lima');

const DB_HOST = "localhost";
const DB_NAME = "db_tiendacsn";
const DB_USER = "root";
const DB_PASSWORD = "";
const DB_CHARSET = "charset=utf8";

//Simbolo de moneda
const SMONEY = "$";
const CURRENCY = "USD";

//Deliminadores decimal y millar Ej. 24,1989.00
const SPD = ".";
const SPM = ",";


//Api PayPal
//SANDBOX PAYPAL
const URLPAYPAL = "https://api-m.sandbox.paypal.com";
const IDCLIENTE = "AVCvM57DmlJ3r6rpFDwt9j1ETFeZxipzn1XFzCTGFl551gGeDKZZ5gU1rJUpOnZ10_vR7-G1nl-YWTuR";
const SECRET = "";
//LIVE PAYPAL
//const URLPAYPAL = "https://api-m.paypal.com";
//const IDCLIENTE = "";
//const SECRET = "";

//Datos envio de correo
const NOMBRE_REMITENTE = "Tienda Virtual";
const EMAIL_REMITENTE = "no-reply@abelosh.com";
const NOMBRE_EMPESA = "Tienda Virtual";
const WEB_EMPRESA = "www.asoserstore.com";

const DESCRIPCION = "La mejor tienda en línea con artículos de moda.";
const SHAREDHASH = "TiendaVirtual";

//Datos Empresa
const DIRECCION = "Ciudad de santo domingo, setor rosaels 4ta etapa, Av. Rio Chila y Angelino Medoro";
const TELEMPRESA = "+(593) 99 045 8131";
const TELEMPRESA1 = "+(593) 98 865 26139";
const TELEMPRESA2 = "+(593) 99 539 2363";
const WHATSAPP = "+593983932864";
const EMAIL_EMPRESA = "soluciones.compusoftnet@gmail.com";
const EMAIL_PEDIDOS = "info@mairyclothe.com";
const EMAIL_SUSCRIPCION = "info@mairyclothe.com";
const EMAIL_CONTACTO = "info@mairyclothe.com";

const CAT_SLIDER = "1,2,3";
const CAT_BANNER = "4,5,6,9,10,11";
const CAT_FOOTER = "1,2,3,4,5";

//Datos para Encriptar / Desencriptar
const KEY = 'mairy';
const METHODENCRIPT = "AES-128-ECB";

//Envío
const COSTOENVIO = 3;

//Módulos
const MDASHBOARD = 1;
const MUSUARIOS = 2;
const MCLIENTES = 3;
const MPRODUCTOS = 4;
const MPEDIDOS = 5;
const MCATEGORIAS = 6;
const MSUSCRIPTORES = 7;
const MDCONTACTOS = 8;
const MDPAGINAS = 9;

//Páginas
const PINICIO = 1;
const PTIENDA = 2;
const PCARRITO = 3;
const PNOSOTROS = 4;
const PCONTACTO = 5;
const PPREGUNTAS = 6;
const PTERMINOS = 7;
const PSUCURSALES = 8;
const PERROR = 9;

//Roles
const RADMINISTRADOR = 1;
const RSUPERVISOR = 2;
const RCLIENTES = 3;

const STATUS = array('Completo', 'Aprobado', 'Cancelado', 'Reembolsado', 'Pendiente', 'Entregado');

//Productos por página
const CANTPORDHOME = 8;
const PROPORPAGINA = 4;
const PROCATEGORIA = 4;
const PROBUSCAR = 4;

	//RED