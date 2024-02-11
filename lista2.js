document.addEventListener("DOMContentLoaded", () => {
    let pagina = 1; // Cuando se inicialice la pagina por default ponemos una variable que empiece con la pagina 1
    
    document.querySelector(".btn-primary").addEventListener("click", async (event) => {
        const itemlist = document.getElementById("my-list");
        const template = document.getElementById("list-template");
        const total = itemlist.childElementCount + 1;
        
        // Hacer la solicitud a la API con el ID del primer personaje en la página actual
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
        const data = await response.json();
        
        data.results.forEach(async personaje => {
            const clone = document.importNode(template.content, true);
            //clone.querySelector("[data-id='number']").textContent = `${total}`;
            clone.querySelector("[data-id='imagen']").src = personaje.image;
            clone.querySelector("[data-id='Id']").textContent = personaje.id;
            clone.querySelector("[data-id='Nombre']").textContent = personaje.name;
            clone.querySelector("[data-id='Estatus']").textContent = personaje.status;
            clone.querySelector("[data-id='Especie']").textContent = personaje.species;
            itemlist.appendChild(clone);

            
        });
        
        pagina++; // Incrementamos la variable "pagina" para que cuando se le de de nuevo al boton, me ponga ahora la siguiente pagina que corresponda 
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        const itemlist = document.getElementById("my-list");
        itemlist.replaceChildren();
        pagina = 1; // Reinciamos la variable "pagina" a su valor por default que es 1
    });
});


