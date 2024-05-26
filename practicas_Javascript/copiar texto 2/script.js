document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyButton');
    const textToCopy = document.getElementById('textoACopiar').innerText;

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            copyButton.innerHTML = '<i class="fas fa-check"></i>'; // Cambia el icono temporalmente
            setTimeout(() => {
                copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            }, 4000); // Cambiar de nuevo el icono después de 4 segundos
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
            alert('Hubo un error al intentar copiar el texto.');
        }
    });
});
