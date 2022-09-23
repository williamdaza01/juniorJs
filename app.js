//Problemas 1
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

//Problemas 2
let free = flase;

const validarCliente = time => {
    let edad = prompt("Cual es tu edad?");
    if(edad > 18) {
        if(time >= 2 && time <= 7 && free == false){
            alert("Puedes estrar gratis");
            free = true;
        } else {
            alert(`Son las ${time}, Puedes pasar pero pagas entrada`);
        }
    } else {
        alert("Eress menor de edad, no puedes pasar");
    }
}

let cantidad = prompt("Cuantos alumnos son?");
let alumnosArr = [];

for(let i = 0; i < cantidad; i++) {
    alumnosArr[i] = [prompt("Nombre del alumno "(i+1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P") {
        alumnosArr[i][1]++;
    }
}

for(i = 0; i < 30; i++){
    for(alumno in alumnosArr) {
        tomarAsistencia(alumnosArr[alumno][0], alumno);
    }
}

for (alumno in alumnosArr) {
    let resultado = `${alumnosArr[alumno][0]}:<br>
    ________Presentes: ${alumnosArr[alumno][1]}<br>
    ________Ausencias: ${30 - parseInt(alumnosArr[alumno][1])}`;
    if (30 - alumnosArr[alumno][1] > 18) {
        resultado += "Reprobado por inasistencias<br><br>";
    } else {
        resultado += "<br><br>"
    }
}

const sumar = (n1, n2) => {
    return parseInt(n1) + parseInt(n2);
}

const restar = (n1, n2) => {
    return parseInt(n1) - parseInt(n2);
}

const dividir = (n1, n2) => {
    return parseInt(n1) / parseInt(n2);
}

const multiplicar = (n1, n2) => {
    return parseInt(n1) * parseInt(n2);
}

alert("Que operacion deseas realizar?");
let operacion = prompt("1 Suma, 2 Resta, 3 Division, 4 Multiplicacion");

if (operacion ==  1) {
    let n1 = prompt("Primer numero para sumar");
    let n2 = prompt("Segudo numero para sumar");
    resultado = sumar(n1, n2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==  2) {
    let n1 = prompt("Primer numero para restar");
    let n2 = prompt("Segudo numero para restar");
    resultado = restar(n1, n2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==  3) {
    let n1 = prompt("Primer numero para dividir");
    let n2 = prompt("Segudo numero para dividir");
    resultado = dividir(n1, n2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==  4) {
    let n1 = prompt("Primer numero para multiplicar");
    let n2 = prompt("Segudo numero para multiplicar");
    resultado = multiplicar(n1, n2);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert("Opcion incorrecta");
}

//Problema 3
class Celular {
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if(this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }

    reiniciarCelular() {
        if(this.encendido == true) {
            alert("celular reiniciando");
        } else {
            alert("celular apagado");
        }
    }

    tomarFoto() {
        alert(`foto tomada, resolucion: ${this.rdc}`);
    }

    grabarVideo() {
        alert(`grabando video, resolucion: ${this.rdc}`);
    }

    celularInfo(){
        return `
        Color: ${this.color}<br>
        Peso: ${this.peso}<br>
        Tamaño: ${this.rdp}<br>
        Resolucion de camara: ${this.rdc}<br>
        RAM: ${this.ram}<br>` 
    }
}

class AltaGama extends Celular {
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc, ram);
        this.rdce = rdce;
    }

    grabarVideoLento() {
        alert("Estas grabando en camra lenta");
    }

    reconocimientoFacial() {
        alert("Vamos a iniciar reconocimiento facial");
    }

    infoAltaGama() {
        return this.celularInfo() + `Resolucion camara extra: ${this.rdce}<br>`
    }
}


/* celular1 = new Celular("rojo", "150g", "5'", "full hd", "2GB");
celular2 = new Celular("negro", "110g", "4'", "720p", "1GB");
celular3 = new Celular("azul", "180g", "6'", "4k", "4GB"); */

/* celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciarCelular();
celular1.presionarBotonEncendido(); */

celular1 = new AltaGama("rojo", "1330g", "5.2", "4K", "3GB", "1080p");
celular2 = new AltaGama("azul", "180g", "6'", "4k", "4GB", "4K");

class App {
    constructor(descragas, puntuacion, peso) {
        this.descragas = descragas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true) {
            alert("app abierta");
            this.iniciada = true;
        } else {
            alert("Ocurrio un problema");
        }
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true) {
            alert("app cerrada");
            this.iniciada = false;
        } else {
            alert("Ocurrio un problema");
        }
    }

    instalar(){
        if(this.instalada == false) {
            alert("app instalada");
            this.instalada = true;
        } else {
            alert("Ocurrio un problema");
        }
    }

    desinstalar(){
        if(this.instalada == true) {
            alert("app desinstalada");
            this.instalada = false;
        } else {
            alert("Ocurrio un problema");
        }
    }
}