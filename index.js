function appleRain(){
    let apple = document.createElement("div");

    apple.classList.add("apple");
    apple.innerText = ""
    apple.style.right = Math.random()*100 +"vw";
    apple.style.animationDuration = Math.random()* 3+2 +"s";
    document.body.appendChild(apple);

    setTimeout(() => {
        apple.remove();
    },5000);

}
setInterval(appleRain, 300);