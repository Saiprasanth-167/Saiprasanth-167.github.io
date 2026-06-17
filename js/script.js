/* ======================================
   CYBERPUNK AI PORTFOLIO
   Sai Prasanth
====================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===============================
    // DARK MODE BY DEFAULT (Toggle Removed)
    // ===============================
    document.body.classList.remove("light", "blood-moon");

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
            
            // Reverted back to classic neon cyan
            particle.style.background = "#00e5ff";
            
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
// ==========================================
// INTERACTIVE ACADEMIC TIMELINE INTERNALS
// ==========================================
const academicData = {
    1: {
        gpa: "7.54", // Replace with your real 1st Year CGPA
        title: "FIRST YEAR METRICS",
        achievements: [
            "Maintained an exceptional academic standard over fundamental core courses.",
            "Built foundational understanding of Object-Oriented Programming structures and Engineering Mathematics.",
            "Engaged in core logic optimization and foundational algorithm frameworks."
           "Joined into NSS and awarded many awards and felicitations from my college"
        ]
    },
    2: {
        gpa: "7.43", // Replace with your real 2nd Year CGPA
        title: "SECOND YEAR METRICS",
        achievements: [
            "Specialized in advanced Data Structures, Object-Oriented Analysis (OOSE), and Database Management Systems.",
            "Mastered core full-stack web development integration frameworks using Python and Flask.",
            "Lead a Contigent of 21 members in my college Parade During August 15 as part of NSS"
        ]
    },
    3: {
        gpa: "Final Sem results Pending", // Replace with your real 3rd Year CGPA
        title: "THIRD YEAR METRICS",
        achievements: [
            "Deepened research expertise across Deep Learning architectures and Natural Language Processing vectors.",
            "Engineered secure decentralized application architectures and optimized API delivery layers.",
            "Got selected for prestigeous camp ever held at IITG, Honoured by Governor of Assam"
           "Now I am the Vice-President of a club named Paryavaran for entire 3 campuses and also got promoted as NSS incharge of our college"
        ]
    },
    4: {
        gpa: "Pending", // Replace with your real 4th Year CGPA when ready
        title: "FINAL YEAR ADVANCEMENTS",
        achievements: [
            "In Progress to Achievements"
        ]
    }
};

window.switchYear = function(yearNumber, buttonElement) {
    // Remove active markers from all sibling nodes
    document.querySelectorAll('.year-node').forEach(node => node.classList.remove('active'));
    // Mark clicked button as active dashboard node
    buttonElement.classList.add('active');
    
    const screen = document.getElementById('academic-display-screen');
    
    // Add visual structural transition out
    screen.classList.add('fade-out-effect');
    
    setTimeout(() => {
        const data = academicData[yearNumber];
        document.getElementById('display-gpa').innerText = data.gpa;
        document.getElementById('display-year-title').innerText = data.title;
        
        // Rebuild list nodes under glass matrix
        const listContainer = document.getElementById('display-achievements');
        listContainer.innerHTML = '';
        data.achievements.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            listContainer.appendChild(li);
        });
        
        // Visual structural transition back in
        screen.classList.remove('fade-out-effect');
    }, 200);
};
    // ===============================
    // PROJECT CARD GLOW
    // ===============================
    const cards = document.querySelectorAll(".project-card");
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener("mousemove", e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,229,255,.15), rgba(255,255,255,.03))`;
            });
            card.addEventListener("mouseleave", () => {
                card.style.background = "rgba(255,255,255,.06)";
            });
        });
    }

});

console.log(`
=====================================
       Sai Prasanth Portfolio
   AI Engineer | IIT Guwahati Research
=====================================
`);
