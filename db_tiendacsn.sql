-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-05-2025 a las 05:00:33
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_tiendacsn`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idcategoria` bigint(20) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `descripcion` text COLLATE utf8_swedish_ci NOT NULL,
  `portada` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `datecreated` datetime NOT NULL DEFAULT current_timestamp(),
  `ruta` varchar(255) COLLATE utf8_swedish_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idcategoria`, `nombre`, `descripcion`, `portada`, `datecreated`, `ruta`, `status`) VALUES
(1, 'Laptops', 'Laptops', 'img_78ba66eb40269f99546df5b5e6fa6cf6.jpg', '2023-03-21 08:06:33', '', 1),
(2, 'Pc escritorio', 'Pc escritorio', 'img_e7e0901d8641dfafcaa79ee4685f2e7d.jpg', '2023-03-26 14:33:18', '', 1),
(3, 'Periféricos', 'Periféricos', 'img_e67b92beb532364f807dff920bb9a01a.jpg', '2023-03-26 15:36:18', 'perifericos', 1),
(4, 'Impresoras epson', 'Impresores', 'img_3dbbbfd29b2b639e569ff21e63e2e678.jpg', '2023-03-26 15:37:12', 'impresoras-epson', 1),
(5, 'Monitores', 'Monitores', 'img_b045eda887a348c8a4ed9617889885a1.jpg', '2023-03-26 15:43:27', 'monitores', 1),
(6, 'Redes', 'redes', 'img_25bbee182f62ead0461228aa8f7f18cd.jpg', '2023-03-26 15:43:55', 'redes', 1),
(9, 'Servidores', 'Servidores', 'img_47964af9ea8728e06aad7f978799d947.jpg', '2025-04-23 22:44:17', 'servidores', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallepedido`
--

