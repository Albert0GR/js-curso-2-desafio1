
//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1') 

titulo.innerHTML = 'Hora del Desafío'

//Crea una función que muestre en la consola el mensaje 
//"El botón fue clicado" siempre que se presione el botón "Console".

function botonConsole(){
    console.log('El botón fue clicado');
}

/*Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con 
el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti". */

function botonPrompt(){
    let ciudad = prompt('Ingresa una ciudad de  Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}


// Crea una función que muestre una alerta con el mensaje: 
// "Yo amo JS" siempre que se presione el botón "Alerta".

function botonAlerta(){
    alert("Yo amo JavaScript")
}


// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function botonSuma(){
    let numero1 =parseInt(prompt('Ingresa primer numero'))
    let numero2 =parseInt(prompt('Ingresa segundo numero'))
    let suma= numero1 + numero2
    alert(`El resultado de ${numero1} + ${numero2} es ${suma}`)
}





