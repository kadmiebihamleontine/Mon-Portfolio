document.addEventListener('DOMContentLoaded', function() {
    // Animation d'entrée des éléments
    const textContent = document.querySelector('.text-content');
    const imageContent = document.querySelector('.image-content');
    
    // Fonction pour vérifier si un élément est dans le viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Fonction pour gérer l'animation au défilement
    function handleScrollAnimation() {
        if (isInViewport(textContent)) {
            textContent.classList.add('visible');
        }
        
        if (isInViewport(imageContent)) {
            imageContent.classList.add('visible');
        }
    }
    
    // Déclencher l'animation initiale
    setTimeout(() => {
        textContent.classList.add('visible');
        imageContent.classList.add('visible');
    }, 300);
    
    // Écouter l'événement de défilement
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Gestion de la navigation active
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        // Si c'est la page d'accueil (lien avec # ou vide)
        if ((currentPage === 'index.html' || currentPage === '') && (linkPage === '#' || linkPage === '')) {
            link.classList.add('active');
        } 
        // Pour les autres pages
        else if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Animation du bouton
    const button = document.querySelector('button');
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 7px 15px rgba(0, 0, 0, 0.2)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    // Effet de transition douce pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});