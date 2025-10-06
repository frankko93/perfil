// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Visit counter functionality
    let secretCode = '';
    const correctCode = 'franco';
    
    function updateVisitCounter() {
        let visits = localStorage.getItem('pageVisits') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('pageVisits', visits);
        
        // Create counter element but keep it hidden
        let counterElement = document.getElementById('visit-counter');
        if (!counterElement) {
            counterElement = document.createElement('div');
            counterElement.id = 'visit-counter';
            counterElement.style.position = 'fixed';
            counterElement.style.bottom = '20px';
            counterElement.style.right = '20px';
            counterElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            counterElement.style.color = '#10B981';
            counterElement.style.padding = '10px 15px';
            counterElement.style.borderRadius = '20px';
            counterElement.style.fontSize = '14px';
            counterElement.style.zIndex = '1000';
            counterElement.style.display = 'none'; // Hidden by default
            document.body.appendChild(counterElement);
        }
        counterElement.textContent = `Visitas: ${visits}`;
    }
    
    // Secret code listener
    document.addEventListener('keypress', function(e) {
        secretCode += e.key;
        if (secretCode.length > correctCode.length) {
            secretCode = secretCode.slice(-correctCode.length);
        }
        
        if (secretCode === correctCode) {
            const counterElement = document.getElementById('visit-counter');
            if (counterElement) {
                counterElement.style.display = counterElement.style.display === 'none' ? 'block' : 'none';
            }
            secretCode = ''; // Reset the code
        }
    });
    
    updateVisitCounter();

    // Referencias a elementos del DOM
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const languageSelector = document.querySelector('.language-selector');
    const languageButtons = document.querySelectorAll('.language-selector button');
    const contactForm = document.querySelector('.contact-form');
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    // Detectar scroll para cambiar el estilo del header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Llamar a la función de scroll spy
        updateActiveNavLink();
    });
    
    // Función para actualizar el enlace activo según la sección visible
    function updateActiveNavLink() {
        // Obtener la posición actual del scroll
        let scrollPosition = window.scrollY;
        
        // Ajuste para compensar la altura del header
        const headerHeight = header.offsetHeight;
        scrollPosition += headerHeight + 50; // Añadimos un poco más para mejorar la detección
        
        // Verificar qué sección está actualmente visible
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remover la clase 'active' de todos los enlaces
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Agregar la clase 'active' al enlace correspondiente
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Activar inicialmente la función para marcar el enlace activo
    updateActiveNavLink();
    
    // Menú móvil
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        languageSelector.classList.toggle('active');
        
        // Animar las barras del botón
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
    
    // Suavizar la navegación de los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Cerrar el menú móvil si está abierto
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    languageSelector.classList.remove('active');
                    mobileMenuBtn.querySelectorAll('span').forEach(span => span.classList.remove('active'));
                }
                
                // Calcular la posición de desplazamiento ajustando para el header fijo
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Language system with optional external JSON loading
    let translations = null;
    
    // Function to load translations from external JSON file (optional)
    async function loadTranslationsFromJSON() {
        try {
            const response = await fetch('./translations.json');
            if (response.ok) {
                const data = await response.json();
                console.log('Translations loaded from external JSON file');
                return data;
            }
        } catch (error) {
            console.log('Could not load external translations, using embedded ones');
        }
        return null;
    }
    
    // Initialize translations (try external first, fallback to embedded)
    async function initializeTranslations() {
        const externalTranslations = await loadTranslationsFromJSON();
        
        if (externalTranslations) {
            translations = externalTranslations;
        } else {
            // Fallback to embedded translations
            translations = {
        'es': {
            'nav': {
                'sobreMi': 'Sobre mí',
                'experiencia': 'Experiencia',
                'tecnologias': 'Tecnologías',
                'pasatiempos': 'Pasatiempos',
                'contacto': 'Contacto'
            },
            'hero': {
                'rol': 'Software Engineer | Consultor IT',
                'tagline': 'Creando el futuro, una línea de código a la vez',
                'resumen': 'Me encanta resolver problemas complejos y convertir ideas en realidad digital. Con más de 10 años ayudando a empresas como Mercado Libre y startups fintech, disfruto cada día construyendo tecnología que mejora la vida de las personas.',
                'contactar': 'Contactar',
                'verExperiencia': 'Ver experiencia'
            },
            'sobreMi': {
                'titulo': 'Un poco más sobre mí',
                'parrafo1': 'Soy de esas personas que ve un problema y piensa "¿cómo podemos hacer esto mejor?". He tenido la suerte de trabajar en proyectos increíbles, desde sistemas de pagos que usan millones de personas hasta plataformas que conectan comerciantes con sus sueños.',
                'parrafo2': 'Lo que más me motiva es trabajar en equipo, compartir conocimiento y ver cómo nuestras ideas cobran vida. Cuando no estoy programando, probablemente esté aprendiendo algo nuevo, haciendo deporte o planeando mi próxima aventura de buceo.'
            },
            'experiencia': {
                'titulo': 'Experiencia Laboral',
                'actual': {
                    'rol': 'Software Engineer',
                    'empresa': 'Pomelo',
                    'periodo': '2022 - Actualidad',
                    'descripcion': 'Desarrollo de soluciones fintech para procesamiento de pagos y servicios financieros, con enfoque principal en backend pero también contribuyendo al frontend. Implementación de APIs RESTful y arquitecturas escalables.',
                    'logros': [
                        'Desarrollo de microservicios con Node.js, TypeScript, Java, kotlin y Golang (Algunos con distintos framerworks)',
                        'Implementación de distintas arquitecturas y servicios en AWS',
                        'Integración con APIs de distintos proveedores (Governamentales, de Pagos, Regulatorios, etc)',
                        'Optimización de rendimiento y seguridad de APIs'
                    ]
                },
                'anterior': {
                    'rol': 'Fullstack Developer',
                    'empresa': 'Mercado Libre',
                    'periodo': '2019 - 2022',
                    'descripcion': 'Desarrollo fullstack para la plataforma de comercio y pagos electrónicos, implementando tanto servicios frontend como backend e interfaces de usuario, trabajando en equipos ágiles y contribuyendo a la mejora continua.',
                    'logros': [
                        'Implementación de APIs escalables con NodeJS, Goland, Java, kotlin y Spring Boot',
                        'Desarrollo de frontends con React y tecnologías afines',
                        'Integración con bases de datos NoSQL y relacionales',
                        'Implementación de patrones de diseño para microservicios'
                    ]
                }
            },
            'tecnologias': {
                'titulo': 'Tecnologías',
                'categorias': {
                    'lenguajes': 'Lenguajes',
                    'herramientas': 'Herramientas y tecnologías'
                },
                'items': {
                    'golang': 'Go (Golang)',
                    'java': 'Java',
                    'typescript': 'TypeScript',
                    'js': 'JavaScript',
                    'html': 'HTML / CSS',
                    'sql': 'SQL',
                    'bash': 'Bash / Shell scripting',
                    'aws': 'AWS',
                    'git': 'Git & GitHub',
                    'docker': 'Docker',
                    'spring': 'Spring Boot',
                    'react': 'React',
                    'node': 'Node.js / Express',
                    'tailwind': 'Tailwind CSS',
                    'cicd': 'CI/CD',
                    'nosql': 'NoSQL / SQL'
                }
            },
            'pasatiempos': {
                'titulo': 'Pasatiempos',
                'deportes': {
                    'titulo': 'Deportes',
                    'descripcion': 'Me gusta mantenerme activo. Juego pádel y fútbol varias veces por semana, voy al gimnasio con regularidad y disfruto todo lo que implique movimiento y energía.'
                },
                'buceo': {
                    'titulo': 'Buceo',
                    'descripcion': 'Soy buzo certificado y me fascina explorar el mundo submarino. Es una forma única de conectar con la naturaleza desde otra perspectiva.'
                },
                'fotografia': {
                    'titulo': 'Fotografía',
                    'descripcion': 'La fotografía es una forma de capturar momentos, lugares y detalles que me inspiran. Es un hobby que combina creatividad con observación.'
                },
                'viajar': {
                    'titulo': 'Viajar y descubrir',
                    'descripcion': 'Me encanta conocer nuevos lugares, culturas y comidas. Siempre busco experiencias auténticas, cerca del mar si es posible.'
                },
                'tecnologia': {
                    'titulo': 'Tecnología y aprendizaje continuo',
                    'descripcion': 'Siempre estoy explorando nuevas herramientas, aprendiendo sobre inteligencia artificial o metido en algún proyecto personal para seguir creciendo.'
                }
            },
            'contacto': {
                'titulo': 'Contacto',
                'correo': 'E-mail',
                'linkedin': 'LinkedIn',
                'github': 'GitHub',
                'instagram': 'Instagram',
                'acciones': {
                    'correo': 'Enviar correo',
                    'linkedin': 'Conectar',
                    'github': 'Ver perfil',
                    'instagram': 'Seguir'
                }
            },
            'footer': {
                'derechos': '© 2023 Franco Luciano Aballay. Todos los derechos reservados.'
            }
        },
        'en': {
            'nav': {
                'sobreMi': 'About me',
                'experiencia': 'Experience',
                'tecnologias': 'Technologies',
                'pasatiempos': 'Hobbies',
                'contacto': 'Contact'
            },
            'hero': {
                'rol': 'Software Engineer | IT Consultant',
                'tagline': 'Building the future, one line of code at a time',
                'resumen': 'I love solving complex problems and turning ideas into digital reality. With over 10 years helping companies like Mercado Libre and fintech startups, I enjoy every day building technology that improves people\'s lives.',
                'contactar': 'Contact',
                'verExperiencia': 'View experience'
            },
            'sobreMi': {
                'titulo': 'A bit more about me',
                'parrafo1': 'I\'m one of those people who sees a problem and thinks "how can we make this better?". I\'ve been lucky to work on incredible projects, from payment systems used by millions to platforms that connect merchants with their dreams.',
                'parrafo2': 'What motivates me most is working as a team, sharing knowledge, and seeing our ideas come to life. When I\'m not coding, I\'m probably learning something new, doing sports, or planning my next diving adventure.'
            },
            'experiencia': {
                'titulo': 'Work Experience',
                'actual': {
                    'rol': 'Software Engineer',
                    'empresa': 'Pomelo',
                    'periodo': '2022 - Present',
                    'descripcion': 'Development of fintech solutions for payment processing and financial services, with primary focus on backend but also contributing to frontend. Implementation of RESTful APIs and scalable architectures.',
                    'logros': [
                        'Development of microservices with Node.js, TypeScript, Java, kotlin and Golang (Some with different frameworks)',
                        'Implementation of various architectures and services in AWS',
                        'Integration with APIs from different providers (Government, Payment, Regulatory, etc)',
                        'Optimization of API performance and security'
                    ]
                },
                'anterior': {
                    'rol': 'Fullstack Developer',
                    'empresa': 'Mercado Libre',
                    'periodo': '2019 - 2022',
                    'descripcion': 'Fullstack development for the e-commerce and electronic payments platform, implementing both frontend and backend services and user interfaces, working in agile teams and contributing to continuous improvement.',
                    'logros': [
                        'Implementation of scalable APIs with NodeJS, Goland, Java, kotlin and Spring Boot',
                        'Frontend development with React and related technologies',
                        'Integration with NoSQL and relational databases',
                        'Implementation of design patterns for microservices'
                    ]
                }
            },
            'tecnologias': {
                'titulo': 'Technologies',
                'categorias': {
                    'lenguajes': 'Languages',
                    'herramientas': 'Tools & Technologies'
                },
                'items': {
                    'golang': 'Go (Golang)',
                    'java': 'Java',
                    'typescript': 'TypeScript',
                    'js': 'JavaScript',
                    'html': 'HTML / CSS',
                    'sql': 'SQL',
                    'bash': 'Bash / Shell scripting',
                    'aws': 'AWS',
                    'git': 'Git & GitHub',
                    'docker': 'Docker',
                    'spring': 'Spring Boot',
                    'react': 'React',
                    'node': 'Node.js / Express',
                    'tailwind': 'Tailwind CSS',
                    'cicd': 'CI/CD',
                    'nosql': 'NoSQL / SQL'
                }
            },
            'pasatiempos': {
                'titulo': 'Hobbies',
                'deportes': {
                    'titulo': 'Sports',
                    'descripcion': 'I like to stay active. I play padel and soccer several times a week, go to the gym regularly, and enjoy anything that involves movement and energy.'
                },
                'buceo': {
                    'titulo': 'Diving',
                    'descripcion': 'I am a certified diver and I am fascinated by exploring the underwater world. It is a unique way to connect with nature from another perspective.'
                },
                'fotografia': {
                    'titulo': 'Photography',
                    'descripcion': 'Photography is a way to capture moments, places, and details that inspire me. It is a hobby that combines creativity with observation.'
                },
                'viajar': {
                    'titulo': 'Travel and discovery',
                    'descripcion': 'I love discovering new places, cultures, and food. I always look for authentic experiences, preferably near the sea.'
                },
                'tecnologia': {
                    'titulo': 'Technology and continuous learning',
                    'descripcion': 'I am always exploring new tools, learning about artificial intelligence, or involved in some personal project to keep growing.'
                }
            },
            'contacto': {
                'titulo': 'Contact',
                'correo': 'Email',
                'linkedin': 'LinkedIn',
                'github': 'GitHub',
                'instagram': 'Instagram',
                'acciones': {
                    'correo': 'Send email',
                    'linkedin': 'Connect',
                    'github': 'View profile',
                    'instagram': 'Follow'
                }
            },
            'footer': {
                'derechos': '© 2023 Franco Luciano Aballay. All rights reserved.'
            }
        },
        'it': {
            'nav': {
                'sobreMi': 'Su di me',
                'experiencia': 'Esperienza',
                'tecnologias': 'Tecnologie',
                'pasatiempos': 'Hobby',
                'contacto': 'Contatto'
            },
            'hero': {
                'rol': 'Software Engineer | Consulente IT',
                'tagline': 'Costruendo il futuro, una riga di codice alla volta',
                'resumen': 'Adoro risolvere problemi complessi e trasformare idee in realtà digitale. Con oltre 10 anni aiutando aziende come Mercado Libre e startup fintech, mi diverto ogni giorno costruendo tecnologia che migliora la vita delle persone.',
                'contactar': 'Contattare',
                'verExperiencia': 'Visualizza esperienza'
            },
            'sobreMi': {
                'titulo': 'Un po\' di più su di me',
                'parrafo1': 'Sono una di quelle persone che vede un problema e pensa "come possiamo migliorare questo?". Ho avuto la fortuna di lavorare su progetti incredibili, dai sistemi di pagamento usati da milioni di persone alle piattaforme che collegano i commercianti ai loro sogni.',
                'parrafo2': 'Quello che mi motiva di più è lavorare in squadra, condividere conoscenze e vedere le nostre idee prendere vita. Quando non sto programmando, probabilmente sto imparando qualcosa di nuovo, facendo sport o pianificando la mia prossima avventura subacquea.'
            },
            'experiencia': {
                'titulo': 'Esperienza lavorativa',
                'actual': {
                    'rol': 'Ingegnere del Software',
                    'empresa': 'Pomelo',
                    'periodo': '2022 - Attuale',
                    'descripcion': 'Sviluppo di soluzioni fintech per l\'elaborazione dei pagamenti e servizi finanziari, con focus principale sul backend ma contribuendo anche al frontend. Implementazione di API RESTful e architetture scalabili.',
                    'logros': [
                        'Sviluppo di microservizi con Node.js, TypeScript, Java, kotlin e Golang (Alcuni con diversi framework)',
                        'Implementazione di diverse architetture e servizi in AWS',
                        'Integrazione con API di diversi fornitori (Governativi, di Pagamento, Regolatori, ecc)',
                        'Ottimizzazione delle prestazioni e della sicurezza delle API'
                    ]
                },
                'anterior': {
                    'rol': 'Sviluppatore Fullstack',
                    'empresa': 'Mercado Libre',
                    'periodo': '2019 - 2022',
                    'descripcion': 'Sviluppo fullstack per la piattaforma di commercio elettronico e pagamenti, implementando sia servizi frontend che backend e interfacce utente, lavorando in team agili e contribuendo al miglioramento continuo.',
                    'logros': [
                        'Implementazione di API scalabili con NodeJS, Goland, Java, kotlin e Spring Boot',
                        'Sviluppo di frontend con React e tecnologie correlate',
                        'Integrazione con database NoSQL e relazionali',
                        'Implementazione di pattern di design per microservizi'
                    ]
                }
            },
            'tecnologias': {
                'titulo': 'Tecnologie',
                'categorias': {
                    'lenguajes': 'Linguaggi',
                    'herramientas': 'Strumenti e Tecnologie'
                },
                'items': {
                    'golang': 'Go (Golang)',
                    'java': 'Java',
                    'typescript': 'TypeScript',
                    'js': 'JavaScript',
                    'html': 'HTML / CSS',
                    'sql': 'SQL',
                    'bash': 'Bash / Shell scripting',
                    'aws': 'AWS',
                    'git': 'Git & GitHub',
                    'docker': 'Docker',
                    'spring': 'Spring Boot',
                    'react': 'React',
                    'node': 'Node.js / Express',
                    'tailwind': 'Tailwind CSS',
                    'cicd': 'CI/CD',
                    'nosql': 'NoSQL / SQL'
                }
            },
            'pasatiempos': {
                'titulo': 'Hobby',
                'deportes': {
                    'titulo': 'Sport',
                    'descripcion': 'Mi piace mantenermi attivo. Gioco a padel e calcio diverse volte a settimana, vado regolarmente in palestra e mi piace tutto ciò che implica movimento ed energia.'
                },
                'buceo': {
                    'titulo': 'Immersioni',
                    'descripcion': 'Sono un subacqueo certificato e mi affascina esplorare il mondo sottomarino. È un modo unico per connettersi con la natura da un\'altra prospettiva.'
                },
                'fotografia': {
                    'titulo': 'Fotografia',
                    'descripcion': 'La fotografia è un modo per catturare momenti, luoghi e dettagli che mi ispirano. È un hobby che combina creatività con osservazione.'
                },
                'viajar': {
                    'titulo': 'Viaggiare e scoprire',
                    'descripcion': 'Adoro scoprire nuovi luoghi, culture e cibi. Cerco sempre esperienze autentiche, preferibilmente vicino al mare.'
                },
                'tecnologia': {
                    'titulo': 'Tecnologia e apprendimento continuo',
                    'descripcion': 'Sto sempre esplorando nuovi strumenti, imparando sull\'intelligenza artificiale o coinvolto in qualche progetto personale per continuare a crescere.'
                }
            },
            'contacto': {
                'titulo': 'Contatto',
                'correo': 'Email',
                'linkedin': 'LinkedIn',
                'github': 'GitHub',
                'instagram': 'Instagram',
                'acciones': {
                    'correo': 'Invia email',
                    'linkedin': 'Connetti',
                    'github': 'Vedi profilo',
                    'instagram': 'Segui'
                }
            },
            'footer': {
                'derechos': '© 2023 Franco Luciano Aballay. Tutti i diritti riservati.'
            }
            }
        }
    }
    
    // Initialize the application
    async function initializeApp() {
        await initializeTranslations();
        
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage && translations[savedLanguage]) {
            changeLanguage(savedLanguage);
        }
    }
    
    // Call initialization
    initializeApp();
    
    // Función para aplicar traducciones usando atributos data-i18n
    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');
            
            // Navigate through translations object using the keys
            let translation = translations[lang];
            for (const k of keys) {
                // Handle array indices (for achievements and other arrays)
                if (!isNaN(k) && Array.isArray(translation)) {
                    translation = translation[parseInt(k)];
                } else if (translation && translation[k] !== undefined) {
                    translation = translation[k];
                } else {
                    console.warn(`Translation key not found: ${key}`);
                    return;
                }
            }
            
            // Apply the translation
            if (translation !== undefined) {
                element.textContent = translation;
            }
        });
    }
    
    // Function to change language
    function changeLanguage(lang) {
        // Update html lang attribute
        document.documentElement.lang = lang;
        
        // Update active classes on language buttons
        languageButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Save preference in localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        // Apply translations using data-i18n attributes - this handles everything now!
        applyTranslations(lang);
    }
    
    // Configure language change events
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    // Formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí se implementaría la lógica para enviar el formulario
            // Por ejemplo, usando fetch para enviar a un endpoint
            
            const formData = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                message: this.querySelector('#message').value
            };
            
            // Ejemplo de mostrar un mensaje de confirmación
            alert('¡Mensaje enviado con éxito! Gracias por contactarme.');
            
            // Limpiar el formulario
            this.reset();
        });
    }
    
    // Efectos de animación al hacer scroll
    const animateOnScroll = function() {
        const items = document.querySelectorAll('.job-card, .tech-category, .hobby-item');
        
        items.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.classList.add('visible');
            }
        });
    };
    
    // Agregar estilos para la animación del menú móvil
    const mobileMenuStyle = document.createElement('style');
    mobileMenuStyle.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn span:nth-child(1) {
                transform-origin: left;
            }
            
            .mobile-menu-btn span:nth-child(3) {
                transform-origin: left;
            }
            
            .mobile-menu-btn span.active:nth-child(1) {
                transform: rotate(45deg);
            }
            
            .mobile-menu-btn span.active:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-btn span.active:nth-child(3) {
                transform: rotate(-45deg);
            }
        }
    `;
    document.head.appendChild(mobileMenuStyle);
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
}); 