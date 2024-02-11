document.addEventListener("DOMContentLoaded", () => {
    let page = 1; // Página actual de la API
    
    document.querySelector(".btn-primary").addEventListener("click", async (event) => {
        const itemlist = document.getElementById("my-list");
        const template = document.getElementById("list-template");
        const total = itemlist.childElementCount + 1;
        
        // Hacer la solicitud a la API con el ID del primer personaje en la página actual
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        
        data.results.forEach(async character => {
            const clone = document.importNode(template.content, true);
            clone.querySelector("[data-id='number']").textContent = `${total}`;
            clone.querySelector("[data-id='imagen']").src = character.image;
            clone.querySelector("[data-id='Id']").textContent = character.id;
            clone.querySelector("[data-id='Nombre']").textContent = character.name;
            clone.querySelector("[data-id='Estatus']").textContent = character.status;
            clone.querySelector("[data-id='Especie']").textContent = character.species;
            itemlist.appendChild(clone);
        });
        
        page++; // Incrementar la página para la próxima solicitud
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        const itemlist = document.getElementById("my-list");
        itemlist.replaceChildren();
        page = 1; // Reiniciar la página al limpiar la lista
    });
});


