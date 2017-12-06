// $ <- hace referencia a un objeto jQuery
const logNative = document.getElementById('log');
//console.log(log.innerHTML);

$(document).ready(function(){ 
	// 
	console.log('jQuery is loaded');
	// Selector CSS por ID, en reemplazo de document.getElementById
	const log = $('#log').html('<p>Reemplazar h3</p>');
	console.log(log);

	// Añadir contenido a una etiqueta (siempre es al final del contenido)
	// Selector CSS por clase.
	$('.important').append('<p>Texto añadido</p>');

	// $('#id') <- ID. Todos los elementos cuyo atributo id sea igual a
	// $('.class') <- Clases. Todos los elementos cuyo atributo class sea igual a
	// $('*') <- Wildcard. Todos los elementos del DOM
	// $("p") <- Tag o etiqueta. Todos las etiquetas p dentro de la página
	// $("[atributo='valor']") <- Atributo. Todas las etiquetas cuyo atributo type sea igual a text
	// $("p::first-line") <- Pseudo elemento. 

	// A todas las etiquetas de tipo texto, cambiarle el atributo value por 'Caja de texto'
	$("[type='text']").val('Caja de texto');

	// Método attr: Reemplaza el valor de un atributo específico
	// ('input#name').attr('placeholder', 'Enter your name');

	$("ul.dias > li").click(function(event){
		// console.log('click', $(this).text());
	});

	$("ul.dias > li").dblclick(function(event){
		// console.log('click', $(this).text());
	});

	$("ul.dias > li").on('click mouseover', function(event){
		// console.log('clicked', $(this).text());
	})

	$(".formulario > input").focus(function(event){
		// console.log('Focus', $(this).val());
	})

	$(".formulario > input").blur(function(event){
		// console.log('Blur', $(this).val());
	})

	//$("ul.dias").show();


	jQuery.fx.speeds.tortuga = 4000;
	jQuery.fx.speeds.veloz = 100;

	// $("ul.dias").fadeIn("veloz");

	$("#hideDias").click(function(){
		$("ul.dias").hide();
	})


	$("#fadeOutDias").click(function(){
		$("ul.dias").fadeOut("tortuga");
	})

	$("ul.dias").slideDown('tortuga');

	$("#slideUpDias").click(function(){
		$("ul.dias").slideUp("tortuga", function(){
			$("#slideUpDias").remove();	
		});
	})






})