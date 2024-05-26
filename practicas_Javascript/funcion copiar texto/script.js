document.getElementById('copyButton').addEventListener('click', async () => {
    const boton = document.getElementById('copyButton');
    const texto = document.getElementById('textoACopiar').innerText;
    
    try {
        await navigator.clipboard.writeText(texto);
        boton.innerText = 'Copiado';
        setTimeout(() => {
            boton.innerText = 'Copiar Texto';
        }, 4000); // Cambiar de nuevo el texto después de 4 segundos
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
});
