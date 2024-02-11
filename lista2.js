document.addEventListener("DOMContentLoaded", async () => {
    let page = 1; // Página actual de la API
    const charactersPerPage = 20; // Cantidad de personajes por página

    document.querySelector(".btn-primary").addEventListener("click", async () => {
        const itemlist = document.getElementById("my-list");
        const template = document.getElementById("list-template");

        // Calcular el inicio y el final del rango de personajes en la página actual
        const startIndex = (page - 1) * charactersPerPage;
        const endIndex = startIndex + charactersPerPage;

        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();

        const characters = data.results.slice(startIndex, endIndex);

        characters.forEach((character, index) => {
            const clone = document.importNode(template.content, true);
            const characterNumber = startIndex + index + 1;
            clone.querySelector("[data-id='number']").textContent = characterNumber;
            clone.querySelector("[data-id='imagen']").src = character.image;
            clone.querySelector("[data-id='Id']").textContent = character.id;
            clone.querySelector("[data-id='Nombre']").textContent = character.name;
            clone.querySelector("[data-id='Estatus']").textContent = character.status;
            clone.querySelector("[data-id='Especie']").textContent = character.species;

            itemlist.appendChild(clone);
        });

        page++; // Incrementar la página para la próxima solicitud
    });

    document.querySelector(".btn.btn-light").addEventListener("click", () => {
        const itemlist = document.getElementById("my-list");
        itemlist.innerHTML = ''; // Limpiar la lista al hacer clic en "Limpiar lista"
        page = 1; // Reiniciar la página al limpiar la lista
    });
});

