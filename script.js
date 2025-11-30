/*------------MENÚ HAMBURGUESA PAGINA PRINCIPAL -------------*/
const botonHamburguesa = document.getElementById("menuHamburguesa")
const menu = document.getElementById("menu");

if (botonHamburguesa && menu) {
    botonHamburguesa.addEventListener("click", () => {
        menu.classList.toggle("menu-visible");
        botonHamburguesa.classList.toggle("abierto")
    });

}

/*------------MENÚ HAMBURGUESA PAGINAS SECUNDARIAS -------------*/
const botonHamburguesa2 = document.getElementById("menuHamburguesa2")
const menu2 = document.getElementById("menu2");

if (botonHamburguesa2 && menu2) {
    botonHamburguesa2.addEventListener("click", () => {
        menu2.classList.toggle("menu-visible2");
        botonHamburguesa2.classList.toggle("abierto2")
    });

}


/*---------------FORMULARIO----------------*/
const formulario = document.getElementById("formulario")

if (formulario) {
    formulario.addEventListener("submit", function(event) { 
        event.preventDefault();
        alert("¡Tu consulta se ha enviado!");
        formulario.reset();
});
}