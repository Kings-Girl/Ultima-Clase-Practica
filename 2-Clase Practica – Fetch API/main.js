// Contenedor HTML con los datos a cargar dinamicamente.
let tagTBody = document.querySelector("#tabla tbody");
// Direccion Fetch API
let pUrl = "https://my-json-server.typicode.com/Kings-Girl/FetchAPI/comentarios";

fetch (pUrl,
      {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          } 
      }
) 
 .then(response => response.json()) 
 .then(data => { 

   let tabla = data;

   tabla.forEach(element => {
        // Filas y Columnas de la tabla con el DOM HTML
        let tagFila = document.createElement("tr");
        let tagID = document.createElement("td");
        let tagNombre = document.createElement("td");
        let tagPlazo = document.createElement("td");
        let tagAnualidad = document.createElement("td");

        tagFila.setAttribute("id", element.id);
        tagID.innerHTML = element.id;
        tagNombre.innerHTML = element.nombre;
        tagPlazo.innerHTML = element.plazo;
        tagAnualidad.innerHTML = element.anualidad;

        // Objetos DOM HTML en el contenedor
        tagFila.appendChild(tagID);
        tagFila.appendChild(tagNombre);
        tagFila.appendChild(tagPlazo);
        tagFila.appendChild(tagAnualidad);

        tagTBody.appendChild(tagFila);

        let tagDet = document.querySelector("#ventanaModal #ventana");
        tagFila.onclick = function (e){
            let container = e.target.parentElement;            

           
           let urlNew = pUrl + "/"+ container.id;
           fetch (urlNew)
           .then (resp => resp.json())
           .then (datos => {
            let listaDetalles = datos;
            console.log(listaDetalles)
            // Crear los Section de ventanas
            let tagSec = document.createElement('section');
            let tagTit = document.createElement('h5');
            let tagCod = document.createElement('strong');
            let tagPla = document.createElement('span');
            let tagAnu = document.createElement('span');
            let tagBen = document.createElement('p');
            let tagRes = document.createElement('p');
            let tagCom = document.createElement('p');
            let tagBut = document.createElement('button')
            
            tagBut.setAttribute("data-bs-dismiss","modal" );
            tagBut.setAttribute("class", "btn btn-danger" );
   
            tagSec.setAttribute("id", listaDetalles.id);
            tagTit.innerHTML = listaDetalles.Plan;
            tagCod.innerHTML = listaDetalles.Codigo;
            tagPla.innerHTML = listaDetalles.Plaza;
            tagAnu.innerHTML = listaDetalles.Anualidad;
            tagBen.innerHTML = listaDetalles.Beneficios;
            tagRes.innerHTML = listaDetalles.Restricciones;
            tagCom.innerHTML = listaDetalles.Cometarios;
   
            // Agrego los objetos DOM a su contenedor
            tagSec.appendChild(tagTit);
            tagSec.appendChild(tagCod);
            tagSec.appendChild(tagPla);
            tagSec.appendChild(tagAnu);
            tagSec.appendChild(tagBen);
            tagSec.appendChild(tagRes);
            tagSec.appendChild(tagCom);
            tagSec.appendChild(tagBut);
   
        
   
              });
           } 

       // Programar el evento onclick de la fila

       /*
     let tagDet = document.querySelector("#ventanaModal #ventana");
     let pUrl = "https://my-json-server.typicode.com/Kings-Girl/Fectch-API/beneficios";
     tagFila.onclick = function (e){
         let container = e.target.parentElement;
        
        let urlNew = pUrl + "/"+ container.id;
        fetch (urlNew)
        .then (resp => resp.json())
        .then (datos => {
         let listaDetalles = datos;
         console.log(listaDetalles)
         // Crear los Section de ventanas
         let tagSec = document.createElement('section');
         let tagTit = document.createElement('h5');
         let tagCod = document.createElement('strong');
         let tagPla = document.createElement('span');
         let tagAnu = document.createElement('span');
         let tagBen = document.createElement('p');
         let tagRes = document.createElement('p');
         let tagCom = document.createElement('p');
         let tagBut = document.createElement('button')
         
         tagBut.setAttribute("data-bs-dismiss","modal" );
         tagBut.setAttribute("class", "btn btn-danger" );

         tagSec.setAttribute("id", listaDetalles.id);
         tagTit.innerHTML = listaDetalles.Plan;
         tagCod.innerHTML = listaDetalles.Codigo;
         tagPla.innerHTML = listaDetalles.Plaza;
         tagAnu.innerHTML = listaDetalles.Anualidad;
         tagBen.innerHTML = listaDetalles.Beneficios;
         tagRes.innerHTML = listaDetalles.Restricciones;
         tagCom.innerHTML = listaDetalles.Cometarios;

         // Agrego los objetos DOM a su contenedor
         tagSec.appendChild(tagTit);
         tagSec.appendChild(tagCod);
         tagSec.appendChild(tagPla);
         tagSec.appendChild(tagAnu);
         tagSec.appendChild(tagBen);
         tagSec.appendChild(tagRes);
         tagSec.appendChild(tagCom);
         tagSec.appendChild(tagBut);

     

           });
        }    
        */ 

    });        
    }     
     ); 

     