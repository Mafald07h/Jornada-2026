const body = document.getElementById("body")
const btn_header = document.getElementById("btn_header")
const title_section = document.querySelector("[data-section-title]")
const text_section = document.querySelector("[data-section-text]")
const section_main = document.querySelector("[data-section-main]")

btn_header.addEventListener('click',()=>{
    body.classList.toggle("body-white")
    title_section.classList.toggle("section_title_dark")
    text_section.classList.toggle("section__text_dark")
    section_main.classList.toggle("section_dark")
})