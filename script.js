// LOADING EFFECT (wraca!)
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

// ———————————————————————————
//   DYNAMIC OPACITY FOR DRYFKULIS
// ———————————————————————————
function setActivePage(page) {
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    document.getElementById(page).classList.add("active");

    const drif = document.getElementById("drifkulis");

    if (page === "kontakt") {
        drif.style.opacity = "0.40";  // tylko tu 40%
    } else {
        drif.style.opacity = "1";     // wszędzie indziej 100%
    }
}
