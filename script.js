let papanoel = "off";
let papanoelStop = document.getElementById("papanoelquieto");
let papanoelStop1 = document.getElementById("papanoelquieto1");
let botonSonido = new Audio ('../PAPA_NOEL/sound/botonbailar.mp3');
let botonAudio = new Audio ('../PAPA_NOEL/sound/audio.mp3');

function bailar() {
    
    if (papanoel == "off" ) {
        papanoel = "on"
        papanoelStop.classList.add("on");
        papanoelStop1.classList.add("on");
        papanoelStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
        papanoelStop1.addEventListener('click', ()=>{
            botonSonido.play();
        })
        
        papanoelStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
        papanoelStop1.addEventListener('click', ()=>{
            botonSonido.play();
        })
        console.log("On");

        
    } else {
        papanoel ="on"
        papanoelStop.classList.remove("off");
        papanoelStop1.classList.remove("off");
        papanoelStop.addEventListener('click', ()=>{
            botonSonido.pause();
        })
        papanoelStop1.addEventListener('click', ()=>{
            botonSonido.pause();
        })
        console.log("Off");
    }
}

function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);    /*redondear hacia abajo floor*/
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2); 
    horasFaltantes = ('0' + Math.floor(tiempoFaltante /3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

console.log(obtenerTiempoFaltante('dec 25 2023 00:00:00     GMT-0500'));

function cuentaRegresiva(tiempoFaltante,mensaje){
    const dias = document.getElementById("dias");
    const hora = document.getElementById("hora");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const tiempoActual = setInterval(() => {
        let t= obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = t.diasFaltantes;
        hora.innerHTML = t.horasFaltantes;
        minutos.innerHTML = t.minutosFaltantes;
        segundos.innerHTML = t.segundosFaltantes;

        if(t.tiempoFaltante <1){
            clearInterval(tiempoActual);
            titulo.innerHTML = mensaje;
            dias.innerHTML = "00";
            hora.innerHTML = "00";
            minutos.innerHTML = "00";
            segundos.innerHTML = "00";
            papanoelStop.classList.add("on");
            papanoel=("off")

        }
        if(t.tiempoFaltante >1){
            papanoel=("on")
           
        }
        }, 1000)
    };
    cuentaRegresiva('Nov 19 2023 19:20:00 GMT-0500','Feliz Navidad!');