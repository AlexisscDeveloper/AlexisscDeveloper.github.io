document.addEventListener("DOMContentLoaded", async () => {
    document.querySelector(".btn-primary").addEventListener("click", async () => {
        const itemlist = document.getElementById("my-list");
        const template = document.getElementById("list-template");
        const total = itemlist.childElementCount + 1;

        const response = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await response.json();

        // Obtener los primeros 20 personajes
        const first20Characters = data.results.slice(0, 20);

        first20Characters.forEach(character => {
            const clone = document.importNode(template.content, true);
            clone.querySelector("[data-id='number']").textContent = `${total}`;

            // Ajustar los datos del personaje en el clon
            clone.querySelector("[data-id='imagen']").src = character.image;
            clone.querySelector("[data-id='Id']").textContent = character.id;
            clone.querySelector("[data-id='Nombre']").textContent = character.name;
            clone.querySelector("[data-id='Estatus']").textContent = character.status;
            clone.querySelector("[data-id='Especie']").textContent = character.species;

            itemlist.appendChild(clone);
        });
    });

    document.querySelector(".btn.btn-light").addEventListener("click", () => {
        const itemlist = document.getElementById("my-list");
        itemlist.replaceChildren();
    });
});

