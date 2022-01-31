/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let n1;
    let n2;
    let res;

	n1 = parseInt(document.getElementById("txtIdNumeroUno").value);

    n2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	res = n1 + n2;

	alert("El resultado es " + res );

	
}
