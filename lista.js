document.addEventListener("DOMContentLoaded", () => {
    let PersonajeID = 0; // Empezamos con el ID 0 que no existe

    document.querySelector(".btn-primary").addEventListener("click", async (event) => {
        var itemlist = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemlist.childElementCount + 1;
        var clone = document.importNode(template.content, true);

        PersonajeID++;

        const response = await fetch(`https://rickandmortyapi.com/api/character/${PersonajeID}`);
        const data = await response.json();

        clone.querySelector("[data-id='number']").textContent = `${total}`;
        clone.querySelector("[data-id='imagen']").src = data.image;
        clone.querySelector("[data-id='Id']").textContent = `${data.id}`;
        clone.querySelector("[data-id='Nombre']").textContent = `${data.name}`;
        clone.querySelector("[data-id='Estatus']").textContent = `${data.status}`;
        clone.querySelector("[data-id='Especie']").textContent = `${data.species}`;

        itemlist.style.display = "flex";  // Aplicar estilo flex al contenedor de la lista
        itemlist.style.flexDirection = "row";  // Establecer la dirección a fila para que los elementos se alineen horizontalmente
        itemlist.appendChild(clone);
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemlist = document.getElementById("my-list");
        itemlist.replaceChildren();
        PersonajeID = 0;
    });
});

