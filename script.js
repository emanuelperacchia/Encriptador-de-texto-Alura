function encriptar(text) {
    let encript = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("respuesta").innerHTML = `<h3 id="result">${encript}</h3>`;
}

function desencriptar(text) {
    let desencript = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("respuesta").innerHTML = `<h3 id="result">${desencript}</h3>`;
}

function entradaIncorrecta() {
    let advertencia = document.getElementsByClassName("texto-advertencia");
    for (let i = 0; i < advertencia.length; i++) {
        advertencia[i].classList.remove('hidden');
        advertencia[i].classList.add('aparece');
    }
    setTimeout(function () {
        for (let i = 0; i < advertencia.length; i++) {
            advertencia[i].classList.remove('aparece');
            advertencia[i].classList.add('desaparece');
        }
    }, 2000);
    setTimeout(function () {
        for (let i = 0; i < advertencia.length; i++) {
            advertencia[i].classList.remove('desaparece');
            advertencia[i].classList.add("hidden");
        }
    }, 4000);
}

function mostrar() {
    let muñeco = document.getElementsByClassName("muñeco");
    for (let i = 0; i < muñeco.length; i++) {
        muñeco[i].classList.add('hidden');
    }
    let resultado = document.getElementsByClassName("resultado");
    for (let i = 0; i < resultado.length; i++) {
        resultado[i].classList.remove('hidden');
    }
}

function animacion() {
    let confirmar = document.getElementsByClassName("check");
    for (let i = 0; i < confirmar.length; i++) {
        confirmar[i].classList.remove('hidden');
        confirmar[i].classList.add('aparece');
    }
    setTimeout(function () {
        for (let i = 0; i < confirmar.length; i++) {
            confirmar[i].classList.remove('aparece');
            confirmar[i].classList.add('desaparece');
        }
    }, 2000);
    setTimeout(function () {
        for (let i = 0; i < confirmar.length; i++) {
            confirmar[i].classList.remove('desaparece');
            confirmar[i].classList.add("hidden");
        }
    }, 4000);
}

document.getElementById("encriptar").addEventListener("click", function () {
    const input = document.getElementById('texto').value;
    const regex = /^[a-z\s]+$/;
    if (regex.test(input)) {
        encriptar(input);
    } else {
        entradaIncorrecta();
        console.log('Caracteres incorrectos, solo minúsculas');
    }
    limpiar("texto")
   
});
document.getElementById("encriptar").addEventListener("click", function () {
    mostrar();
})


document.getElementById("desencriptar").addEventListener("click", function () {
    const input = document.getElementById('texto').value;
    const regex = /^[a-z\s]+$/;
    if (regex.test(input)) {
        desencriptar(input);
    } else {
        entradaIncorrecta();
        console.log('Caracteres incorrectos, solo minúsculas');
    }
    limpiar("texto")
});

document.getElementById("desencriptar").addEventListener("click", function () {
    mostrar();
})

async function writeClipboardText() {
    let text = document.querySelector("#respuesta h3").textContent;
    try {
        await navigator.clipboard.writeText(text);
        animacion();
    } catch (error) {
        console.log('Error al copiar al portapapeles:', error.message);
    }
}
document.getElementById('pegar').addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();

        document.getElementById('texto').value = text;
    } catch (err) {
        console.error('Error al pegar texto: ', err);
    }
});
document.getElementById("copiar").addEventListener("click", function () {
    writeClipboardText();
    document.getElementById("respuesta").innerHTML = "";
});
function limpiar(id) {
    document.getElementById(id).value = "";
}
function primero() {
    document.documentElement.style.setProperty('--fondo-claro', '#E5E5E5');
    document.documentElement.style.setProperty('--principal', '#0A3871');
    document.documentElement.style.setProperty('--fondo-menor', 'white');
    document.documentElement.style.setProperty('--especial', '#9abfe7');
    document.documentElement.style.setProperty('--contorno-texto', '#0056b3');
    document.documentElement.style.setProperty('--texto-sombra', 'rgba(0, 123, 225, 0.25)');
    document.documentElement.style.setProperty('--encriptar-hover', '#072B61');
    document.documentElement.style.setProperty('--desencriptar-hover', '#EFF1FA');
    document.documentElement.style.setProperty('--pegar-hover', '#75faff9c');

}
function segundo() {
    document.documentElement.style.setProperty('--fondo-claro', '#E8F5E9');
    document.documentElement.style.setProperty('--principal', ' #2E7D32');
    document.documentElement.style.setProperty('--fondo-menor', '#FFFFFF');
    document.documentElement.style.setProperty('--especial', '#A5D6A7');
    document.documentElement.style.setProperty('--contorno-texto', '#1B5E20');
    document.documentElement.style.setProperty('--texto-sombra', ' rgba(46, 125, 50, 0.25)');
    document.documentElement.style.setProperty('--encriptar-hover', '#145A32');
    document.documentElement.style.setProperty('--desencriptar-hover', ' #E0F2F1');
    document.documentElement.style.setProperty('--pegar-hover', '#81C784');
}
function tercero() {
    document.documentElement.style.setProperty('--fondo-claro', '#F4F4F4');
    document.documentElement.style.setProperty('--principal', '#8A2BE2');
    document.documentElement.style.setProperty('--fondo-menor', ' #FFFFFF');
    document.documentElement.style.setProperty('--especial', '#D8BFD8');
    document.documentElement.style.setProperty('--contorno-texto', '#4B0082');
    document.documentElement.style.setProperty('--texto-sombra', 'rgba(138, 43, 226, 0.25)');
    document.documentElement.style.setProperty('--encriptar-hover', ' #5A189A');
    document.documentElement.style.setProperty('--desencriptar-hover', '#E6E6FA');
    document.documentElement.style.setProperty('--pegar-hover', '#FFC1E3');
}
function cuarto() {
    document.documentElement.style.setProperty('--fondo-claro', '#F5F5F5');
    document.documentElement.style.setProperty('--principal', '#6D4C41');
    document.documentElement.style.setProperty('--fondo-menor', '#FFFFFF');
    document.documentElement.style.setProperty('--especial', '#BCAAA4');
    document.documentElement.style.setProperty('--contorno-texto', '#3E2723');
    document.documentElement.style.setProperty('--texto-sombra', 'rgba(109, 76, 65, 0.25)');
    document.documentElement.style.setProperty('--encriptar-hover', '#4E342E');
    document.documentElement.style.setProperty('--desencriptar-hover', '#EDE7F6');
    document.documentElement.style.setProperty('--pegar-hover', '#A1887F');
}
