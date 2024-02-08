/*document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn-primary").addEventListener("click", event => {
        var itemlist = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemlist.childElementCount + 1;
        var clone = document.importNode(template.content, true);
        clone.querySelector("[data-id='number']").textContent = `${total}`;
        clone.querySelector("[data-id='imagen']").textContent = "imagen";
        clone.querySelector("[data-id='title']").textContent = "Product";
        clone.querySelector("[data-id='content']").textContent = "It's a new item";
        itemlist.appendChild(clone);
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemlist = document.getElementById("my-list");
        itemlist.replaceChildren();
    });
});*/

document.addEventListener("DOMContentLoaded", () => {
let lastCharacterId = 0; //almacenar el ultimo ID del personaje
    
    document.querySelector(".btn-primary").addEventListener("click",async (event) => {
        var itemlist = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemlist.childElementCount + 1;
        var clone = document.importNode(template.content, true);
        

        
        lastCharacterId++; //hacer que vaya incrementando
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/${lastCharacterId}`); //Me traigo la API
        const data = await response.json(); //Lo convertimos a JSON, ya que si no se convierte los datos me los pone indefinidos

        clone.querySelector("[data-id='number']").textContent = `${total}`;
        
        var imageUrl = "BLACKPINK wallpaper.jpg"; //Se crea una variable para poder almacenar la imagen del personaje
        clone.querySelector("[data-id='imagen']").src = data.image;
        clone.querySelector("[data-id='Id']").textContent =  `${data.id}`;
        clone.querySelector("[data-id='Nombre']").textContent =  `${data.name}`;
        clone.querySelector("[data-id='Estatus']").textContent =  `${data.status}`;
        clone.querySelector("[data-id='Especie']").textContent =  `${data.species}`;
        itemlist.appendChild(clone);
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemlist = document.getElementById("my-list");
        itemlist.replaceChildren();
        lastCharacterId = 0;
    });
});


