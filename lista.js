document.addEventListener("DOMContentLoaded", () => {
    let PersonajeID = 0; // Empezamos con el ID 0 que no existe

    document.querySelector(".btn-primary").addEventListener("click", async (event) => {
        var itemlist = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemlist.childElementCount + 1;
        var clone = document.importNode(template.content, true);

        PersonajeID++; // Hacer que vaya incrementando el ID cada vez que se le de al botón de "agregar personaje" 
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/${PersonajeID}`);
        const data = await response.json();

        clone.querySelector("[data-id='number']").textContent = `${total}`;

        // Se crea una variable para poder almacenar la imagen del personaje
        clone.querySelector("[data-id='imagen']").src = data.image;
        clone.querySelector("[data-id='Id']").textContent = `${data.id}`;
        clone.querySelector("[data-id='Nombre']").textContent = `${data.name}`;
        clone.querySelector("[data-id='Estatus']").textContent = `${data.status}`;
        clone.querySelector("[data-id='Especie']").textContent = `${data.species}`;

        // Aplicar estilos flex al contenedor de la lista para que los elementos se alineen horizontalmente
        itemlist.style.display = "flex";
        itemlist.style.flexDirection = "row"; // Alinear los elementos horizontalmente
        itemlist.style.flexWrap = "wrap"; // Permitir que los elementos se desplacen hacia abajo si se llena la fila
        itemlist.style.maxWidth = "100%"; // Evitar que la lista exceda el ancho de la ventana

        // Agregar estilos al clon para que cada elemento se alinee correctamente
        clone.style.margin = "5px"; // Ajustar el margen para separar los elementos
        clone.style.flex = "0 0 calc(25% - 10px)"; // Ajustar el ancho del elemento al 25% con márgenes

        itemlist.appendChild(clone);
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemlist = document.getElementById("my-list");
        itemlist.replaceChildren();
        PersonajeID = 0; // Reinicia el PersonajeID a cero al darle al botón de limpiar
    });
});

