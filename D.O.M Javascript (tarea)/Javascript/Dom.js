import { crearDiv } from "./div.js";
import { crearTarjeta } from "./tarjeta.js";


const crearCalculadora = () => {
    const calculadora = document.createElement('div');
    calculadora.classList.add('calculadora');

    const pantalla = document.createElement('div');
    pantalla.classList.add('pantalla');
    pantalla.innerHTML = '0';
    calculadora.appendChild(pantalla);

    
    const botones = document.createElement('div');
    botones.classList.add('botones');

    const botonesTextos = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '='];

    botonesTextos.forEach(texto => {
        const boton = document.createElement('button');
        boton.innerHTML = texto;
        boton.addEventListener('click', () => {
            manejarBoton(boton.innerHTML);
        });
        botones.appendChild(boton);
    });

    calculadora.appendChild(botones);
    document.body.appendChild(calculadora);
};


const manejarBoton = (texto) => {
    const pantalla = document.querySelector('.pantalla');
    let valor = pantalla.innerHTML;

    if (texto === 'C') {
        pantalla.innerHTML = '0';
    } else if (texto === '=') {
        pantalla.innerHTML = eval(valor);
    } else {
        if (valor === '0') {
            pantalla.innerHTML = texto;
        } else {
            pantalla.innerHTML += texto;
        }
    }
};


document.body.appendChild(crearDiv("BIENVENIDOS"));
document.body.appendChild(crearTarjeta("Calculadora de operaciones basicas "));
const division = document.createElement('p');
division.innerHTML = "kevin";
division.id = "hola";
document.body.appendChild(division);


crearCalculadora();


let divCSS = document.getElementById("hola");
divCSS.style.color = "red";
