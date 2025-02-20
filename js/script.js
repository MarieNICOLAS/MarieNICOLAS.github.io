document.addEventListener("DOMContentLoaded", function() {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });

    fetch("../components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    // Définition des titres par page
    const pageTitles = {
        "index.html": "Accueil | Portfolio Marie Nicolas",
        "projects.html": "Projets | Portfolio Marie Nicolas",
        "experiences.html": "Expériences | Portfolio Marie Nicolas",
        "about.html": "À Propos | Portfolio Marie Nicolas"
    };

    // Récupérer le nom du fichier actuel
    let page = window.location.pathname.split("/").pop();

    // Vérifier si le fichier correspond à une entrée dans l'objet pageTitles
    if (pageTitles[page]) {
        document.title = pageTitles[page]; // Modifier le titre
    } else {
        document.title = "Portfolio Marie Nicolas"; // Titre par défaut
    }
});
