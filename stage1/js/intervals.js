var procesoID;

function alternarColor() { 
  var oElem = document.getElementById("surprise"); 
  oElem.style.color = oElem.style.color == "red" ? "blue" : "red"; 
} 

function detenerCambioDeColor() { 
  clearInterval(procesoID); 
}

procesoID = setInterval(alternarColor, 1000);