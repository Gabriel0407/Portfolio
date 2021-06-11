const previewPodcast = document.getElementById("previewPodcast");
const previewGifos = document.getElementById("previewGifos");
const contenedorPreview = document.getElementById("container-preview");


previewPodcast.addEventListener("click",()=>{
       popUp(
        "assets/img/podcast-escritorio-completo.jpg",
       "Podcast Proyect",
       "HTML5 - CSS3",
       "The challenge is focused on the layout of the landing page of a Podcast channel, following the visual guides of a user interface provided and developing functionalities of content playback, navigation, compatibility with multiple browsers and devices.",
       "https://gabriel0407.github.io/gabriel_sanchez.github.io/"
       ) 
       
      

})

previewGifos.addEventListener("click",()=>{
    popUp("assets/img/des.jpg",
    "Gifos Proyect",
    "HTML5 - SSAS - JavaScript",
    "An interactive web application to share animated GIFs, putting into practice the fundamentals of programming and using JavaScript by obtaining API data from, working with asynchronism and taking advantage of native browser tools such as obtaining images through the webcam.",
    "https://gabriel0407.github.io/tp-2/"

    )
})

function popUp(url,name,source,expla,link){
    const contenedor = document.createElement("div");
    const proyectName = document.createElement("h2");
    const close = document.createElement("div");
    const sources = document.createElement("p");
    const imgPreview = document.createElement("img");
    const explanation = document.createElement("p");
    const buttonLink = document.createElement("a");
    const contenedor2 = document.createElement("div");
const divTitleClose = document.createElement("div");

     close.setAttribute("class","fas fa-times close-button");
    contenedor.setAttribute("class","contenedor-preview");
    contenedor2.setAttribute("class","contenedor2");
    proyectName.setAttribute("class","h2-name");
    imgPreview.setAttribute("class","imgpreview");
    explanation.setAttribute("class","explanation");
    buttonLink.setAttribute( "href", link);
    sources.setAttribute("class","sources")
    buttonLink.setAttribute( "class", "link");
    divTitleClose.setAttribute("class","divSet")
    buttonLink.textContent = "website"; 
    

    contenedorPreview.appendChild(contenedor2);
    contenedor2.appendChild(contenedor);
    contenedor.appendChild(divTitleClose);
    divTitleClose.appendChild(proyectName);
    divTitleClose.appendChild(close);
    contenedor.appendChild(sources);
    contenedor.appendChild(imgPreview);
    contenedor.appendChild(explanation);
    contenedor.appendChild(buttonLink);

   proyectName.textContent = name;
    sources.textContent = source;
    imgPreview.src = url;
    explanation.textContent = expla;
    
    close.addEventListener("click",()=>{
        contenedorPreview.removeChild(contenedor2);
    })
  
     
    
}  
