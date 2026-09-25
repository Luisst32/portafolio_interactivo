(function () {
    const root = document.documentElement;
    let tema = null;

    root.classList.add("js");

    try {
        tema = localStorage.getItem("tema");
    } catch (error) {
        tema = null;
    }

    if (tema !== "dark" && tema !== "light") {
        tema = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    root.dataset.theme = tema;
})();
