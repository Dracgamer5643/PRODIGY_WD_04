document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });
        highlightNav(current);
    });

    const highlightNav = (current) => {
        const navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    };
});
