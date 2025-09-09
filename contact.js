
document.addEventListener('DOMContentLoaded', function() {
    // Créer l'animation de fond
    createBackgroundAnimation();
    
    // Afficher le contenu avec animation
    setTimeout(() => {
        document.getElementById('contactContainer').classList.add('visible');
        document.getElementById('footer').classList.add('visible');
    }, 300);
    
    // Animation des éléments au défilement
    const animatedElements = document.querySelectorAll('.form-group, .separator, .submit-btn');
    
    function animateOnScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial animation
    setTimeout(animateOnScroll, 500);
    
    // Écouter l'événement de défilement
    window.addEventListener('scroll', animateOnScroll);
    
    // Gestion de la soumission du formulaire
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Valider le formulaire
        if (validateForm()) {
            // Récupérer les valeurs du formulaire
            const prenom = document.getElementById('prenom').value;
            const nom = document.getElementById('nom').value;
            const sujet = document.getElementById('sujet').value;
            const objectif = document.getElementById('objectif').value;
            
            // Animation de succès
            showNotification('Message envoyé avec succès !', 'success');
            
            const submitButton = document.getElementById('submitBtn');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-check-circle"></i> Envoyé !';
            submitButton.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
            
            // Réinitialiser après 3 secondes
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.style.background = 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)';
                contactForm.reset();
            }, 3000);
            
            // Ici, vous pourriez ajouter un envoi de données à un serveur
            console.log('Formulaire soumis:', { prenom, nom, sujet, objectif });
        } else {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
        }
    });
    
    // Effet de focus sur les champs du formulaire
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-5px)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
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
    
    // Fonctions utilitaires
    function createBackgroundAnimation() {
        const background = document.getElementById('backgroundAnimation');
        const colors = ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.15)', 'rgba(255,255,255,0.05)'];
        
        for (let i = 0; i < 15; i++) {
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
    
    function validateForm() {
        const prenom = document.getElementById('prenom').value;
        const nom = document.getElementById('nom').value;
        const sujet = document.getElementById('sujet').value;
        const objectif = document.getElementById('objectif').value;
        
        return prenom !== '' && nom !== '' && sujet !== '' && objectif !== '';
    }
    
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        if (type === 'error') notification.classList.add('error');
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }
    
    // Effet de saisie de texte
    const textElements = document.querySelectorAll('h1, .subtitle');
    textElements.forEach((element, index) => {
        const originalText = element.textContent;
        element.textContent = '';
        
        setTimeout(() => {
            typeWriterEffect(element, originalText, 0, 50);
        }, index * 300);
    });
    
    function typeWriterEffect(element, text, i, speed) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(function() {
                typeWriterEffect(element, text, i+1, speed);
            }, speed);
        }
    }

    // Forcer l'affichage complet de la page
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});
    