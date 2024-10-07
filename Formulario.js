 // Seleccionar el formulario y los elementos

'use strict'
 const formulario = document.getElementById('Formulario');

 // Función para manejar el envío del formulario
 formulario.addEventListener('submit', function(event) {

     // Prevenir el envío por defecto del formulario
     event.preventDefault();

     // Obtener los datos del formulario
     //let esValido = true;

    function validar(){
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        validarNombre(nombre);
        validarApellido(apellido);
        validarEmail(email);

    }



        if (nombre === '') {
            alert('Por favor complete todos los campos', 'El nombre es requerido.');
            esValido = false;
        }

        if (apellido === '') {
            alert('Por favor complete todos los campos', 'El apellido es requerido.');
            esValido = false;
        }
       
        if (email === '') {
            alert('Por favor complete todos los campos', 'El email es requerido.');
            esValido = false;
       
        }

        console.log('nombre:' ,nombre);
        console.log('apellido:' ,apellido);
        console.log('correo electronico:' ,email);

    alert('Formulario enviado con éxito.');
            
        
    
    
    });
    
