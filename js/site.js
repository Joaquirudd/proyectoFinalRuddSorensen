/* 

Realicé un simulador orientado a ayudar a los profesores. La intencion del mismo es que los profesores puedan calcular la calificacion final de sus alumnos.
Primero ellos deben escribir el nombre del alumno. Luego, en los otros inputs, escribirán tres números que serán las calificaciónes.
El sumilador se encargará de sumar las tres calificaciones, para reflejar en la pantalla la calificacion final.

Luego, utilicé la API "EmailJS" para que el simulador sea capaz de enviarle un email al "instituto" informando sobre la calificacion del alumno.

Ingresando al email: institutoproyectofinal@gmail.com ; contraseña: proyectofinalruddsorensen ; podrá verificar que los email se envian correctamente.

*/

//API para enviar el email:
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_f1vaxjv';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

//Declaraciones de variables:
let nombreAlumno = document.getElementById("nombreAlumno") 

let calificacion1 = document.getElementById("calificacion1")
let calificacion2 = document.getElementById("calificacion2")
let calificacion3 = document.getElementById("calificacion3")

const calificacionFinal = document.getElementById("calificacionFinal")

//Librería SweetAlert, donde saldrá un cartel anunciando que el calculo se realizó con exito:
const funcionSA = () => {
    Swal.fire(
        'El calculo ah sido realizado con exito',
        'Toca el boton para ver el resultado final',
        'success'
    )
}


const btnBoton = document.getElementById("boton")
btnBoton.addEventListener("click", calificacionAlumnos) 

btnBoton.addEventListener("click", funcionSA) 

//Funcion que realiza la sumatoria de las tres calificaciones escritas, dando como resultado la calificacion final:
function calificacionAlumnos() { 
    const opNombre = String(nombreAlumno.value)
    const op1 = parseFloat(calificacion1.value)
    const op2 = parseFloat(calificacion2.value)
    const op3 = parseFloat(calificacion3.value)

    let calificacionFinalResultado = (Number(op1 + op2 + op3) / 3);

    if (calificacionFinalResultado >= 7){
        calificacionFinal.innerText = opNombre + " aprobó la materia con una calificación de " + calificacionFinalResultado
    } else{
        calificacionFinal.innerText = opNombre + " desaprobó la materia con una calificacion de " + calificacionFinalResultado
    }
   
}