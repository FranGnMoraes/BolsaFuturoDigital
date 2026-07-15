export function validarFormulario() {
    const formulario = document.getElementById('formulario-contato');

        formulario.addEventListener('submit', function(event) {
            const idade = document.getElementById('idade').value;

            if (idade < 19) {
                event.preventDefault(); 
                
                alert('A idade mínima é 18 anos.');
            }
        }
    }
};