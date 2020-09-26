function ampliar(fich,ancho,alto)
{
		imagen = new Image ( );
		imagen.src = "/imagenes/"+fich;
		
		if (navigator.appName == 'Netscape')
		{
			ancho = 425;
			alto = 430;
		}else{
			ancho = parseInt(imagen.width + 19);
			alto = parseInt(imagen.height + 5);
		}
		anchofinal = ancho+"";
		altofinal = alto +"";
    myWindow = window.open('/foto.asp?imagen='+fich,'windowName','width='+eval(anchofinal)+',height='+eval(altofinal)+',resizable=yes,scrollbars=yes');
	 	myWindow.focus();
}  