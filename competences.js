document.addEventListener('DOMContentLoaded', function() {
            // Créer l'animation de fond
            createBackgroundAnimation();
            
            // Animation des barres de compétences
            animateSkills();
            
            // Animation des éléments au défilement
            const skills = document.querySelectorAll('.skill');
            
            function animateOnScroll() {
                skills.forEach(skill => {
                    const skillPosition = skill.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (skillPosition < screenPosition) {
                        skill.classList.add('visible');
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
            
            function animateSkills() {
                const skillLevels = document.querySelectorAll('.skill-level');
                
                skillLevels.forEach(level => {
                    const percent = level.getAttribute('data-level');
                    const percentElement = level.querySelector('.skill-percent');
                    
                    // Animer la barre de compétence
                    setTimeout(() => {
                        level.style.width = percent + '%';
                        
                        // Animer le pourcentage
                        let currentPercent = 0;
                        const interval = setInterval(() => {
                            if (currentPercent >= percent) {
                                clearInterval(interval);
                            } else {
                                currentPercent++;
                                percentElement.textContent = currentPercent + '%';
                            }
                        }, 2000 / percent);
                    }, 300);
                });
            }
        });
