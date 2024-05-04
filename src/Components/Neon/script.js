const pre = document.querySelector("content-box");

document.addEventListener("mousemove", (e)=>{
   rotateElement(e, pre);
});

function rotateElement(event, element){
    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth/2;
    const middleY = window.innerHeight/2;
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    if(window.innerWidth>1080){
        document.documentElement.style.setProperty('--rotateX', offsetY + 'deg');
        document.documentElement.style.setProperty('--rotateY', -1 * offsetX + 'deg');
    }else{
        document.documentElement.style.setProperty('--rotateX', 0 + 'deg');
        document.documentElement.style.setProperty('--rotateY', -0 + 'deg');
    }
}