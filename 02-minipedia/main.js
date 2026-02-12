// Text variables (Dutch)
let titleNL = "De Appel";
let subtitleNL = "Een smakelijke vrucht";
let textNL = "De appel is een populaire vrucht die groeit aan appelbomen. Appels zijn rijk aan vezels en vitamine C. Ze komen voor in duizenden variëteiten en kleuren, van groen en geel tot dieprood.";

// Text variables (French)
let titleFR = "La Pomme";
let subtitleFR = "Un fruit délicieux";
let textFR = "La pomme est un fruit comestible produit par un pommier. Les pommes sont riches en fibres et en vitamine C. Il existe des milliers de variétés, allant du vert et jaune au rouge foncé.";

// 1. Select text elements
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let text = document.querySelector("#text");
//2. Set initial content on load
title.innerText =titleNL;
subtitle.innerText =subtitleNL;
text.innerText=textNL;
//3. Select buttons
let nlButton = document.querySelector("#btn-nl");
let frButton = document.querySelector("#btn-fr");
nlButton.disabled =true;
//4. Add event listeners
nlButton.addEventListener('click',NLTEXT);
frButton.addEventListener('click',FRTEXT);
function NLTEXT()
{
title.innerText =titleNL;
subtitle.innerText =subtitleNL;
text.innerText=textNL;
nlButton.disabled =true;
frButton.disabled= false;
}
function FRTEXT()
{
title.innerText =titleFR;
subtitle.innerText =subtitleFR;
text.innerText=textFR;
nlButton.disabled =false;
frButton.disabled= true;
}
//5. Create, configure and append image
let imgPlace =document.querySelector("#applePic");
let img= document.createElement("img");
img.src ="appel.jpg";
img.width =500;


