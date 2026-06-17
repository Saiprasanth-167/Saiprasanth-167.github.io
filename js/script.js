/* ======================================
   CYBERPUNK AI PORTFOLIO
   Sai Prasanth
====================================== */
// ==========================================
// STANDALONE NESTED TIMELINE CONTROLLER
// ==========================================
window.toggleYearTimeline = function(yearNumber, buttonElement) {
    // 1. Remove active markers from all selector row buttons
    document.querySelectorAll('.year-node').forEach(btn => btn.classList.remove('active'));
    
    // 2. Hide all open year text boards
    document.querySelectorAll('.sub-year-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // 3. Mount active flags onto selected node structures
    if (buttonElement) buttonElement.classList.add('active');
    
    const activePanel = document.getElementById(`year-panel-${yearNumber}`);
    if (activePanel) {
        activePanel.classList.add('active');
    }
};
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
    // HERO TYPEWRITER (SAFE STRUCTURAL MODE)
    // ===============================
    const heroSubtitle = document.querySelector(".cyber-typewriter");
    if (heroSubtitle) {
        const targetHTML = heroSubtitle.innerHTML.trim();
        heroSubtitle.innerHTML = ""; // Flush the placeholder initial markup
        heroSubtitle.style.opacity = "1";
        
        let currentProgress = 0;
        
        function typeWriterEngine() {
            if (currentProgress < targetHTML.length) {
                // Skip the entire HTML tag if encountered (<br> or <span>) to keep formatting intact
                if (targetHTML.charAt(currentProgress) === '<') {
                    currentProgress = targetHTML.indexOf('>', currentProgress) + 1;
                } else {
                    currentProgress++;
                }
                heroSubtitle.innerHTML = targetHTML.substring(0, currentProgress);
                setTimeout(typeWriterEngine, 15);
            }
        }
        
        if (document.readyState === "complete") {
            typeWriterEngine();
        } else {
            window.addEventListener("load", typeWriterEngine);
        }
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
// INTERACTIVE ACADEMIC DATA DICTIONARY
// ==========================================
const academicData = {
    1: {
        gpa: "7.54", 
        title: "FIRST YEAR METRICS",
        achievements: [
            "Maintained an exceptional academic standard over fundamental core courses.",
            "Built foundational understanding of Object-Oriented Programming models and engineering math.",
            "Engaged in logic building and algorithm development layouts.",
            "Joined into NSS and awarded many awards and felicitations from my college."
        ]
    },
    2: {
        gpa: "7.43", 
        title: "SECOND YEAR METRICS",
        achievements: [
            "Specialized in Advanced Data Structures, Object-Oriented Software Engineering (OOSE), and Database Frameworks.",
            "Mastered full-stack web integration architectures utilizing Python and Flask environments.",
            "Explored practical applications of classical ciphers and K-Means clustering engines.",
            "Led a Contingent of 21 members in my college Parade During August 15 as part of NSS."
        ]
    },
    3: {
        gpa: "Final Sem Results Pending", 
        title: "THIRD YEAR METRICS",
        achievements: [
            "Deepened development expertise across Progressive Web Application (PWA) deployment frameworks.",
            "Optimized backend logic distribution layouts and structural database queries.",
            "Got selected for prestigious camp ever held at IITG, Honoured by Governor of Assam.",
            "Now I am the Vice-President of a club named Paryavaran for entire 3 campuses and also got promoted as NSS incharge of our college."
        ]
    },
    4: {
        gpa: "Pending", 
        title: "FINAL YEAR ADVANCEMENTS",
        achievements: [
            "In Progress to Achievements."
        ]
    }
};

// Expose the switch routine to the global browser window scope immediately
window.switchYear = function(yearNumber, buttonElement) {
    // Drop active highlight class from all year node buttons
    document.querySelectorAll('.year-node').forEach(node => node.classList.remove('active'));
    
    // Highlight the clicked year node button
    if (buttonElement) {
        buttonElement.classList.add('active');
    }
    
    const screen = document.getElementById('academic-display-screen');
    if (!screen) return;
    
    // Smooth fade visual exit transition
    screen.style.opacity = '0';
    screen.style.transform = 'translateY(5px)';
    
    setTimeout(() => {
        const data = academicData[yearNumber];
        if (!data) return;
        
        // Push raw values directly into the target DOM layout elements
        const gpaElement = document.getElementById('display-gpa');
        const titleElement = document.getElementById('display-year-title');
        const listContainer = document.getElementById('display-achievements');
        
        if (gpaElement) gpaElement.innerText = data.gpa;
        if (titleElement) titleElement.innerText = data.title;
        
        if (listContainer) {
            listContainer.innerHTML = '';
            data.achievements.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                listContainer.appendChild(li);
            });
        }
        
        // Smooth fade visual entrance transition
        screen.style.opacity = '1';
        screen.style.transform = 'translateY(0px)';
    }, 180);
};   // ===============================
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
