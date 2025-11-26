function showLoader(callback) {
    const loader = document.getElementById("loader");

    loader.style.display = "flex";

    setTimeout(() => {
        loader.style.display = "none";
        callback();
    }, 1500); // 1.5 sekundy
}

function goToPage(id) {
    showLoader(() => {
        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById(id).classList.add("active");
    });
}

function home() {
    goToPage("home");
}
