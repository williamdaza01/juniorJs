dineroR = prompt("Cuanto dinero tienes Roberto?");
dineroC = prompt("Cuanto dinero tienes Cofla?");
dineroP = prompt("Cuanto dinero tienes Pedro?");

dineroC = parseInt(dineroC);

if(dineroC >=  0.6 && dineroC < 1) {
    alert("cofla, compra helado de agua");
    alert(`Y te sobran ${dineroC - 0.6}`);
} else if (dineroC >=  1.6 && dineroC < 1.7){
    alert("cofla, compra helado de crema");
    alert(`Y te sobran ${dineroC - 1.6}`);
} else if (dineroC >=  1.7 && dineroC < 1.8){
    alert("cofla, compra paleta");
    alert(`Y te sobran ${dineroC - 1.7}`);
} else if (dineroC >=  1.8 && dineroC < 2.9){
    alert("cofla, compra paleta de fruta");
    alert(`Y te sobran ${dineroC - 1.8}`);
} else if (dineroC >= 2.9){
    alert("cofla, compra helado con confetite o pote de helado");
    alert(`Y te sobran ${dineroC - 2.9}`);
} else {
    alert("cofla, Poco dinero");
}

if(dineroR >=  0.6 && dineroR < 1) {
    alert("Roberto, compra helado de agua");
} else if (dineroR >=  1.6 && dineroR < 1.6){
    alert("Roberto, compra helado de crema");
} else if (dineroR >=  1.7 && dineroR < 1.8){
    alert("Roberto, compra paleta");
} else if (dineroR >=  1.8 && dineroR < 2.9){
    alert("Roberto, compra paleta de fruta");
} else if (dineroR >= 2.9){
    alert("Roberto, compra helado con confetite o pote de helado");
} else {
    alert("Roberto, Poco dinero");
}

if(dineroP >=  0.6 && dineroP < 1) {
    alert("pedro, compra helado de agua");
} else if (dineroP >=  1.6 && dineroP < 1.6){
    alert("pedro, compra helado de crema");
} else if (dineroP >=  1.7 && dineroP < 1.8){
    alert("pedro, compra paleta");
} else if (dineroP >=  1.8 && dineroP < 2.9){
    alert("pedro, compra paleta de fruta");
} else if (dineroP >= 2.9){
    alert("pedro, compra helado con confetite o pote de helado");
} else {
    alert("pedro, Poco dinero");
}