function showLoader(callback) {
    const loader = document.getElementById("loader");
    const count = loader.querySelector(".count");
    let n = 3;

    loader.style.display = "flex";

    const interval = setInterval(() => {
        count.textContent = n;
        n--;
        if (n < 0) {
            clearInterval(interval);
            loader.style.display = "none";
            callback();
        }
    }, 500);
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
