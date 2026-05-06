document.addEventListener('DOMContentLoaded', () => {
    // --- NAVIGATION HIGHLIGHT LOGIC ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header-nav a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // --- INITIALIZE EFFECTS ---
    createBinaryBackground();
});

// --- BINARY BACKGROUND LOGIC ---
function createBinaryBackground() {
    const bg = document.getElementById('binary-bg');
    if (!bg) return;

    const columnCount = Math.floor(window.innerWidth / 40);

    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';

        const leftPos = Math.random() * 100;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 5;

        column.style.left = `${leftPos}%`;
        column.style.animationDuration = `${duration}s`;
        column.style.animationDelay = `-${delay}s`;

        let binaryStr = "";
        for (let j = 0; j < 40; j++) {
            binaryStr += Math.round(Math.random()) + "<br>";
        }
        column.innerHTML = binaryStr;
        bg.appendChild(column);
    }
}