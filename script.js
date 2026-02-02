const body = document.getElementById("body")
const btn_header = document.getElementById("btn_header")
const title_section = document.querySelectorAll("[data-section-title]")
const text_section = document.querySelectorAll("[data-section-text]")
const section_main = document.querySelectorAll("[data-section-main]")
const imageHeitor = document.querySelector("[data-section-image]")
const skills = document.querySelector("[data-skills]")
const linkItem = document.querySelectorAll("[data-link__item]")
const sectionItem = document.querySelectorAll("[data-section-list-item]")

btn_header.addEventListener('click',()=>{
    body.classList.toggle("body-white")

    section_main.forEach(section => {
        section.classList.toggle("section_dark")
    })

    title_section.forEach(title => {
        title.classList.toggle("section_title_dark")
    })
    
    text_section.forEach(text => {
        text.classList.toggle("section__text_dark")
    })

    imageHeitor.classList.toggle("section__img-dark")

    skills.classList.toggle("skills_dark")

    linkItem.forEach(link_item => {
        link_item.classList.toggle("link__item-dark")
    })

    sectionItem.forEach(item => {
        item.classList.toggle("section__list-item-dark")
    })
})
