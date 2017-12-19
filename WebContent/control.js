function comprobar(){
	
	var primo= window.prompt("Dime un numero primo del 1-10")
	
	if(primo==1 || primo==2 || primo==3){
		
	window.alert("Lo has conseguido")
	
	}
	/*else{
		window.alert("Lo sentimos, has fallado.\n Vuelve a intentarlo")
	}*/
}
function viajar(){
	var viaje= window.prompt("Pon tu destino")
	
	switch(viaje){
	case "Roma":
		window.alert("Su coste es de: 500€")
	break;
	
	case "Paris":
		window.alert("Su coste es de: 450€")
		break;
		
	case "París":
		window.alert("Su coste es de: 450€")
	break;
	
	case "Berlin":
		window.alert("Su coste es de: 387,56€")
	break;
	
	default:
		window.alert("Otras ciudades\n Pida factura")
		
	
	}
	
}