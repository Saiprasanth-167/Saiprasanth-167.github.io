```javascript
/* ======================================
   CYBERPUNK AI PORTFOLIO
   Sai Prasanth
====================================== */

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
    }
});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0,0,0,0.65)";

        navbar.style.backdropFilter =
            "blur(20px)";

        navbar.style.boxShadow =
            "0 0 20px rgba(0,229,255,.15)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,0.15)";

        navbar.style.boxShadow = "none";
    }

});

// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".glass-card, .project-card, .section-title"
);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";

        }

    });

},

{
    threshold: 0.15
}

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all 0.8s ease";

    observer.observe(element);

});

// ===============================
// HERO TYPEWRITER
// ===============================

const heroSubtitle = document.querySelector(".hero p");

const originalText = heroSubtitle.innerText;

heroSubtitle.innerText = "";

let index = 0;

function typeWriter() {

    if (index < originalText.length) {

        heroSubtitle.innerText +=
            originalText.charAt(index);

        index++;

        setTimeout(typeWriter, 20);
    }
}

window.addEventListener("load", typeWriter);

// ===============================
// CYBERPUNK PARTICLES
// ===============================

const particleContainer =
    document.querySelector(".bg-animation");

for (let i = 0; i < 50; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    const size =
        Math.random() * 4 + 2;

    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${Math.random() * 20 + 10}s`;

    particle.style.animationDelay =
        `${Math.random() * 5}s`;

    particleContainer.appendChild(particle);
}

// ===============================
// PARALLAX EFFECT
// ===============================

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 50;

    const y =
        (window.innerHeight / 2 - e.clientY) / 50;

    particleContainer.style.transform =
        `translate(${x}px, ${y}px)`;

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// ===============================
// PROJECT CARD GLOW
// ===============================

const cards =
    document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.background =
            `
            radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0,229,255,.15),
            rgba(255,255,255,.05)
            )
            `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,.06)";

    });

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(`
=====================================
 Sai Prasanth Portfolio
 AI Engineer | IIT Guwahati Research
=====================================
`);
```
