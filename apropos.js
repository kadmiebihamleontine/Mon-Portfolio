document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments au défilement
    const fadeElements = document.querySelectorAll('.fade-in, .text-content, .image-content');
    
    // Fonction pour vérifier si un élément est dans le viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
        );
    }
    
    // Fonction pour gérer l'animation au défilement
    function handleScrollAnimation() {
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Déclencher l'animation initiale
    setTimeout(() => {
        handleScrollAnimation();
    }, 300);
    
    // Écouter l'événement de défilement
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Header qui rétrécit au défilement
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Gestion de la navigation active
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        // Si c'est la page actuelle
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'accueil.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Animation des boutons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Mode sombre/clair
    const themeToggle = document.querySelector('.theme-toggle');
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
    
    // Effet de saisie de texte
    const textElements = document.querySelectorAll('.text-content p');
    textElements.forEach((element, index) => {
        // Sauvegarder le texte original
        const originalText = element.textContent;
        element.setAttribute('data-text', originalText);
        
        // Effet de frappe au défilement
        setTimeout(() => {
            if (isInViewport(element)) {
                typeWriterEffect(element, originalText, 0, 30);
            }
        }, index * 500);
    });
    
    function typeWriterEffect(element, text, i, speed) {
        if (i < text.length) {
            element.textContent = text.substring(0, i+1);
            setTimeout(function() {
                typeWriterEffect(element, text, i+1, speed);
            }, speed);
        }
    }
    
    // Animation de la photo de profil
    const profileImage = document.querySelector('.image-content img');
    profileImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});