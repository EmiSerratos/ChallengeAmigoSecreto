// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos el array
let compas =[];

const inputNombre = document.getElementById("compa");
const listaCompas = document.getElementById("listaCompas"); 
const resultadoSorteo = document.getElementById("resultado");

//Funcion para agregar compas al array y su verificacion
function agregarCompa() {
    const nombre = inputNombre.value.trim();
    
        if (nombre === "") { 
            alert("Por favor, ingresa un nombre");
            return;
        }

        if (compas.includes(nombre)) {
            alert("Este nombre ya fue ingresado.");
        } else {
            compas.push(nombre); 
            console.log(compas); 
            inputNombre.value = "";
        }

        actualizarLista();

    }
//Funcion para mostrar lista de compas
function actualizarLista() {
    listaCompas.innerHTML = "";
    resultadoSorteo.innerHTML = ""
    for (let i = 0; i < compas.length; i++) {
        const li = document.createElement("li");
        li.textContent = compas[i];
        listaCompas.appendChild(li);
    }
}

function sortearCompa(){
    if (compas.length === 0) {
        resultadoSorteo.innerHTML = "No hay nombres para sortear.";
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * compas.length);
    const CompaSorteado = compas[indiceAleatorio];
    resultadoSorteo.innerHTML = `El amigo secreto es: <strong>${CompaSorteado}</strong>`;
    listaCompas.innerHTML = "";
}
