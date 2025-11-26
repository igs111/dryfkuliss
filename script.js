const links = document.querySelectorAll(".nav-link, .home-btn");
const sections = document.querySelectorAll(".section");
const loader = document.getElementById("loader");
const mainTitle = document.getElementById("mainTitle");

function showSection(name) {
    loader.classList.add("active");

    setTimeout(() => {
        sections.forEach(sec => sec.classList.remove("active"));
        document.getElementById(name).classList.add("active");

        mainTitle.style.opacity = "1";

        loader.classList.remove("active");
    }, 1300);
}

links.forEach(link => {
    link.addEventListener("click", () => {
        const target = link.getAttribute("data-target");
        showSection(target);
    });
});
