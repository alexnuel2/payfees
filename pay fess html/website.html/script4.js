const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

let collapsedSidebarHeight = "56px";
let fullSidebarHeight = "calc(100vh - 32px)";

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

const togglerMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
};

menuToggler.addEventListener("click", () => {
    const isMenuActive = sidebar.classList.toggle("menu-active");
    togglerMenu(isMenuActive);
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        sidebar.style.height = fullSidebarHeight;
    } else {
        sidebar.classList.remove("collapsed");
        sidebar.style.height = "auto";
        const isMenuActive = sidebar.classList.contains("menu-active");
        togglerMenu(isMenuActive);
    }
});
