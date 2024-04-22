export const crearTarjeta = (titulo,texto)=>{
    const seccion = document.createElement('section');
    seccion.classList.add('seccion');
    const title = document.createElement('h2');
    title.innerHTML = titulo;
    seccion.appendChild(title);
    const parrafo = document.createElement('p');
    parrafo.innerHTML = texto;
    seccion.appendChild(parrafo);  
    return seccion;

} 