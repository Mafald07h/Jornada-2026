const body = document.getElementById("body")
const btn_header = document.getElementById("btn_header")

btn_header.addEventListener('click',()=>{
    body.classList.toggle("body-white")
})