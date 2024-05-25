const sidebar = document.querySelector(".sidebar");
const close = document.querySelector("#close");

close.addEventListener("click", () => {
    sidebar.classList.toggle("show")
})