
document.addEventListener('DOMContentLoaded', function() {
    // Créer l'animation de fond
    createBackgroundAnimation();
    
    // Animation des projets au défilement
    const projectCards = document.querySelectorAll('.project-card');
    
    function animateOnScroll() {
        projectCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.classList.add('visible');
            }
        });
    }
    
    // Initial animation
    setTimeout(animateOnScroll, 300);
    
    // Écouter l'événement de défilement
    window.addEventListener('scroll', animateOnScroll);
    
    // Mode sombre/clair
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
    
    // Filtrage des projets
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            
            // Filtrer les projets
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Effet de zoom sur les images au survol
    const projectImages = document.querySelectorAll('.project-card img');
    
    projectImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Fonctions utilitaires
    function createBackgroundAnimation() {
        const background = document.getElementById('backgroundAnimation');
        const colors = ['rgba(52, 152, 219, 0.1)', 'rgba(46, 204, 113, 0.1)', 'rgba(155, 89, 182, 0.1)'];
        
        for (let i = 0; i < 12; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            
            // Propriétés aléatoires
            const size = Math.random() * 100 + 50;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.background = color;
            circle.style.top = `${Math.random() * 100}%`;
            circle.style.left = `${Math.random() * 100}%`;
            circle.style.animationDelay = `${Math.random() * 10}s`;
            circle.style.animationDuration = `${15 + Math.random() * 15}s`;
            
            background.appendChild(circle);
        }
    }
});
    