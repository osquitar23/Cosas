function secreto(){
	var secret=document.getElementById("numero").value
	if(secret==17){
		window.alert("Lo has conseguido")
	}
	else{
		window.alert("El numero no es correcto")
	}
}

function sumar(){
	var numero1=document.getElementById("unidad").value
	var numero2=document.getElementById("precio").value
	var resultado=numero1*numero2
	
	window.alert(resultado)
}
function mostrado(){
	var inicio=document.getElementById("inicio").value
	var fin=document.getElementById("fin").value
	
	for(inicio=inicio;inicio<fin;inicio++){
		window.alert(inicio)
	}
}
