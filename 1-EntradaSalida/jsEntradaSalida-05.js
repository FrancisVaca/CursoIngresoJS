/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
    //creo la variables para cada campo

{	let nombre;
	let edad;
  
	//pongo la id del html de donde va a ir el valor de la variable en la caja de texto

	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	//Aqui combino en la alerta la cadena de texto mas los datos de la variable utilizndo el +
	

	//alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	alert(`Usted se llama ${nombre} y tiene ${edad} años`)




}

