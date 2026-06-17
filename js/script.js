/* ======================================
   CYBERPUNK AI PORTFOLIO - BLOOD MOON
   Sai Prasanth
====================================== */

// Secure initialization to protect the browser render engine
document.addEventListener('DOMContentLoaded', () => {

    // ===============================
    // HELPER ENGINE FOR PARTICLES
    // ===============================
    function changeParticleColor(colorString) {
        const particles = document.querySelectorAll(".particle");
        if (particles.length > 0) {
            particles.forEach(p => {
                p.style.backgroundColor = colorString;
                p.style.boxShadow = `0 0 10px ${colorString}`;
            });
        }
    }

    // ===============================
    // BLOOD MOON CYBER TOGGLE
    // ===============================
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "blood-moon") {
        document.body.classList.add("blood-moon");
        if (themeToggle) themeToggle.textContent = "🌑";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("blood-moon");
            
            if (document.body.classList.contains("blood-moon")) {
                localStorage.setItem("theme", "blood-moon");
                themeToggle.textContent = "🌑";
                changeParticleColor("#ff2a2a"); 
            } else {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "🌙";
                changeParticleColor("#00e5ff"); 
            }
        });
    }

    // ===============================
    // NAVBAR SCROLL EFFECT
    // ===============================
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.style.background = "rgba(0,0,0,0.65)";
                navbar.style.backdropFilter = "blur(20px)";
                navbar.style.boxShadow = "0 0 20px rgba(0,229,255,.15)";
            } else {
                navbar.style.background = "rgba(0,0,0,0.15)";
                navbar.style.boxShadow = "none";
            }
        });
    }

    // ===============================
    // REVEAL ANIMATION
    // ===============================
    const revealElements = document.querySelectorAll(".glass-card, .project-card, .section-title");
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0px)";
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(element => {
            element.style.opacity = "0";
            element.style.transform = "translateY(50px)";
            element.style.transition = "all 0.8s ease";
            observer.observe(element);
        });
    }

    // ===============================
    // HERO TYPEWRITER
    // ===============================
    const heroSubtitle = document.querySelector(".hero p");
    if (heroSubtitle) {
        const originalText = heroSubtitle.innerText;
        heroSubtitle.innerText = "";
        let index = 0;

        function typeWriter() {
            if (index < originalText.length) {
                heroSubtitle.innerText += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 20);
            }
        }
        typeWriter();
    }

    // ===============================
    // CYBERPUNK PARTICLES
    // ===============================
    const particleContainer = document.querySelector(".bg-animation");
    if (particleContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement("span");
            particle.classList.add("particle");
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Initialization security layer
            particle.style.background = document.body.classList.contains("blood-moon") ? "#ff2a2a" : "#00e5ff";
            
            particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particleContainer.appendChild(particle);
        }

        // ===============================
        // PARALLAX EFFECT
        // ===============================
        window.addEventListener("mousemove", (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;
            particleContainer.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // ===============================
    // ACTIVE NAVIGATION
    // ===============================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        });
    }

    // ===============================
    // PROJECT CARD GLOW (COLOR ADAPTIVE)
    // ===============================
    const cards = document.querySelectorAll(".project-card");
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener("mousemove", e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const glowColor = document.body.classList.contains("blood-moon") 
                    ? "rgba(255, 42, 42, 0.2)" 
                    : "rgba(0, 229, 255, 0.15)";
                    
                card.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, rgba(255,255,255,.03))`;
            });
            card.addEventListener("mouseleave", () => {
                card.style.background = "rgba(255,255,255,.06)";
            });
        });
    }

}); // Secure execution envelope closure
