let encuesta = prompt ('Queres realizar una encuesta?')

while (encuesta != "salirDelWhile"){
    switch (encuesta.toUpperCase()){

        case 'SI':
            alert ("Continuemos");
            encuesta="salirDelWhile";
            break;
        case 'NO':
            alert ("Gracias, adios.");
            break;
        default:
            alert ("Ingrese si o no, por favor");
            break;
    }
}   

let nombreDeUsuario = prompt("Ingresar nombre de usuario");

if (nombreDeUsuario == " ") {
    alert("Por favor ingresa un nombre de usuario");
}
else {
    alert("Hola " + nombreDeUsuario);
}

let edad = prompt ("Cuantos años tenes?");

if (edad >=18) { 
    alert ("Tienes edad para continuar con la encuesta" );
}else {
    alert ("No tienes edad suficiente para realizar la encuesta. Adios");
    
}

let amigosFutbol = '\n' + '\n' + " 1 - " + prompt("Ingrese el nombre de sus 4 amigo/as ") + '\n'

for (let i = 0; i < 3; i++){
    amigosFutbol += " " + (i + 1) + " - " + prompt("Ingrese el nombre de sus 4 amigo/as ") + "\n"
} 

alert("Sus amigos seleccionados son: " + amigosFutbol + '\n' + "Gracias por la encuesta")

