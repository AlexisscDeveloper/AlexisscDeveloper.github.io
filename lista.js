

document.addEventListener("DOMContentLoaded", () => {
    let PersonajeID = 0; // Empezamos con el ID 0 que no existe

    document.querySelector(".btn-primary").addEventListener("click", async (event) => {
        var itemlist = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemlist.childElementCount + 1;
        var clone = document.importNode(template.content, true);

        PersonajeID++; // Hacer que vaya incrementando el ID cada vez que se le dé al botón de "agregar personaje"

        const response = await fetch(`https://rickandmortyapi.com/api/character/${PersonajeID}`);
        const data = await response.json();

        clone.querySelector("[data-id='number']").textContent = `${total}`;

        // Se crea una variable para poder almacenar la imagen del personaje
        clone.querySelector("[data-id='imagen']").src = data.image;
        clone.querySelector("[data-id='Id']").textContent = `${data.id}`;
        clone.querySelector("[data-id='Nombre']").textContent = `${data.name}`;
        clone.querySelector("[data-id='Estatus']").textContent = `${data.status}`;
        clone.querySelector("[data-id='Especie']").textContent = `${data.species}`;
        
        // Agregar el nuevo personaje a la lista en vertical a la derecha
        itemlist.style.display = "flex";
        itemlist.style.flexDirection = "column"; // Cambiar a columna para que se agregue verticalmente
        itemlist.appendChild(clone);
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemlist = document.getElementById("my-list");
        itemlist.replaceChildren();
        PersonajeID = 0;
    });
});


