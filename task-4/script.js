
const audio = document.querySelector('audio');
let button = document.querySelectorAll("button")
let dell = document.querySelector("#btn2");
let confirm = document.querySelector("#btn1");
let cls3 = document.querySelector(".c");
let cls4 = document.querySelector(".d")
let cls5 = document.querySelector(".e")
let cls6 = document.querySelector(".f")
let cls7 = document.querySelector(".g")
let cls8 = document.querySelector(".h")


cls7.addEventListener("click",()=>{
    cls7.classList.toggle('active')
    cls7.style.backgroundColor = "white"
    cls7.style.cursor="block"
   cls7.innerHTML = ""
   cls8.innerHTML="Request accepted "
   cls8.style.backgroundColor = "rgb(210, 205, 205)"

})


cls8.addEventListener("click",()=>{
    cls7.innerHTML=""
    cls7.style.backgroundColor="white "
    cls8.innerHTML = "Request deleted"
    
})
cls5.addEventListener("click",()=>{
    cls5.classList.toggle('active')
    cls5.style.backgroundColor = "white"
    cls5.style.cursor="block"
   cls5.innerHTML = ""
   cls6.innerHTML="Request accepted "
   cls6.style.backgroundColor = "rgb(210, 205, 205)"

})

cls6.addEventListener("click",()=>{
    cls5.innerHTML=""
    cls5.style.backgroundColor="white "
    cls6.innerHTML = "Request deleted"
    
})

cls3.addEventListener("click",()=>{
    console.log("Hello")
})

cls3.addEventListener("click",()=>{
    cls3.classList.toggle('active')
    cls3.style.backgroundColor = "white"
    cls3.style.cursor="block"
   cls3.innerHTML = ""
   cls4.innerHTML="Request accepted "
   cls4.style.backgroundColor = "rgb(210, 205, 205)"

})
cls4.addEventListener("click",()=>{
    cls3.innerHTML=""
    cls3.style.backgroundColor="white "
    cls4.innerHTML = "Request deleted"
    
})




confirm.addEventListener("click",()=>{
   
    confirm.classList.toggle('active')
    confirm.style.backgroundColor = "white"
    confirm.style.cursor="block"
   confirm.innerHTML = ""
   dell.innerHTML="Request accepted "
   dell.style.backgroundColor = "rgb(210, 205, 205)"
   confirm.addEventListener("mouseenter",()=>{
    dell.style.cursor="block"
})

})

dell.addEventListener("click",()=>{
    confirm.innerHTML=""
    confirm.style.backgroundColor="white "
    dell.innerHTML = "Request deleted"
    
})
dell.addEventListener('click', () => {
    isActive = !isActive;
    button.classList.toggle('active', isActive);
});


// // Function to play the audio
function playAudio() {
    audio.play();
}

// // Add a click event listener to the button
 btn1.addEventListener('click', playAudio);
 btn2.addEventListener('click', playAudio);
 cls3.addEventListener('click', playAudio);
 cls4.addEventListener('click', playAudio);
 cls5.addEventListener('click', playAudio);
 cls6.addEventListener('click', playAudio);
 cls7.addEventListener('click', playAudio);
 cls8.addEventListener('click', playAudio);
 
