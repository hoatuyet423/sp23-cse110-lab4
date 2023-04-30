
setInterval(oneSecFunct, 1000);

function oneSecFunct() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}