CREATE TABLE `detallepedido` (
  `id` bigint(20) NOT NULL,
  `pedidoid` bigint(20) NOT NULL,
  `productoid` bigint(20) NOT NULL,
  `precio` decimal(11,2) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `detallepedido`
--

INSERT INTO `detallepedido` (`id`, `pedidoid`, `productoid`, `precio`, `cantidad`) VALUES
(1, 2, 11, '4.00', 1),
(2, 2, 5, '11.00', 4),
(3, 3, 11, '4.00', 1),
(4, 3, 5, '11.00', 4),
(5, 4, 11, '4.00', 1),
(6, 4, 5, '11.00', 4),
(7, 5, 12, '4.00', 1),
(8, 6, 6, '7.00', 2),
(9, 6, 9, '11.00', 1),
(10, 7, 5, '11.00', 1),
(11, 8, 7, '7.00', 2),
(12, 8, 21, '10.00', 1),
(13, 9, 19, '18.00', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_temp`
--

CREATE TABLE `detalle_temp` (
  `id` bigint(20) NOT NULL,
  `personaid` bigint(20) NOT NULL,
  `idproducto` bigint(20) NOT NULL,
  `precio` decimal(11,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `transaccionid` varchar(100) COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--

CREATE TABLE `imagen` (
  `id` bigint(20) NOT NULL,
  `productoid` bigint(20) NOT NULL,
  `img` varchar(100) COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `imagen` (`id`, `productoid`, `img`) VALUES
(8, 1, 'pro_d1369b69a9f68d79fc954f5cb0892659.jpg'),
(19, 8, 'pro_7b4542b10a9d29fb0c02df2d7ffcfc14.jpg'),
(20, 9, 'pro_d41179a3e4d89e02892a2e38b182fb19.jpg'),
(21, 10, 'pro_453b012b906b2d157c635fd68cf95d04.jpg'),
(22, 11, 'pro_76319e5fb9c8388519f14c7175170317.jpg'),
(23, 13, 'pro_488416a03fb8a9318e08f82780394dc4.jpg'),
(27, 15, 'pro_2effeee43146e62b2fcd14811e688e52.jpg'),
(28, 16, 'pro_4ba3eb264e973e1e1e5578890e33206a.jpg'),
(29, 17, 'pro_829831d29f33ffbf49514dd815fde7e3.jpg'),
(30, 18, 'pro_c1b37882753372543694d12f09ca7a5e.jpg'),
(31, 19, 'pro_4c84b1685a727bcc4d362f75f7a0d4d5.jpg'),
(32, 20, 'pro_bbbb9a3cbcde0fe35056795e0c03c833.jpg'),
(33, 21, 'pro_37aa7707237cd650d883cfcaa58e4c7d.jpg'),
(34, 22, 'pro_43edded51180b0e4351221446048e80e.jpg'),
(35, 23, 'pro_4d175bb8d43965ee4bf234fb944a43e9.jpg'),
(36, 24, 'pro_06c2d24735b344eb770882d92b70b534.jpg'),
(37, 25, 'pro_b429e8150c7bfa7f7ace0ee8b81116fc.jpg'),
(38, 12, 'pro_e9241b01d03f67aa5392f2a82adade7d.jpg'),
(39, 25, 'pro_6dd29659babb45ccdd7baabe1b6c9cb9.jpg'),
(40, 4, 'pro_50c8a3e31aa667b2b60cb9b63f29d82c.jpg'),
(41, 5, 'pro_ea5b7ad937224a14a35f97e5903d7d21.jpg'),
(42, 6, 'pro_9d023deefff73626bac15a08f6923c44.jpg'),
(44, 7, 'pro_46e4847be213dc0243d6a2bb73441937.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo`
--

CREATE TABLE `modulo` (
  `idmodulo` bigint(20) NOT NULL,
  `titulo` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `descripcion` text COLLATE utf8_swedish_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `modulo`
--

INSERT INTO `modulo` (`idmodulo`, `titulo`, `descripcion`, `status`) VALUES
(1, 'Dashboard', 'Dashboard', 1),
(2, 'Usuarios', 'Usuarios del Sistema', 1),
(3, 'Clientes', 'Clientes tienda', 1),
(4, 'Productos', 'Todos los Producto', 1),
(5, 'Pedidos', 'Pedidos', 1),
(6, 'Categorias', 'Categorias Productos', 1),
(7, 'Suscriptores', 'Suscriptores del sitio web', 1),
(8, 'Contactos', 'Mensajes del formulario contacto', 1),
(9, 'Páginas', 'Páginas del sitio web', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `idpedido` bigint(20) NOT NULL,
  `referenciacobro` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `idtransaccionpaypal` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `datospaypal` text COLLATE utf8_swedish_ci DEFAULT NULL,
  `personaid` bigint(20) NOT NULL,
  `costo_envio` decimal(10,2) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `monto` decimal(11,2) NOT NULL,
  `tipopagoid` bigint(20) NOT NULL,
  `direccion_envio` text COLLATE utf8_swedish_ci DEFAULT NULL,
  `status` varchar(100) COLLATE utf8_swedish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`idpedido`, `referenciacobro`, `idtransaccionpaypal`, `datospaypal`, `personaid`, `costo_envio`, `fecha`, `monto`, `tipopagoid`, `direccion_envio`, `status`) VALUES
(1, NULL, '13P55105RB1538602', '{\"id\":\"23V36550MR308573P\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"48.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $48 \",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"13P55105RB1538602\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"48.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T00:06:32Z\",\"update_time\":\"2023-03-28T00:06:32Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T00:06:24Z\",\"update_time\":\"2023-03-28T00:06:32Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/23V36550MR308573P\",\"rel\":\"self\",\"method\":\"GET\"}]}', 7, '0.00', '2023-03-27 19:06:33', '48.00', 1, 'Av Hugo Ortiz, 16015', 'Completo'),
(2, NULL, '4T510097576897417', '{\"id\":\"4YU7455626047320G\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"48.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $48 \",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"4T510097576897417\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"48.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T00:08:24Z\",\"update_time\":\"2023-03-28T00:08:24Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T00:08:15Z\",\"update_time\":\"2023-03-28T00:08:24Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/4YU7455626047320G\",\"rel\":\"self\",\"method\":\"GET\"}]}', 7, '0.00', '2023-03-27 19:08:25', '48.00', 1, 'Av Hugo Ortiz, 16015', 'Completo'),
(3, NULL, '7E853339A8026605L', '{\"id\":\"0DP101920U350722F\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"48.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $48 \",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"7E853339A8026605L\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"48.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T00:09:02Z\",\"update_time\":\"2023-03-28T00:09:02Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T00:08:55Z\",\"update_time\":\"2023-03-28T00:09:02Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/0DP101920U350722F\",\"rel\":\"self\",\"method\":\"GET\"}]}', 7, '0.00', '2023-03-27 19:09:04', '48.00', 1, 'Av Hugo Ortiz, 16015', 'Completo'),
(4, NULL, '82H96157GX5851214', '{\"id\":\"59V5092543530312K\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"48.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $48 \",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"82H96157GX5851214\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"48.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T00:09:38Z\",\"update_time\":\"2023-03-28T00:09:38Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T00:09:30Z\",\"update_time\":\"2023-03-28T00:09:38Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/59V5092543530312K\",\"rel\":\"self\",\"method\":\"GET\"}]}', 7, '0.00', '2023-03-27 19:09:38', '48.00', 1, 'Av Hugo Ortiz, 16015', 'Completo'),
(5, NULL, '12E84614NG3972010', '{\"id\":\"0CB52919B86244929\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"4.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $4 \",\"soft_descriptor\":\"PAYPAL *TEST STORE\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"12E84614NG3972010\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"4.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T00:11:56Z\",\"update_time\":\"2023-03-28T00:11:56Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T00:11:47Z\",\"update_time\":\"2023-03-28T00:11:56Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/0CB52919B86244929\",\"rel\":\"self\",\"method\":\"GET\"}]}', 7, '0.00', '2023-03-27 19:12:02', '4.00', 1, 'Av Hugo Ortiz, 16015', 'Completo'),
(6, NULL, '5TM85744W25765206', '{\"id\":\"46797320E6233294D\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"28.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $28 \",\"soft_descriptor\":\"PAYPAL *TEST STORE\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"5TM85744W25765206\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"28.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T00:37:51Z\",\"update_time\":\"2023-03-28T00:37:51Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T00:37:29Z\",\"update_time\":\"2023-03-28T00:37:51Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/46797320E6233294D\",\"rel\":\"self\",\"method\":\"GET\"}]}', 41, '3.00', '2023-03-27 19:37:52', '28.00', 1, 'Av Hugo Ortiz, Santo Domingo', 'Completo'),
(7, NULL, '2E022526LE495220N', '{\"id\":\"3TE283613C007362T\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"14.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $14 \",\"soft_descriptor\":\"PAYPAL *TEST STORE\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"2E022526LE495220N\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"14.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T01:12:02Z\",\"update_time\":\"2023-03-28T01:12:02Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T01:11:48Z\",\"update_time\":\"2023-03-28T01:12:02Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/3TE283613C007362T\",\"rel\":\"self\",\"method\":\"GET\"}]}', 7, '3.00', '2023-03-27 20:12:03', '14.00', 1, 'Av Hugo Ortiz, Puyo', 'Completo'),
(8, NULL, '0XB76259AY526390N', '{\"id\":\"7JX79762P6116772V\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"27.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $27 \",\"soft_descriptor\":\"PAYPAL *TEST STORE\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"0XB76259AY526390N\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"27.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T01:20:13Z\",\"update_time\":\"2023-03-28T01:20:13Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T01:19:56Z\",\"update_time\":\"2023-03-28T01:20:13Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/7JX79762P6116772V\",\"rel\":\"self\",\"method\":\"GET\"}]}', 42, '3.00', '2023-03-27 20:20:14', '27.00', 1, 'Av 9 de Octubre, Santo Domingo', 'Completo'),
(9, NULL, '51N04445FY4576835', '{\"id\":\"1AE57141JM4273602\",\"intent\":\"CAPTURE\",\"status\":\"COMPLETED\",\"purchase_units\":[{\"reference_id\":\"default\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"39.00\"},\"payee\":{\"email_address\":\"sb-qeezt25382058@business.example.com\",\"merchant_id\":\"F2MCMVEC4YKNN\"},\"description\":\"Compra de artículos en Tienda Virtual por $39 \",\"soft_descriptor\":\"PAYPAL *TEST STORE\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"1 Main St\",\"admin_area_2\":\"San Jose\",\"admin_area_1\":\"CA\",\"postal_code\":\"95131\",\"country_code\":\"US\"}},\"payments\":{\"captures\":[{\"id\":\"51N04445FY4576835\",\"status\":\"COMPLETED\",\"amount\":{\"currency_code\":\"USD\",\"value\":\"39.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"ELIGIBLE\",\"dispute_categories\":[\"ITEM_NOT_RECEIVED\",\"UNAUTHORIZED_TRANSACTION\"]},\"create_time\":\"2023-03-28T15:18:34Z\",\"update_time\":\"2023-03-28T15:18:34Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-poyjd25382939@personal.example.com\",\"payer_id\":\"G33BCF4P5J7KJ\",\"address\":{\"country_code\":\"US\"}},\"create_time\":\"2023-03-28T15:18:05Z\",\"update_time\":\"2023-03-28T15:18:34Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v2/checkout/orders/1AE57141JM4273602\",\"rel\":\"self\",\"method\":\"GET\"}]}', 43, '3.00', '2023-03-28 10:18:35', '39.00', 1, 'Av 9 de Octubre y Lucindo Ortega, Puyo', 'Completo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `idpermiso` bigint(20) NOT NULL,
  `idrol` bigint(20) NOT NULL,
  `idmodulo` bigint(20) NOT NULL,
  `r` int(11) NOT NULL DEFAULT 0,
  `w` int(11) NOT NULL DEFAULT 0,
  `u` int(11) NOT NULL DEFAULT 0,
  `d` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`idpermiso`, `idrol`, `idmodulo`, `r`, `w`, `u`, `d`) VALUES
(119, 2, 1, 1, 1, 0, 0),
(120, 2, 2, 0, 0, 0, 0),
(121, 2, 3, 0, 0, 0, 0),
(122, 2, 4, 0, 0, 0, 0),
(123, 2, 5, 0, 0, 0, 0),
(124, 2, 6, 0, 0, 0, 0),
(167, 9, 1, 0, 0, 0, 0),
(168, 9, 2, 1, 1, 1, 0),
(169, 9, 3, 0, 0, 0, 0),
(170, 9, 4, 0, 0, 0, 0),
(171, 9, 5, 0, 0, 0, 0),
(172, 9, 6, 0, 0, 0, 0),
(290, 3, 1, 1, 0, 0, 0),
(291, 3, 2, 0, 0, 0, 0),
(292, 3, 3, 0, 0, 0, 0),
(293, 3, 4, 0, 0, 0, 0),
(294, 3, 5, 1, 0, 0, 0),
(295, 3, 6, 0, 0, 0, 0),
(296, 3, 7, 0, 0, 0, 0),
(297, 3, 8, 0, 0, 0, 0),
(298, 3, 9, 0, 0, 0, 0),
(479, 1, 1, 1, 1, 1, 1),
(480, 1, 2, 1, 1, 1, 1),
(481, 1, 3, 1, 1, 1, 1),
(482, 1, 4, 1, 1, 1, 1),
(483, 1, 5, 1, 1, 1, 1),
(484, 1, 6, 1, 1, 1, 1),
(485, 1, 7, 1, 1, 1, 1),
(486, 1, 8, 1, 1, 1, 1),
(487, 1, 9, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `idpersona` bigint(20) NOT NULL,
  `identificacion` varchar(30) COLLATE utf8_swedish_ci NOT NULL,
  `nombres` varchar(80) COLLATE utf8_swedish_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8_swedish_ci NOT NULL,
  `edad` int(3) DEFAULT NULL COMMENT 'edad persona',
  `email_user` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `password` varchar(75) COLLATE utf8_swedish_ci NOT NULL,
  `nombrefiscal` varchar(80) COLLATE utf8_swedish_ci NOT NULL,
  `direccion` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `token` varchar(80) COLLATE utf8_swedish_ci NOT NULL,
  `rolid` bigint(20) NOT NULL,
  `datecreated` datetime NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`idpersona`, `identificacion`, `nombres`, `apellidos`, `telefono`, `edad`, `email_user`, `password`, `nombrefiscal`, `direccion`, `token`, `rolid`, `datecreated`, `status`) VALUES
(2, '1', 'Pablo', 'Morales', '987332327', NULL, 'pablo@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '', '', '', 2, '2023-03-18 20:08:47', 1),
(7, '1600560872', 'Joe', 'Caiza', '0987332327', NULL, 'caizajoe@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '', '', '', 1, '2023-03-18 21:37:28', 1),
(8, '1600327710', 'Nelson Fabian', 'Caiza Quinatoa', '32887534', NULL, 'asosercam@yahoo.com', '6b8ae3329753d46a4af298ff5b30508b0697a279de761189985bfc7b879e25f2', '', '', '', 2, '2023-03-18 22:55:16', 0),
(9, '1600560880', 'TANIA MARICELA', 'CAIZA QUINATOA', '0987332327', NULL, 'taniacaiza09@admin.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '', '', '', 9, '2023-03-18 22:56:17', 0),
(20, '1600745212', 'Carmen', 'Guarnizo', '0997618387', NULL, 'cliente1@admin.com', '15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225', '', 'Av 9 de Octubre y Lucindo Ortega', '', 3, '2023-03-20 08:42:05', 1),
(30, '160012345', 'Jose', 'Alvarado', '098987455', NULL, 'josealva@gmail.com', '123456', '', '9 DE ABRIL', '', 3, '2023-03-20 09:48:35', 0),
(31, '1600456655', 'Jose', 'Alvarado', '0997618387', NULL, 'joselito@admin.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '', '9 de Abril y Moreno Suarez, Esquina', '', 3, '2023-03-20 09:51:49', 0),
(32, '123', 'Marco', 'Caceres', '09745664', NULL, 'marcoc@info.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '', 'Av Hugo Ortiz', '', 3, '2023-03-20 11:50:17', 0),
(39, '', 'Fernando', 'Moran', '7844454', NULL, 'oskalyjavier@gmail.com', 'e22f0cf5c9961aed1e8bf0f00634d779a96c54154dd2339682fdc3a9c39bfda8', '', '', '', 3, '2023-03-27 13:08:19', 0),
(40, '', 'Vanessa', 'Granja', '9874556', NULL, 'victorell@gmail.com', '57b18d3d92060defc0f990bfea7754c82340db141332fb15ae4ea66802b0ee1d', '', '', '', 3, '2023-03-27 13:30:57', 0),
(41, '', 'Monica', 'Jimenez', '98874454', NULL, 'monica97@gmail.com', 'f2f4f876366521e3dc5569a120e6c8b9b62aa22b16c4214075985c3919d2a723', '', '', '', 3, '2023-03-27 19:36:48', 0),
(42, '', 'Mario', 'Benitez', '987455412', NULL, 'mariobenitez@gmail.com', '5c2dd27540bfd1c04aec9d3fc126a91df897ccaeaba9d4095eecb04e45d43b68', '', '', '', 3, '2023-03-27 20:19:13', 0),
(43, '', 'Mario', 'Gomez', '98745445', NULL, 'mariog@gmail.com', '87d0bde8bc7be231943a8aeab86685b37ad8f847fa10f244f682328b37ec0ad2', '', '', '', 3, '2023-03-28 10:17:13', 0),
(44, '2300548167', 'Enrique', 'Villalta', '0989031483', NULL, 'enrique-vimac@hotmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '', '', '', 1, '2025-04-21 12:53:28', 1),
(45, '', 'Amada', 'Macas', '981854064', NULL, 'amadamacasr@hotmail.com', '49858813edf0ba4b82cd5383bb2990665b4b8bd28c50870371d54228e6d35fcf', '', '', '', 3, '2025-04-23 12:41:56', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idproducto` bigint(20) NOT NULL,
  `idcategoria` bigint(20) NOT NULL,
  `codigo` varchar(30) COLLATE utf8_swedish_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `descripcion` text COLLATE utf8_swedish_ci NOT NULL,
  `precio` decimal(11,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `imagen` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `datecreated` datetime NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idproducto`, `idcategoria`, `codigo`, `nombre`, `descripcion`, `precio`, `stock`, `imagen`, `datecreated`, `status`) VALUES
(1, 1, '1234567', 'Galon Ambiental', '<p>Galones de Ambiental</p>', '1.40', 145, '', '2023-03-23 09:31:16', 0),
(2, 1, '789456', 'Producto 1', '<p>123456</p>', '7.50', 10, '', '2023-03-23 10:01:31', 0),
(3, 1, '234567', 'Prdocuto 3', '<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\"> <tbody> <tr> <td style=\"width: 47.9977%;\">ID</td> <td style=\"width: 47.9977%;\">COSA</td> </tr> <tr> <td style=\"width: 47.9977%;\">perro</td> <td style=\"width: 47.9977%;\">animal</td> </tr> <tr> <td style=\"width: 47.9977%;\">pollo</td> <td style=\"width: 47.9977%;\">ave</td> </tr> </tbody> </table>', '7.50', 10, '', '2023-03-23 10:07:23', 0),
(4, 1, '11111', 'Laptop ENV', 'Laptop intel coreI7', '580.00', 20, '', '2023-03-26 16:10:01', 1),
(5, 4, '11112', 'Epson 4260', 'Impresora tinta continua', '340.00', 20, '', '2023-03-26 16:13:00', 1),
(6, 4, '11113', 'Epson 3250', 'Impresora tinta continua', '290.00', 20, '', '2023-03-26 16:14:19', 1),
(7, 1, '11114', 'Laptop HP', 'Laptop hp ryzen3', '295.00', 20, '', '2023-03-26 16:15:16', 1),
(8, 2, '3400', 'Blusa Amarila con Rayas Blancas', 'Código: MBA-0034 Color: Amarilla Talla: M', '4.00', 15, '', '2023-03-26 16:16:12', 0),
(9, 6, '1100', 'Pantalones Gabardina Modelo 2', 'Incluye correa Talla: Desde la 30 hasta la 36', '11.00', 17, '', '2023-03-26 16:17:13', 0),
(10, 6, '1200', 'Pantalón Calvin Klein', 'Talla: Desde la 30 hasta la 38', '17.00', 15, '', '2023-03-26 16:17:59', 0),
(11, 4, '1800', 'Bermuda cuadros naranja', 'Talla: 12 meses Color: Azul y naranja', '4.00', 20, '', '2023-03-26 16:18:55', 0),
(12, 4, '13004', 'Short Rojo lazos', 'Talla: 3 meses Color : Rojo', '4.00', 10, '', '2023-03-26 16:19:44', 0),
(13, 4, '1900', 'Body Amarillo Elefante', 'Talla: 0-3 meses Color: Amarillo', '3.00', 15, '', '2023-03-26 16:20:53', 0),
(15, 4, '144', 'Bermuda Cuadros Rojos', 'Talla: 6 meses Color: Celeste con Rojo', '2.00', 10, '', '2023-03-26 16:24:56', 0),
(16, 4, '14554', 'Leggin Morado con Verde', 'Talla: 9-12 meses Color: Morado con verde', '4.00', 12, '', '2023-03-26 16:26:45', 0),
(17, 4, '1447740', 'Camiseta Cuadros Naranjas', 'Talla: 3 meses', '5.00', 15, '', '2023-03-26 16:27:42', 0),
(18, 3, '11000', 'Camiseta Gris Polo XL', 'Código:HCXL-0001 Color: Gris Talla: XL', '12.00', 15, '', '2023-03-26 16:28:48', 0),
(19, 3, '12215', 'Camiseta Verde Llana M', 'Código: HCM-0012 Color: Verde Talla: M', '18.00', 15, '', '2023-03-26 16:29:59', 0),
(20, 3, '112344', 'Camiseta Naranja Tokio L', 'Código:HCL-0009 Color: Naranja Talla: L', '12.00', 20, '', '2023-03-26 16:31:41', 0),
(21, 3, '12001', 'Camiseta Negra Tommy S', 'Código:HCS-0012 Color: Negra Talla: S, M', '10.00', 20, '', '2023-03-26 16:33:32', 0),
(22, 3, '16001', 'Camiseta Negra Stayhome S', '10', '10.00', 8, '', '2023-03-26 16:34:38', 0),
(23, 3, '14001', 'Camiseta Rosa Trapeado S', 'Código:MCS-0014 Color: Rosa Talla: S', '10.00', 7, '', '2023-03-26 16:35:24', 0),
(24, 3, '19001', 'Camiseta Naranja Llana', 'Código:MCS-0019 Color: Naranja Talla: S', '14.00', 9, '', '2023-03-26 16:36:06', 0),
(25, 5, '20001', 'Perfume Calvin Klein Eternity Summer', 'Perfume para hombres 100 m', '10.00', 4, '', '2023-03-26 16:37:06', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idrol` bigint(20) NOT NULL,
  `nombrerol` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `descripcion` text COLLATE utf8_swedish_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idrol`, `nombrerol`, `descripcion`, `status`) VALUES
(1, 'Administrador', 'Acesso a todo el Sistema', 1),
(2, 'Supervisores', 'Supervisores', 1),
(3, 'Clientes', 'Clientes', 1),
(9, 'Usuario', 'Usuario', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipopago`
--

CREATE TABLE `tipopago` (
  `idtipopago` bigint(20) NOT NULL,
  `tipopago` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `tipopago`
--

INSERT INTO `tipopago` (`idtipopago`, `tipopago`, `status`) VALUES
(1, 'Paypal', 1),
(2, 'Efectivo', 1),
(3, 'Tarjeta', 1),
(4, 'Cheque', 1),
(5, 'Deposito Bancario', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idcategoria`);

--
-- Indices de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idpedido` (`pedidoid`),
  ADD KEY `idproducto` (`productoid`),
  ADD KEY `productoid` (`productoid`);

--
-- Indices de la tabla `detalle_temp`
--
ALTER TABLE `detalle_temp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idproducto` (`idproducto`),
  ADD KEY `personaid` (`personaid`);

--
-- Indices de la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productoid` (`productoid`) USING BTREE;

--
-- Indices de la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`idmodulo`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`idpedido`),
  ADD KEY `idpersona` (`personaid`),
  ADD KEY `idtipopago` (`tipopagoid`),
  ADD KEY `tipopagoid` (`tipopagoid`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`idpermiso`),
  ADD KEY `idrol` (`idrol`),
  ADD KEY `idmodulo` (`idmodulo`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`idpersona`),
  ADD KEY `rolid` (`rolid`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproducto`),
  ADD KEY `idcategoria` (`idcategoria`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idrol`);

--
-- Indices de la tabla `tipopago`
--
ALTER TABLE `tipopago`
  ADD PRIMARY KEY (`idtipopago`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idcategoria` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `detalle_temp`
--
ALTER TABLE `detalle_temp`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `imagen`
--
ALTER TABLE `imagen`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `modulo`
--
ALTER TABLE `modulo`
  MODIFY `idmodulo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idpedido` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `idpermiso` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=488;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `idpersona` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idproducto` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `idrol` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tipopago`
--
ALTER TABLE `tipopago`
  MODIFY `idtipopago` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD CONSTRAINT `detallepedido_ibfk_1` FOREIGN KEY (`pedidoid`) REFERENCES `pedido` (`idpedido`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`productoid`) REFERENCES `productos` (`idproducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_temp`
--
ALTER TABLE `detalle_temp`
  ADD CONSTRAINT `detalle_temp_ibfk_1` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`idproducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD CONSTRAINT `imagen_ibfk_1` FOREIGN KEY (`productoid`) REFERENCES `productos` (`idproducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`personaid`) REFERENCES `persona` (`idpersona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`tipopagoid`) REFERENCES `tipopago` (`idtipopago`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD CONSTRAINT `permisos_ibfk_1` FOREIGN KEY (`idrol`) REFERENCES `rol` (`idrol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `permisos_ibfk_2` FOREIGN KEY (`idmodulo`) REFERENCES `modulo` (`idmodulo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`rolid`) REFERENCES `rol` (`idrol`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`idcategoria`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
