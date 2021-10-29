
const crearMensaje = (e) => {
    e.preventDefault();
    let inputNombre = document.querySelector("#nombre");
    if(inputNombre.ariaValueMax.length == 0) {
        alert("Por favor ingrese su nombre");
        return false;
    }
}

const renderElement = () =>{
    let div = document.createElement('div');
    div.classList.add('box');
    let html = `
            <div class="texto">
                <h2>${asunto}</h2>
                <p>${nombre}</p>
                <p>${email}</p>
                <p>${descripcion}</p>
            </div>
    `;
    div.innerHTML = html;
    return div;
}