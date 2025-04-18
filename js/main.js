// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Sistema de cambio de idioma
    const translations = {
        'es': {
            'nav': {
                'sobreMi': 'Sobre mí',
                'experiencia': 'Experiencia',
                'tecnologias': 'Tecnologías',
                'pasatiempos': 'Pasatiempos',
                'contacto': 'Contacto'
            },
            'hero': {
                'rol': 'Software Engineer',
                'resumen': 'Apasionado por crear soluciones con tecnología, siempre con un enfoque práctico y trabajando codo a codo con equipos diversos.',
                'contactar': 'Contactar',
                'verExperiencia': 'Ver experiencia'
            },
            'sobreMi': {
                'titulo': 'Sobre mí',
                'parrafo1': 'Soy un ingeniero de software con experiencia en el desarrollo de aplicaciones web y móviles. Me apasiona crear soluciones tecnológicas que impacten positivamente en la vida de las personas.',
                'parrafo2': 'A lo largo de mi carrera, he colaborado en equipos multidisciplinarios, lo que me ha permitido desarrollar habilidades de comunicación y trabajo en equipo, además de mis conocimientos técnicos.'
            },
            'experiencia': {
                'titulo': 'Experiencia Laboral',
                'actual': {
                    'rol': 'Software Engineer',
                    'empresa': 'Pomelo',
                    'periodo': '2022 - Actualidad',
                    'descripcion': 'Desarrollo de soluciones fintech para procesamiento de pagos y servicios financieros, con enfoque principal en backend pero también contribuyendo al frontend. Implementación de APIs RESTful y arquitecturas escalables.',
                    'logros': [
                        'Desarrollo de microservicios con Node.js, TypeScript, Java y Golang (Algunos con distintos framerworks)',
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
                        'Implementación de APIs escalables con NodeJS, Goland, Java y Spring Boot',
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
                'rol': 'Software Engineer',
                'resumen': 'Passionate about creating solutions with technology, always with a practical approach and working hand in hand with diverse teams.',
                'contactar': 'Contact',
                'verExperiencia': 'View experience'
            },
            'sobreMi': {
                'titulo': 'About me',
                'parrafo1': 'I am a software engineer with experience in web and mobile application development. I am passionate about creating technological solutions that positively impact people\'s lives.',
                'parrafo2': 'Throughout my career, I have collaborated in multidisciplinary teams, which has allowed me to develop communication and teamwork skills, in addition to my technical knowledge.'
            },
            'experiencia': {
                'titulo': 'Work Experience',
                'actual': {
                    'rol': 'Software Engineer',
                    'empresa': 'Pomelo',
                    'periodo': '2022 - Present',
                    'descripcion': 'Development of fintech solutions for payment processing and financial services, with primary focus on backend but also contributing to frontend. Implementation of RESTful APIs and scalable architectures.',
                    'logros': [
                        'Development of microservices with Node.js, TypeScript, Java and Golang (Some with different frameworks)',
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
                        'Implementation of scalable APIs with NodeJS, Goland, Java and Spring Boot',
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
                'rol': 'Ingegnere del Software',
                'resumen': 'Appassionato di creare soluzioni con la tecnologia, sempre con un approccio pratico e lavorando fianco a fianco con team diversi.',
                'contactar': 'Contattare',
                'verExperiencia': 'Visualizza esperienza'
            },
            'sobreMi': {
                'titulo': 'Su di me',
                'parrafo1': 'Sono un ingegnere del software con esperienza nello sviluppo di applicazioni web e mobili. Sono appassionato di creare soluzioni tecnologiche che impattino positivamente la vita delle persone.',
                'parrafo2': 'Durante la mia carriera, ho collaborato in team multidisciplinari, che mi ha permesso di sviluppare capacità di comunicazione e lavoro di squadra, oltre alle mie conoscenze tecniche.'
            },
            'experiencia': {
                'titulo': 'Esperienza lavorativa',
                'actual': {
                    'rol': 'Ingegnere del Software',
                    'empresa': 'Pomelo',
                    'periodo': '2022 - Attuale',
                    'descripcion': 'Sviluppo di soluzioni fintech per l\'elaborazione dei pagamenti e servizi finanziari, con focus principale sul backend ma contribuendo anche al frontend. Implementazione di API RESTful e architetture scalabili.',
                    'logros': [
                        'Sviluppo di microservizi con Node.js, TypeScript, Java e Golang (Alcuni con diversi framework)',
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
                        'Implementazione di API scalabili con NodeJS, Goland, Java e Spring Boot',
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
    };
    
    // Función para aplicar traducciones usando atributos data-i18n
    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');
            
            // Navegar por el objeto translations usando las claves
            let translation = translations[lang];
            for (const k of keys) {
                // Manejar índices de array (para logros y otros arrays)
                if (!isNaN(k) && Array.isArray(translation)) {
                    translation = translation[parseInt(k)];
                } else if (translation && translation[k] !== undefined) {
                    translation = translation[k];
                } else {
                    console.warn(`Translation key not found: ${key}`);
                    return;
                }
            }
            
            // Aplicar la traducción
            if (translation !== undefined) {
                element.textContent = translation;
            }
        });
    }
    
    // Función para cambiar el idioma
    function changeLanguage(lang) {
        // Actualizar el atributo lang del html
        document.documentElement.lang = lang;
        
        // Actualizar clases activas en los botones de idioma
        languageButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Guardar preferencia en localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        // Aplicar traducciones usando los atributos data-i18n
        applyTranslations(lang);
        
        // Elementos que no tienen atributo data-i18n todavía
        // Traducir la navegación
        document.querySelectorAll('.nav-links a').forEach((link, index) => {
            const navItems = ['sobreMi', 'experiencia', 'tecnologias', 'pasatiempos', 'contacto'];
            link.textContent = translations[lang].nav[navItems[index]];
        });
        
        // Traducir hero section
        document.querySelector('.hero-text h2').textContent = translations[lang].hero.rol;
        document.querySelector('.hero-text .summary').textContent = translations[lang].hero.resumen;
        document.querySelector('.hero-buttons .primary').textContent = translations[lang].hero.contactar;
        document.querySelector('.hero-buttons .secondary').textContent = translations[lang].hero.verExperiencia;
        
        // Traducir sección sobre mí (ahora integrada en el hero)
        document.querySelector('.about-me-tag span').textContent = translations[lang].sobreMi.titulo;
        const profileParagraphs = document.querySelectorAll('.profile-details p');
        if (profileParagraphs.length >= 2) {
            profileParagraphs[0].textContent = translations[lang].sobreMi.parrafo1;
            profileParagraphs[1].textContent = translations[lang].sobreMi.parrafo2;
        }
        
        // Traducir sección pasatiempos
        document.querySelector('#pasatiempos .section-title').textContent = translations[lang].pasatiempos.titulo;
        
        const hobbyItems = document.querySelectorAll('.hobby-item');
        
        hobbyItems[0].querySelector('h3').textContent = translations[lang].pasatiempos.deportes.titulo;
        hobbyItems[0].querySelector('p').textContent = translations[lang].pasatiempos.deportes.descripcion;
        
        hobbyItems[1].querySelector('h3').textContent = translations[lang].pasatiempos.buceo.titulo;
        hobbyItems[1].querySelector('p').textContent = translations[lang].pasatiempos.buceo.descripcion;
        
        hobbyItems[2].querySelector('h3').textContent = translations[lang].pasatiempos.fotografia.titulo;
        hobbyItems[2].querySelector('p').textContent = translations[lang].pasatiempos.fotografia.descripcion;
        
        hobbyItems[3].querySelector('h3').textContent = translations[lang].pasatiempos.viajar.titulo;
        hobbyItems[3].querySelector('p').textContent = translations[lang].pasatiempos.viajar.descripcion;
        
        hobbyItems[4].querySelector('h3').textContent = translations[lang].pasatiempos.tecnologia.titulo;
        hobbyItems[4].querySelector('p').textContent = translations[lang].pasatiempos.tecnologia.descripcion;
        
        // Traducir sección contacto
        document.querySelector('#contacto .section-title').textContent = translations[lang].contacto.titulo;
        
        const contactCards = document.querySelectorAll('.contact-card');
        if (contactCards.length > 0) {
            const titles = document.querySelectorAll('.contact-title');
            const actionButtons = document.querySelectorAll('.contact-action-btn');
            
            // Traducir títulos
            titles[0].textContent = translations[lang].contacto.correo;
            titles[1].textContent = translations[lang].contacto.linkedin;
            titles[2].textContent = translations[lang].contacto.github;
            titles[3].textContent = translations[lang].contacto.instagram;
            
            // Traducir botones de acción
            actionButtons[0].textContent = translations[lang].contacto.acciones.correo;
            actionButtons[1].textContent = translations[lang].contacto.acciones.linkedin;
            actionButtons[2].textContent = translations[lang].contacto.acciones.github;
            actionButtons[3].textContent = translations[lang].contacto.acciones.instagram;
        }
        
        // Traducir footer
        document.querySelector('.footer-content p').textContent = translations[lang].footer.derechos;
    }
    
    // Configurar los eventos para cambiar el idioma
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    // Revisar si hay un idioma preferido guardado
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }
    
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