
const hamEle = document.querySelector(".ham")
const navEle = document.querySelector(".secondP")

hamEle.addEventListener("click", () => {
    hamEle.classList.toggle("active");
    navEle.classList.toggle("active");
})