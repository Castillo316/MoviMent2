const fila = document.querySelector('.contenedor-carousel');
const Peliculas = document.querySelectorAll('pelicula');

const flechaInzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ----- ----- Event Listener para la flecha derecha ---- ---- ----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo-classList.remove('activo')
    }
});


// ----- ----- Event Listener para la flecha izquierda ---- ---- ----
flechaInzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previusSibling){
        indicadorActivo.previusSibling.classList.add('activo');
        indicadorActivo-classList.remove('activo')
    }
});

// ----- ----- paginacion ---- ---- ----

const numeroPaginas = Math.ceil(Peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');

    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
    
}

// ----- ----- Hover ---- ---- ----

Peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseEnter', (e) => {
        const elemento = e .currentTarget;
        setTimeout(() => {
            Peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            Element.classList.add('hover');
        }, 300);

    });

    
});
