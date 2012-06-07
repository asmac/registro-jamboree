<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<title>Eventos Nacionales</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.css" />
	<link href="/assets/css/mobiscroll-2.0.custom.min.css" rel="stylesheet" type="text/css">
	<link href="/assets/css/bootstrap.css" rel="stylesheet">
	<link href="/assets/css/asmac.css" rel="stylesheet">
	<link href="/assets/css/bootstrap-responsive.css" rel="stylesheet">
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
	<!-- Barra de navegación -->
	<div class="navbar navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</a>

				<a href="#" class="brand"><span>Scouts</span></a>

				<div class="btn-group pull-right">
					<a class="btn btn-logout dropdown-toggle" data-toggle="dropdown" href="#">
						<i class="icon-user"></i> Cuenta
						<span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li><a href="#">Editar Perfil</a></li>
						<li class="divider"></li>
						<li><a href="#">Cerrar Sesión</a></li>
					</ul>
				</div>
				
				<nav class="nav-collapse">
					<ul class="nav">
						<li><a href="#" title=""><i class="icon-dash icon-light-purple"></i>  Panel</a></li>
						<li class="divider-vertical"></li>		
						<li><a href="#" title=""><i class="icon-check icon-light-purple"></i> Registro</a></li>
						<li class="divider-vertical"></li>
						<li><a href="#" title=""><i class="icon-nameplate icon-light-purple"></i> Staff</a></li>
						<li class="divider-vertical"></li>
						<li><a href="#" title=""><i class="icon-flag icon-light-purple"></i>  Campos</a></li>
						<li class="divider-vertical"></li>
						<li><a href="#" title=""><i class="icon-users icon-light-purple"></i>  Membresía</a></li>
						<li class="divider-vertical"></li>
						<li><a href="#" title=""><i class="icon-cog icon-light-purple"></i>   Configuración</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
	<!-- Termina barra de navegación -->

	<!-- Area de contenido -->
	<div class="container">
		<div class="row-fluid">
			<div class="page-header-top span12">
				<h1>Panel de Inicio</h1>
			</div>
		</div>

		<div class="row-fluid">
			<aside class="span3">					
				<ul id="side-nav" class="nav nav-tabs nav-stacked">
					<li><a id="show" href="#"><i class="icon-check"></i> Nuevo Equipo</a></li>
					<li><a id="clear" href="#"><i class="icon-list"></i> <span class="hidden-tablet">Equipo</span> Pre-Registrado</a></li>
					<li><a href="#"><i class="icon-cog"></i> Configuraciones</a></li>
				</ul>
			</aside>

			<div class="span9">
				<div class="widget">
					<div class="widget-header">
						<h3>Módulos</h3>
					</div>
					<div class="widget-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

						<input id="i" name="i" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Termina area de contenido -->


	<script src="/assets/js/jquery.min.js"></script>
	<script src="/assets/js/mobiscroll.core-2.0.js"></script>
	<script src="/assets/js/mobiscroll.datetime-2.0.js"></script>
	<script src="/assets/js/mobiscroll.select-2.0.js"></script>
	<script src="/assets/js/mobiscroll.jqm-2.0.js"></script>
	<script src="/assets/js/bootstrap.min.js"></script>
	<script type="text/javascript" charset="utf-8">
	$(function(){
		$('#i').scroller({
			preset: 'date',
			dateFormat: 'yyyy-mm-dd',
			theme: 'jqm',
			display: 'modal',
			mode: 'clickpick',
			dateOrder: 'mmD ddy'
		});

		$('#show').click(function(){
			alert2('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididun');
			return false;
		});

	})
	</script>
	<script src="/assets/js/fancy-alert.js"></script>
</body>
</html>