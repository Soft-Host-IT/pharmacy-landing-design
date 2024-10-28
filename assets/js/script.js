
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.getElementById("navbarToggler");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");
    const navbarContent = document.getElementById("navbarSupportedContent");

    navbarToggler.addEventListener("click", function () {
        // Toggle icons when the navbar menu is expanded or collapsed
        openIcon.classList.toggle("d-none");
        closeIcon.classList.toggle("d-none");
    });

    // Close the navbar when a link is clicked (for mobile experience)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            if (navbarContent.classList.contains("show")) {
                navbarContent.classList.remove("show");
                openIcon.classList.remove("d-none");
                closeIcon.classList.add("d-none");
            }
        });
    });
});
