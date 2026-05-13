document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            nav: {
                perfil: 'Perfil',
                experiencia: 'Experiencia',
                credenciales: 'Credenciales',
                proyectos: 'Proyectos',
                tecnologias: 'Tecnologías',
                pasatiempos: 'Pasatiempos',
                contacto: 'Contacto'
            },
            hero: {
                eyebrow: 'Carta profesional',
                rol: 'Backend & Full Stack Engineer | Go, Java, TypeScript',
                resumen: 'Software Engineer con experiencia construyendo sistemas backend escalables y productos digitales en fintech y entornos de alta escala. Trabajo en Pomelo dentro del dominio Lending, contribuyendo a la infraestructura central de crédito que soporta productos de tarjetas para clientes en Latinoamérica.',
                chips: [
                    'Sistemas distribuidos',
                    'Fintech',
                    'Microservicios',
                    'Arquitecturas cloud-native'
                ],
                contactar: 'Contactar',
                verExperiencia: 'Ver experiencia',
                currentLabel: 'Actualmente',
                current: 'Software Engineer en Pomelo',
                currentDetail: 'Backend, APIs, sistemas distribuidos, observabilidad y flujos de crédito para soluciones financieras regionales.',
                stats: {
                    anos: 'Años de experiencia',
                    escala: 'Productos financieros regionales',
                    idiomas: 'Idiomas de trabajo',
                    ai: 'Interés en workflows de desarrollo con IA'
                }
            },
            sobreMi: {
                kicker: 'Presentación',
                titulo: 'Ingeniería con criterio de producto',
                parrafo1: 'Me especializo en transformar problemas complejos en soluciones simples, mantenibles y escalables. Disfruto trabajar cerca de producto, arquitectura y equipos cross-functional para convertir ideas en sistemas reales.',
                parrafo2: 'Mi recorrido combina fintech, comercio electrónico, plataformas web y liderazgo de pequeños equipos. Más allá de la tecnología, me movilizan el aprendizaje continuo, el emprendimiento, el deporte y las experiencias multiculturales.',
                fortalezas: 'Fortalezas principales',
                skill1: 'Backend services y APIs escalables',
                skill2: 'Microservicios y sistemas distribuidos',
                skill3: 'Arquitectura cloud, observabilidad y performance',
                skill4: 'Desarrollo full stack orientado a producto'
            },
            experiencia: {
                kicker: 'Trayectoria',
                titulo: 'Experiencia profesional',
                actual: {
                    area: 'Lending, crédito e identidad',
                    rol: 'Software Engineer',
                    empresa: 'Pomelo',
                    periodo: 'Marzo 2022 - Actualidad',
                    descripcion: 'Trabajo en la infraestructura core de lending y crédito que potencia productos de tarjetas ofrecidos por clientes de Pomelo en Latinoamérica, con foco principal en backend, APIs y sistemas distribuidos.',
                    logros: [
                        'Desarrollo de servicios backend y APIs con Go, Java y TypeScript.',
                        'Implementación de flujos de producto relacionados con crédito, lending e identidad.',
                        'Evolución de arquitecturas de microservicios, escalabilidad, observabilidad y performance.',
                        'Colaboración cross-functional con equipos de producto, ingeniería y stakeholders financieros.'
                    ]
                },
                meli: {
                    area: 'Alta escala y producto regional',
                    rol: 'Full Stack Engineer / Full Stack Engineer',
                    empresa: 'Mercado Libre',
                    periodo: 'Abril 2019 - Marzo 2022',
                    descripcion: 'Desarrollé soluciones full stack y backend en entornos de alta escala, participando en aplicaciones modernas y sistemas distribuidos utilizados a nivel regional.',
                    logros: [
                        'Backend con Go, Node.js, TypeScript, Express y principios de arquitectura limpia.',
                        'Frontend con React y ecosistemas modernos de desarrollo web.',
                        'Integración con PostgreSQL, bases NoSQL, Kibana y servicios distribuidos.',
                        'Trabajo en equipos ágiles, diseño escalable y mejora continua de plataformas.'
                    ]
                },
                previa: {
                    titulo: 'Base técnica previa',
                    deportes: {
                        rol: 'Programador de sistemas',
                        empresa: 'Secretaría de Estado de Deportes',
                        periodo: 'Julio 2018 - Marzo 2019',
                        descripcion: 'Sistemas internos y soporte tecnológico en San Juan, Argentina.'
                    },
                    fiel: {
                        rol: 'Desarrollador Java EE y Oracle',
                        empresa: 'Tarjeta de Crédito Fiel',
                        periodo: 'Septiembre 2016 - Febrero 2018',
                        descripcion: 'Desarrollo de software, bases de datos Oracle y soluciones para operación financiera.'
                    },
                    aserto: {
                        rol: 'Programador web',
                        empresa: 'Aserto Diseño y Desarrollo Tecnológicos',
                        periodo: 'Enero 2014 - Agosto 2016',
                        descripcion: 'PHP, jQuery, JavaScript, HTML5, MySQL y coordinación de equipos pequeños.'
                    }
                }
            },
            credenciales: {
                kicker: 'Formación e idiomas',
                titulo: 'Credenciales profesionales',
                educacion: {
                    titulo: 'Educación',
                    items: [
                        'Universidad Nacional de San Juan - Licenciatura en Ciencias de la Computación',
                        'Cisco Networking Academy - Especialista en Redes, CCNA'
                    ]
                },
                certificaciones: {
                    titulo: 'Certificaciones',
                    items: [
                        'Técnico Programador Universitario',
                        'Programador WEB',
                        'Diseño Gráfico',
                        'PADI Open Water Diver'
                    ]
                },
                idiomas: {
                    titulo: 'Idiomas',
                    items: [
                        'Español: nativo o bilingüe',
                        'Italiano: competencia profesional',
                        'Inglés: competencia laboral limitada'
                    ]
                }
            },
            proyectos: {
                kicker: 'Producto y ejecución',
                titulo: 'Proyectos seleccionados',
                proyecto1: {
                    titulo: 'Growth360',
                    descripcion: 'Ecosistema estratégico para crecimiento comercial y operación digital.'
                },
                proyecto2: {
                    titulo: 'Luluat',
                    descripcion: 'Landing premium para una marca de joyería artesanal en plata 925.'
                },
                proyecto3: {
                    titulo: 'DeaPadel',
                    descripcion: 'Sitio multiidioma para centro deportivo profesional en Sicilia.'
                },
                proyecto4: {
                    titulo: 'Estilo Apple',
                    descripcion: 'Landing de conversión para servicio premium de reparación de iPhone.'
                },
                proyecto5: {
                    titulo: 'Ivan Design',
                    descripcion: 'Experiencia visual para diseño personalizado de cascos de competición.'
                }
            },
            tecnologias: {
                kicker: 'Stack técnico',
                titulo: 'Tecnologías',
                categorias: {
                    backend: 'Backend y plataformas',
                    producto: 'Frontend y producto',
                    operacion: 'Datos, cloud y operación'
                },
                items: {
                    golang: 'Go',
                    java: 'Java',
                    kotlin: 'Kotlin',
                    node: 'Node.js / Express',
                    microservices: 'Microservicios',
                    typescript: 'TypeScript',
                    react: 'React',
                    html: 'HTML / CSS',
                    design: 'Diseño de producto digital',
                    postgresql: 'PostgreSQL',
                    nosql: 'NoSQL / SQL',
                    cloud: 'Cloud / AWS',
                    docker: 'Docker',
                    cicd: 'CI/CD'
                }
            },
            pasatiempos: {
                kicker: 'Fuera del código',
                titulo: 'Pasatiempos',
                deportes: {
                    titulo: 'Deportes',
                    descripcion: 'Me gusta mantenerme activo con pádel, fútbol y gimnasio. El deporte me ayuda a sostener disciplina, energía y foco.'
                },
                buceo: {
                    titulo: 'Buceo',
                    descripcion: 'Soy buzo certificado PADI Open Water Diver y disfruto explorar el mundo submarino desde una perspectiva distinta.'
                },
                fotografia: {
                    titulo: 'Fotografía',
                    descripcion: 'La fotografía me conecta con la observación, la composición y los detalles que suelen pasar desapercibidos.'
                },
                viajar: {
                    titulo: 'Viajar y descubrir',
                    descripcion: 'Me interesan las culturas, los idiomas y las experiencias auténticas, especialmente cerca del mar.'
                },
                tecnologia: {
                    titulo: 'Tecnología y aprendizaje continuo',
                    descripcion: 'Exploro herramientas, inteligencia artificial y proyectos propios para seguir creciendo como ingeniero.'
                }
            },
            contacto: {
                kicker: 'Conversemos',
                titulo: 'Contacto',
                disponible: 'Disponible para conversaciones profesionales',
                ctaTitulo: 'Construyamos productos sólidos, simples y escalables.',
                ctaTexto: 'Si querés hablar sobre backend, fintech, arquitectura o desarrollo full stack con criterio de producto, este es el mejor punto de partida.',
                meta: {
                    ubicacion: 'Mascali, Sicilia · LATAM / Europa',
                    foco: 'Backend, producto e IA aplicada'
                },
                correo: 'E-mail',
                linkedin: 'LinkedIn',
                github: 'GitHub',
                instagram: 'Instagram',
                detalles: {
                    correo: 'Para propuestas, consultas profesionales o una primera conversación directa.',
                    linkedin: 'El mejor canal para conectar, revisar trayectoria y mantener contacto profesional.',
                    github: 'Proyectos, experimentos y señales técnicas de mi forma de construir software.',
                    instagram: 'Un perfil más personal, con viajes, deporte, fotografía y vida cotidiana.'
                },
                acciones: {
                    principal: 'Escribime',
                    correo: 'Enviar correo',
                    linkedin: 'Conectar',
                    github: 'Ver perfil',
                    instagram: 'Seguir'
                }
            },
            footer: {
                derechos: '© 2026 Franco Luciano Aballay. Todos los derechos reservados.'
            }
        },
        en: {
            nav: {
                perfil: 'Profile',
                experiencia: 'Experience',
                credenciales: 'Credentials',
                proyectos: 'Projects',
                tecnologias: 'Technologies',
                pasatiempos: 'Hobbies',
                contacto: 'Contact'
            },
            hero: {
                eyebrow: 'Professional profile',
                rol: 'Backend & Full Stack Engineer | Go, Java, TypeScript',
                resumen: 'Software Engineer experienced in building scalable backend systems and digital products in fintech and high-scale environments. I work at Pomelo within the Lending domain, contributing to the core credit infrastructure behind card products for clients across Latin America.',
                chips: [
                    'Distributed systems',
                    'Fintech',
                    'Microservices',
                    'Cloud-native architectures'
                ],
                contactar: 'Contact',
                verExperiencia: 'View experience',
                currentLabel: 'Current focus',
                current: 'Software Engineer at Pomelo',
                currentDetail: 'Backend, APIs, distributed systems, observability and credit flows for regional financial solutions.',
                stats: {
                    anos: 'Years of experience',
                    escala: 'Regional financial products',
                    idiomas: 'Working languages',
                    ai: 'Interest in AI-driven development workflows'
                }
            },
            sobreMi: {
                kicker: 'Introduction',
                titulo: 'Engineering with product judgment',
                parrafo1: 'I specialize in turning complex problems into simple, maintainable and scalable solutions. I enjoy working close to product, architecture and cross-functional teams to turn ideas into real systems.',
                parrafo2: 'My background combines fintech, e-commerce, web platforms and leadership of small teams. Beyond technology, I am driven by continuous learning, entrepreneurship, sports and multicultural experiences.',
                fortalezas: 'Core strengths',
                skill1: 'Scalable backend services and APIs',
                skill2: 'Microservices and distributed systems',
                skill3: 'Cloud architecture, observability and performance',
                skill4: 'Product-oriented full stack development'
            },
            experiencia: {
                kicker: 'Career path',
                titulo: 'Professional experience',
                actual: {
                    area: 'Lending, credit and identity',
                    rol: 'Software Engineer',
                    empresa: 'Pomelo',
                    periodo: 'March 2022 - Present',
                    descripcion: 'I work on the core lending and credit infrastructure powering card products offered by Pomelo clients across Latin America, with a primary focus on backend, APIs and distributed systems.',
                    logros: [
                        'Backend services and APIs development with Go, Java and TypeScript.',
                        'Implementation of product flows related to credit, lending and identity.',
                        'Evolution of microservices architectures, scalability, observability and performance.',
                        'Cross-functional collaboration with product, engineering and financial stakeholders.'
                    ]
                },
                meli: {
                    area: 'High scale and regional product',
                    rol: 'Full Stack Engineer / Full Stack Engineer',
                    empresa: 'Mercado Libre',
                    periodo: 'April 2019 - March 2022',
                    descripcion: 'I built full stack and backend solutions in high-scale environments, contributing to modern applications and distributed systems used regionally.',
                    logros: [
                        'Backend with Go, Node.js, TypeScript, Express and clean architecture principles.',
                        'Frontend development with React and modern web ecosystems.',
                        'Integration with PostgreSQL, NoSQL databases, Kibana and distributed services.',
                        'Agile teamwork, scalable design and continuous platform improvement.'
                    ]
                },
                previa: {
                    titulo: 'Earlier technical foundation',
                    deportes: {
                        rol: 'Systems Programmer',
                        empresa: 'Secretaría de Estado de Deportes',
                        periodo: 'July 2018 - March 2019',
                        descripcion: 'Internal systems and technology support in San Juan, Argentina.'
                    },
                    fiel: {
                        rol: 'Java EE and Oracle Developer',
                        empresa: 'Tarjeta de Crédito Fiel',
                        periodo: 'September 2016 - February 2018',
                        descripcion: 'Software development, Oracle databases and solutions for financial operations.'
                    },
                    aserto: {
                        rol: 'Web Programmer',
                        empresa: 'Aserto Diseño y Desarrollo Tecnológicos',
                        periodo: 'January 2014 - August 2016',
                        descripcion: 'PHP, jQuery, JavaScript, HTML5, MySQL and coordination of small teams.'
                    }
                }
            },
            credenciales: {
                kicker: 'Education and languages',
                titulo: 'Professional credentials',
                educacion: {
                    titulo: 'Education',
                    items: [
                        'National University of San Juan - Degree track in Computer Science',
                        'Cisco Networking Academy - Networking Specialist, CCNA'
                    ]
                },
                certificaciones: {
                    titulo: 'Certifications',
                    items: [
                        'University Technical Programmer',
                        'WEB Programmer',
                        'Graphic Design',
                        'PADI Open Water Diver'
                    ]
                },
                idiomas: {
                    titulo: 'Languages',
                    items: [
                        'Spanish: native or bilingual',
                        'Italian: professional working proficiency',
                        'English: limited working proficiency'
                    ]
                }
            },
            proyectos: {
                kicker: 'Product and execution',
                titulo: 'Selected projects',
                proyecto1: {
                    titulo: 'Growth360',
                    descripcion: 'Strategic ecosystem for commercial growth and digital operations.'
                },
                proyecto2: {
                    titulo: 'Luluat',
                    descripcion: 'Premium landing page for an artisanal 925 silver jewelry brand.'
                },
                proyecto3: {
                    titulo: 'DeaPadel',
                    descripcion: 'Multilingual website for a professional sports center in Sicily.'
                },
                proyecto4: {
                    titulo: 'Estilo Apple',
                    descripcion: 'Conversion landing page for a premium iPhone repair service.'
                },
                proyecto5: {
                    titulo: 'Ivan Design',
                    descripcion: 'Visual experience for custom competition helmet design.'
                }
            },
            tecnologias: {
                kicker: 'Technical stack',
                titulo: 'Technologies',
                categorias: {
                    backend: 'Backend and platforms',
                    producto: 'Frontend and product',
                    operacion: 'Data, cloud and operations'
                },
                items: {
                    golang: 'Go',
                    java: 'Java',
                    kotlin: 'Kotlin',
                    node: 'Node.js / Express',
                    microservices: 'Microservices',
                    typescript: 'TypeScript',
                    react: 'React',
                    html: 'HTML / CSS',
                    design: 'Digital product design',
                    postgresql: 'PostgreSQL',
                    nosql: 'NoSQL / SQL',
                    cloud: 'Cloud / AWS',
                    docker: 'Docker',
                    cicd: 'CI/CD'
                }
            },
            pasatiempos: {
                kicker: 'Beyond code',
                titulo: 'Hobbies',
                deportes: {
                    titulo: 'Sports',
                    descripcion: 'I stay active with padel, soccer and the gym. Sports help me maintain discipline, energy and focus.'
                },
                buceo: {
                    titulo: 'Diving',
                    descripcion: 'I am a certified PADI Open Water Diver and enjoy exploring the underwater world from a different perspective.'
                },
                fotografia: {
                    titulo: 'Photography',
                    descripcion: 'Photography connects me with observation, composition and details that often go unnoticed.'
                },
                viajar: {
                    titulo: 'Travel and discovery',
                    descripcion: 'I am interested in cultures, languages and authentic experiences, especially close to the sea.'
                },
                tecnologia: {
                    titulo: 'Technology and continuous learning',
                    descripcion: 'I explore tools, artificial intelligence and personal projects to keep growing as an engineer.'
                }
            },
            contacto: {
                kicker: "Let's talk",
                titulo: 'Contact',
                disponible: 'Open to professional conversations',
                ctaTitulo: 'Let’s build solid, simple and scalable products.',
                ctaTexto: 'If you want to discuss backend, fintech, architecture or full stack development with product judgment, this is the best starting point.',
                meta: {
                    ubicacion: 'Mascali, Sicily · LATAM / Europe',
                    foco: 'Backend, product and applied AI'
                },
                correo: 'Email',
                linkedin: 'LinkedIn',
                github: 'GitHub',
                instagram: 'Instagram',
                detalles: {
                    correo: 'For proposals, professional questions or a direct first conversation.',
                    linkedin: 'The best channel to connect, review my background and stay in professional contact.',
                    github: 'Projects, experiments and technical signals of how I build software.',
                    instagram: 'A more personal profile with travel, sports, photography and everyday life.'
                },
                acciones: {
                    principal: 'Write me',
                    correo: 'Send email',
                    linkedin: 'Connect',
                    github: 'View profile',
                    instagram: 'Follow'
                }
            },
            footer: {
                derechos: '© 2026 Franco Luciano Aballay. All rights reserved.'
            }
        },
        it: {
            nav: {
                perfil: 'Profilo',
                experiencia: 'Esperienza',
                credenciales: 'Credenziali',
                proyectos: 'Progetti',
                tecnologias: 'Tecnologie',
                pasatiempos: 'Hobby',
                contacto: 'Contatto'
            },
            hero: {
                eyebrow: 'Profilo professionale',
                rol: 'Backend & Full Stack Engineer | Go, Java, TypeScript',
                resumen: 'Software Engineer con esperienza nella costruzione di sistemi backend scalabili e prodotti digitali in ambito fintech e in contesti ad alta scala. Lavoro in Pomelo nel dominio Lending, contribuendo all’infrastruttura core del credito per prodotti di carte destinati a clienti in America Latina.',
                chips: [
                    'Sistemi distribuiti',
                    'Fintech',
                    'Microservizi',
                    'Architetture cloud-native'
                ],
                contactar: 'Contattami',
                verExperiencia: 'Vedi esperienza',
                currentLabel: 'Focus attuale',
                current: 'Software Engineer in Pomelo',
                currentDetail: 'Backend, API, sistemi distribuiti, osservabilità e flussi di credito per soluzioni finanziarie regionali.',
                stats: {
                    anos: 'Anni di esperienza',
                    escala: 'Prodotti finanziari regionali',
                    idiomas: 'Lingue di lavoro',
                    ai: 'Interesse per workflow di sviluppo con IA'
                }
            },
            sobreMi: {
                kicker: 'Presentazione',
                titulo: 'Ingegneria con visione di prodotto',
                parrafo1: 'Mi specializzo nel trasformare problemi complessi in soluzioni semplici, manutenibili e scalabili. Mi piace lavorare vicino a prodotto, architettura e team cross-functional per trasformare le idee in sistemi reali.',
                parrafo2: 'Il mio percorso combina fintech, e-commerce, piattaforme web e leadership di piccoli team. Oltre alla tecnologia, mi motivano l’apprendimento continuo, l’imprenditorialità, lo sport e le esperienze multiculturali.',
                fortalezas: 'Punti di forza',
                skill1: 'Servizi backend e API scalabili',
                skill2: 'Microservizi e sistemi distribuiti',
                skill3: 'Architettura cloud, osservabilità e performance',
                skill4: 'Sviluppo full stack orientato al prodotto'
            },
            experiencia: {
                kicker: 'Percorso',
                titulo: 'Esperienza professionale',
                actual: {
                    area: 'Lending, credito e identità',
                    rol: 'Software Engineer',
                    empresa: 'Pomelo',
                    periodo: 'Marzo 2022 - Presente',
                    descripcion: 'Lavoro sull’infrastruttura core di lending e credito che supporta prodotti di carte offerti dai clienti di Pomelo in America Latina, con focus principale su backend, API e sistemi distribuiti.',
                    logros: [
                        'Sviluppo di servizi backend e API con Go, Java e TypeScript.',
                        'Implementazione di flussi di prodotto legati a credito, lending e identità.',
                        'Evoluzione di architetture a microservizi, scalabilità, osservabilità e performance.',
                        'Collaborazione cross-functional con team di prodotto, engineering e stakeholder finanziari.'
                    ]
                },
                meli: {
                    area: 'Alta scala e prodotto regionale',
                    rol: 'Full Stack Engineer / Full Stack Engineer',
                    empresa: 'Mercado Libre',
                    periodo: 'Aprile 2019 - Marzo 2022',
                    descripcion: 'Ho sviluppato soluzioni full stack e backend in contesti ad alta scala, contribuendo ad applicazioni moderne e sistemi distribuiti usati a livello regionale.',
                    logros: [
                        'Backend con Go, Node.js, TypeScript, Express e principi di architettura pulita.',
                        'Frontend con React ed ecosistemi web moderni.',
                        'Integrazione con PostgreSQL, database NoSQL, Kibana e servizi distribuiti.',
                        'Lavoro in team agili, design scalabile e miglioramento continuo delle piattaforme.'
                    ]
                },
                previa: {
                    titulo: 'Base tecnica precedente',
                    deportes: {
                        rol: 'Programmatore di sistemi',
                        empresa: 'Secretaría de Estado de Deportes',
                        periodo: 'Luglio 2018 - Marzo 2019',
                        descripcion: 'Sistemi interni e supporto tecnologico a San Juan, Argentina.'
                    },
                    fiel: {
                        rol: 'Sviluppatore Java EE e Oracle',
                        empresa: 'Tarjeta de Crédito Fiel',
                        periodo: 'Settembre 2016 - Febbraio 2018',
                        descripcion: 'Sviluppo software, database Oracle e soluzioni per operazioni finanziarie.'
                    },
                    aserto: {
                        rol: 'Programmatore web',
                        empresa: 'Aserto Diseño y Desarrollo Tecnológicos',
                        periodo: 'Gennaio 2014 - Agosto 2016',
                        descripcion: 'PHP, jQuery, JavaScript, HTML5, MySQL e coordinamento di piccoli team.'
                    }
                }
            },
            credenciales: {
                kicker: 'Formazione e lingue',
                titulo: 'Credenziali professionali',
                educacion: {
                    titulo: 'Formazione',
                    items: [
                        'Università Nazionale di San Juan - Percorso di laurea in Informatica',
                        'Cisco Networking Academy - Specialista in reti, CCNA'
                    ]
                },
                certificaciones: {
                    titulo: 'Certificazioni',
                    items: [
                        'Tecnico Programmatore Universitario',
                        'Programmatore WEB',
                        'Disegno Grafico',
                        'PADI Open Water Diver'
                    ]
                },
                idiomas: {
                    titulo: 'Lingue',
                    items: [
                        'Spagnolo: madrelingua o bilingue',
                        'Italiano: competenza professionale',
                        'Inglese: competenza lavorativa limitata'
                    ]
                }
            },
            proyectos: {
                kicker: 'Prodotto ed esecuzione',
                titulo: 'Progetti selezionati',
                proyecto1: {
                    titulo: 'Growth360',
                    descripcion: 'Ecosistema strategico per crescita commerciale e operazione digitale.'
                },
                proyecto2: {
                    titulo: 'Luluat',
                    descripcion: 'Landing premium per un brand artigianale di gioielli in argento 925.'
                },
                proyecto3: {
                    titulo: 'DeaPadel',
                    descripcion: 'Sito multilingua per un centro sportivo professionale in Sicilia.'
                },
                proyecto4: {
                    titulo: 'Estilo Apple',
                    descripcion: 'Landing di conversione per un servizio premium di riparazione iPhone.'
                },
                proyecto5: {
                    titulo: 'Ivan Design',
                    descripcion: 'Esperienza visuale per design personalizzato di caschi da competizione.'
                }
            },
            tecnologias: {
                kicker: 'Stack tecnico',
                titulo: 'Tecnologie',
                categorias: {
                    backend: 'Backend e piattaforme',
                    producto: 'Frontend e prodotto',
                    operacion: 'Dati, cloud e operation'
                },
                items: {
                    golang: 'Go',
                    java: 'Java',
                    kotlin: 'Kotlin',
                    node: 'Node.js / Express',
                    microservices: 'Microservizi',
                    typescript: 'TypeScript',
                    react: 'React',
                    html: 'HTML / CSS',
                    design: 'Design di prodotto digitale',
                    postgresql: 'PostgreSQL',
                    nosql: 'NoSQL / SQL',
                    cloud: 'Cloud / AWS',
                    docker: 'Docker',
                    cicd: 'CI/CD'
                }
            },
            pasatiempos: {
                kicker: 'Oltre il codice',
                titulo: 'Hobby',
                deportes: {
                    titulo: 'Sport',
                    descripcion: 'Mi mantengo attivo con padel, calcio e palestra. Lo sport mi aiuta a sostenere disciplina, energia e concentrazione.'
                },
                buceo: {
                    titulo: 'Immersioni',
                    descripcion: 'Sono un subacqueo certificato PADI Open Water Diver e mi piace esplorare il mondo sottomarino da una prospettiva diversa.'
                },
                fotografia: {
                    titulo: 'Fotografia',
                    descripcion: 'La fotografia mi connette con osservazione, composizione e dettagli che spesso passano inosservati.'
                },
                viajar: {
                    titulo: 'Viaggiare e scoprire',
                    descripcion: 'Mi interessano culture, lingue ed esperienze autentiche, soprattutto vicino al mare.'
                },
                tecnologia: {
                    titulo: 'Tecnologia e apprendimento continuo',
                    descripcion: 'Esploro strumenti, intelligenza artificiale e progetti personali per continuare a crescere come ingegnere.'
                }
            },
            contacto: {
                kicker: 'Parliamone',
                titulo: 'Contatto',
                disponible: 'Disponibile per conversazioni professionali',
                ctaTitulo: 'Costruiamo prodotti solidi, semplici e scalabili.',
                ctaTexto: 'Se vuoi parlare di backend, fintech, architettura o sviluppo full stack con criterio di prodotto, questo è il miglior punto di partenza.',
                meta: {
                    ubicacion: 'Mascali, Sicilia · LATAM / Europa',
                    foco: 'Backend, prodotto e IA applicata'
                },
                correo: 'Email',
                linkedin: 'LinkedIn',
                github: 'GitHub',
                instagram: 'Instagram',
                detalles: {
                    correo: 'Per proposte, domande professionali o una prima conversazione diretta.',
                    linkedin: 'Il canale migliore per connetterci, vedere il mio percorso e restare in contatto professionale.',
                    github: 'Progetti, esperimenti e segnali tecnici del mio modo di costruire software.',
                    instagram: 'Un profilo più personale, con viaggi, sport, fotografia e vita quotidiana.'
                },
                acciones: {
                    principal: 'Scrivimi',
                    correo: 'Invia email',
                    linkedin: 'Connetti',
                    github: 'Vedi profilo',
                    instagram: 'Segui'
                }
            },
            footer: {
                derechos: '© 2026 Franco Luciano Aballay. Tutti i diritti riservati.'
            }
        }
    };

    initVisitCounter();
    initNavigation();
    initLanguageSystem(translations);
    initHeroTypewriter();
    initRevealAnimations();
    initScroll3DAnimations();
    initHeroScene();
});

function initVisitCounter() {
    const correctCode = 'franco';
    let secretCode = '';
    let visits = Number.parseInt(localStorage.getItem('pageVisits') || '0', 10);
    visits += 1;
    localStorage.setItem('pageVisits', String(visits));

    const counter = document.createElement('div');
    counter.id = 'visit-counter';
    counter.textContent = `Visitas: ${visits}`;
    Object.assign(counter.style, {
        position: 'fixed',
        right: '18px',
        bottom: '18px',
        zIndex: '100',
        display: 'none',
        padding: '10px 14px',
        borderRadius: '8px',
        background: 'rgba(8, 10, 15, 0.92)',
        border: '1px solid rgba(79, 209, 197, 0.34)',
        color: '#4fd1c5',
        font: '700 13px "JetBrains Mono", "SFMono-Regular", Consolas, monospace'
    });
    document.body.appendChild(counter);

    document.addEventListener('keypress', (event) => {
        secretCode += event.key.toLowerCase();
        if (secretCode.length > correctCode.length) {
            secretCode = secretCode.slice(-correctCode.length);
        }

        if (secretCode === correctCode) {
            counter.style.display = counter.style.display === 'none' ? 'block' : 'none';
            secretCode = '';
        }
    });
}

function initHeroTypewriter() {
    const title = document.querySelector('.typewriter-title');
    if (!title) return;

    const fullText = title.dataset.typewriter || title.textContent.trim();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    title.setAttribute('aria-label', fullText);

    if (prefersReducedMotion) {
        title.textContent = fullText;
        title.classList.add('typed');
        return;
    }

    title.textContent = '';
    title.classList.remove('typed');
    title.classList.add('typing');

    let index = 0;
    const typeNextCharacter = () => {
        index += 1;
        title.textContent = fullText.slice(0, index);

        if (index >= fullText.length) {
            window.setTimeout(() => {
                title.classList.remove('typing');
                title.classList.add('typed');
                document.body.classList.add('hero-intro-complete');
            }, 420);
            return;
        }

        const current = fullText[index - 1];
        const next = fullText[index];
        const delay = current === ' ' || next === ' ' ? 82 : 42 + (index % 4) * 12;
        window.setTimeout(typeNextCharacter, delay);
    };

    window.setTimeout(typeNextCharacter, 240);
}

function initNavigation() {
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const languageSelector = document.querySelector('.language-selector');
    const navItems = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));

    const scrollToSection = (target, behavior = 'smooth') => {
        const headerHeight = header?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
        window.scrollTo({ top: targetPosition, behavior });
    };

    const scrollToCurrentHash = (behavior = 'auto') => {
        if (!window.location.hash) return;
        const target = document.querySelector(window.location.hash);
        if (target instanceof Element) {
            scrollToSection(target, behavior);
        }
    };

    const closeMobileMenu = () => {
        mobileMenuBtn?.classList.remove('active');
        navLinks?.classList.remove('active');
        languageSelector?.classList.remove('active');
        mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    };

    mobileMenuBtn?.addEventListener('click', () => {
        const isOpen = navLinks?.classList.toggle('active');
        languageSelector?.classList.toggle('active', Boolean(isOpen));
        mobileMenuBtn.classList.toggle('active', Boolean(isOpen));
        mobileMenuBtn.setAttribute('aria-expanded', String(Boolean(isOpen)));
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        if (!target.closest('nav') && navLinks?.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    navItems.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            const target = href ? document.querySelector(href) : null;
            if (!target) return;

            event.preventDefault();
            closeMobileMenu();

            scrollToSection(target);
        });
    });

    const updateHeader = () => {
        header?.classList.toggle('scrolled', window.scrollY > 36);
    };

    const updateActiveLink = () => {
        const headerHeight = header?.offsetHeight || 0;
        const currentPosition = window.scrollY + headerHeight + 80;
        let currentId = sections[0]?.id;

        sections.forEach((section) => {
            if (currentPosition >= section.offsetTop) {
                currentId = section.id;
            }
        });

        navItems.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
        });
    };

    updateHeader();
    updateActiveLink();
    window.addEventListener('scroll', () => {
        updateHeader();
        updateActiveLink();
    }, { passive: true });

    requestAnimationFrame(() => scrollToCurrentHash());
    window.setTimeout(() => scrollToCurrentHash(), 500);
    window.setTimeout(() => scrollToCurrentHash(), 1400);
}

function initLanguageSystem(translations) {
    const languageButtons = Array.from(document.querySelectorAll('.language-selector button[data-lang]'));

    const getTranslation = (lang, key) => {
        return key.split('.').reduce((value, part) => {
            if (Array.isArray(value) && Number.isInteger(Number(part))) {
                return value[Number(part)];
            }
            return value?.[part];
        }, translations[lang]);
    };

    const applyTranslations = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (!key) return;
            const translation = getTranslation(lang, key);
            if (typeof translation === 'string') {
                element.textContent = translation;
            } else {
                console.warn(`Missing translation for "${key}" in "${lang}"`);
            }
        });
    };

    const changeLanguage = (lang) => {
        if (!translations[lang]) return;
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);

        languageButtons.forEach((button) => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });

        applyTranslations(lang);
    };

    languageButtons.forEach((button) => {
        button.addEventListener('click', () => changeLanguage(button.dataset.lang));
    });

    const savedLanguage = localStorage.getItem('preferredLanguage');
    changeLanguage(translations[savedLanguage] ? savedLanguage : 'es');
}

function initRevealAnimations() {
    const items = Array.from(document.querySelectorAll('.reveal'));

    if (!('IntersectionObserver' in window)) {
        items.forEach((item) => item.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px'
    });

    items.forEach((item) => observer.observe(item));

    const revealVisibleItems = () => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.04) {
                item.classList.add('visible');
            }
        });
    };

    requestAnimationFrame(revealVisibleItems);
    window.setTimeout(revealVisibleItems, 240);
}

function initScroll3DAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const configs = [
        ['.section-heading', { depth: 8, rotate: 1.6, travel: 6, pop: false }],
        ['.metric-item', { depth: 20, rotate: 2.8, travel: 8, pop: true }],
        ['.about-text', { depth: 24, rotate: 3.2, travel: 10, side: -1, pop: true }],
        ['.about-skills', { depth: 24, rotate: 3.2, travel: 10, side: 1, pop: true }],
        ['.job-card', { depth: 34, rotate: 4.2, travel: 14, pop: true }],
        ['.previous-job', { depth: 24, rotate: 3.6, travel: 10, pop: true }],
        ['.credential-card', { depth: 30, rotate: 4.2, travel: 12, pop: true }],
        ['.project-card', { depth: 36, rotate: 4.8, travel: 14, pop: true }],
        ['.tech-category', { depth: 30, rotate: 4.2, travel: 12, pop: true }],
        ['.hobby-item', { depth: 30, rotate: 4.4, travel: 13, pop: true }],
        ['.contact-card', { depth: 24, rotate: 3.8, travel: 10, pop: true }]
    ];

    const targets = [];
    const seen = new Set();

    configs.forEach(([selector, config]) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            if (seen.has(element)) return;
            seen.add(element);

            const side = config.side ?? (index % 2 === 0 ? -1 : 1);
            element.classList.add('scroll-3d');
            if (config.pop) element.classList.add('scroll-pop');
            element.dataset.scrollDepth = String(config.depth);
            element.dataset.scrollRotate = String(config.rotate);
            element.dataset.scrollTravel = String(config.travel);
            element.dataset.scrollSide = String(side);
            targets.push(element);
        });
    });

    if (!targets.length) return;

    let lastScrollY = window.scrollY;
    let scrollDirection = 1;
    let ticking = false;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const updateScrollDirection = () => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;
        if (Math.abs(delta) > 1) {
            scrollDirection = delta > 0 ? 1 : -1;
            document.body.dataset.scrollDirection = scrollDirection > 0 ? 'down' : 'up';
            lastScrollY = currentScrollY;
        }
    };

    const updateTarget = (element) => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        const rect = element.getBoundingClientRect();

        if (rect.bottom < -viewportHeight * 0.35 || rect.top > viewportHeight * 1.35) {
            return;
        }

        const responsiveFactor = viewportWidth < 720 ? 0.44 : viewportWidth < 980 ? 0.68 : 1;
        const center = rect.top + rect.height / 2;
        const progress = clamp((center - viewportHeight / 2) / (viewportHeight / 2 + rect.height / 2), -1.15, 1.15);
        const normalized = clamp(progress, -1, 1);
        const visibility = 1 - Math.min(1, Math.abs(normalized));
        const side = Number.parseFloat(element.dataset.scrollSide || '1');
        const depth = Number.parseFloat(element.dataset.scrollDepth || '34') * responsiveFactor;
        const rotate = Number.parseFloat(element.dataset.scrollRotate || '5') * responsiveFactor;
        const travel = Number.parseFloat(element.dataset.scrollTravel || '14') * responsiveFactor;
        const directionBoost = scrollDirection * rotate * 0.14;

        const rotateX = (-normalized * rotate + directionBoost).toFixed(3);
        const rotateY = (normalized * side * rotate * 0.78).toFixed(3);
        const translateZ = (visibility * depth - depth * 0.42).toFixed(2);
        const translateY = (-normalized * travel - scrollDirection * 1.5 * responsiveFactor).toFixed(2);
        const scale = (0.986 + visibility * 0.018).toFixed(4);
        const glow = (visibility * 0.42).toFixed(3);
        const shadow = (visibility * 0.2).toFixed(3);
        const shineX = clamp(50 + side * normalized * 32, 12, 88).toFixed(1);
        const shineY = clamp(50 - normalized * 24, 18, 82).toFixed(1);

        element.style.setProperty('--scroll-rx', `${rotateX}deg`);
        element.style.setProperty('--scroll-ry', `${rotateY}deg`);
        element.style.setProperty('--scroll-z', `${translateZ}px`);
        element.style.setProperty('--scroll-y', `${translateY}px`);
        element.style.setProperty('--scroll-scale', scale);
        element.style.setProperty('--scroll-glow', glow);
        element.style.setProperty('--scroll-shadow', shadow);
        element.style.setProperty('--shine-x', `${shineX}%`);
        element.style.setProperty('--shine-y', `${shineY}%`);
    };

    const update = () => {
        ticking = false;
        updateScrollDirection();
        targets.forEach(updateTarget);
    };

    const requestUpdate = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    };

    document.body.dataset.scrollDirection = 'down';
    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
}

function initHeroScene() {
    const canvas = document.getElementById('hero-3d');
    if (!(canvas instanceof HTMLCanvasElement)) return;

    if (typeof THREE === 'undefined') {
        initCanvasFallback(canvas);
        return;
    }

    try {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });

        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
        camera.position.set(0, 0, 9);

        const systemGroup = new THREE.Group();
        scene.add(systemGroup);

    const random = createSeededRandom(42);
    const nodes = [];
    const nodeCount = window.innerWidth < 720 ? 76 : 118;

    for (let i = 0; i < nodeCount; i += 1) {
        const angle = random() * Math.PI * 2;
        const layer = random() > 0.5 ? 1 : -1;
        const radius = 1.2 + random() * 2.9;
        const y = (random() - 0.5) * 4.5;
        nodes.push({
            x: Math.cos(angle) * radius,
            y,
            z: Math.sin(angle) * radius + layer * random() * 0.75
        });
    }

    const particlePositions = new Float32Array(nodes.length * 3);
    nodes.forEach((node, index) => {
        particlePositions[index * 3] = node.x;
        particlePositions[index * 3 + 1] = node.y;
        particlePositions[index * 3 + 2] = node.z;
    });

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({
            color: 0x7dd3fc,
            size: 0.045,
            transparent: true,
            opacity: 0.86,
            depthWrite: false
        })
    );
    systemGroup.add(particles);

    const linePositions = [];
    for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dz = nodes[i].z - nodes[j].z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (distance < 1.12 && linePositions.length < 1700) {
                linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
            }
        }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const networkLines = new THREE.LineSegments(
        lineGeometry,
        new THREE.LineBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: 0.19,
            depthWrite: false
        })
    );
    systemGroup.add(networkLines);

    const ringMaterials = [
        new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.36, wireframe: true }),
        new THREE.MeshBasicMaterial({ color: 0x4fd1c5, transparent: true, opacity: 0.32, wireframe: true }),
        new THREE.MeshBasicMaterial({ color: 0xf6ad55, transparent: true, opacity: 0.25, wireframe: true })
    ];

    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.012, 8, 160), ringMaterials[0]);
    const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(2.85, 0.012, 8, 160), ringMaterials[1]);
    const ringThree = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.01, 8, 140), ringMaterials[2]);
    ringOne.rotation.x = Math.PI / 2.7;
    ringTwo.rotation.y = Math.PI / 2.4;
    ringThree.rotation.x = Math.PI / 2;
    ringThree.rotation.z = Math.PI / 4;
    systemGroup.add(ringOne, ringTwo, ringThree);

    const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.72, 2),
        new THREE.MeshBasicMaterial({
            color: 0x9ae6b4,
            transparent: true,
            opacity: 0.14,
            wireframe: true
        })
    );
    systemGroup.add(core);

    const pulse = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.38, 0),
        new THREE.MeshBasicMaterial({
            color: 0xf687b3,
            transparent: true,
            opacity: 0.42,
            wireframe: true
        })
    );
    systemGroup.add(pulse);

    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    const resize = () => {
        const width = canvas.clientWidth || window.innerWidth;
        const height = canvas.clientHeight || window.innerHeight;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        systemGroup.position.x = width > 900 ? 2.15 : 0;
        systemGroup.position.y = width > 900 ? 0.12 : -0.42;
        systemGroup.scale.setScalar(width < 520 ? 0.82 : 1);
        renderer.render(scene, camera);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const clock = new THREE.Clock();
    const animate = () => {
        const elapsed = clock.getElapsedTime();
        systemGroup.rotation.y = elapsed * 0.12 + mouse.x * 0.08;
        systemGroup.rotation.x = -0.08 + mouse.y * 0.05;
        particles.rotation.y = elapsed * 0.045;
        networkLines.rotation.y = elapsed * 0.045;
        ringOne.rotation.z = elapsed * 0.2;
        ringTwo.rotation.x = Math.PI / 2.4 + elapsed * 0.16;
        ringThree.rotation.y = elapsed * -0.24;
        core.rotation.x = elapsed * 0.32;
        core.rotation.y = elapsed * 0.22;
        pulse.scale.setScalar(1 + Math.sin(elapsed * 2.4) * 0.08);
        renderer.render(scene, camera);

        if (!prefersReducedMotion) {
            requestAnimationFrame(animate);
        }
    };

        animate();
    } catch (error) {
        console.warn('Falling back to 2D hero animation.', error);
        initCanvasFallback(canvas);
    }
}

function initCanvasFallback(canvas) {
    const context = canvas.getContext('2d');
    if (!context) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const random = createSeededRandom(7);
    const points = Array.from({ length: 72 }, () => ({
        x: (random() - 0.5) * 520,
        y: (random() - 0.5) * 360,
        z: random() * 520,
        vx: (random() - 0.5) * 0.22,
        vy: (random() - 0.5) * 0.22
    }));

    let width = 0;
    let height = 0;
    let ratio = 1;
    let frame = 0;

    const resize = () => {
        ratio = Math.min(window.devicePixelRatio || 1, 2);
        width = canvas.clientWidth || window.innerWidth;
        height = canvas.clientHeight || window.innerHeight;
        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const project = (point) => {
        const depth = 520 / (520 + point.z);
        return {
            x: width * 0.68 + point.x * depth,
            y: height * 0.5 + point.y * depth,
            size: 1.8 * depth
        };
    };

    const draw = () => {
        context.clearRect(0, 0, width, height);
        context.strokeStyle = 'rgba(99, 179, 237, 0.16)';
        context.fillStyle = 'rgba(79, 209, 197, 0.9)';

        points.forEach((point) => {
            if (!prefersReducedMotion) {
                point.x += point.vx;
                point.y += point.vy;
                point.z += Math.sin(frame * 0.01 + point.x * 0.01) * 0.2;
            }

            if (point.x > 280 || point.x < -280) point.vx *= -1;
            if (point.y > 210 || point.y < -210) point.vy *= -1;
        });

        for (let i = 0; i < points.length; i += 1) {
            const a = project(points[i]);
            for (let j = i + 1; j < points.length; j += 1) {
                const b = project(points[j]);
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 96) {
                    context.globalAlpha = 1 - distance / 96;
                    context.beginPath();
                    context.moveTo(a.x, a.y);
                    context.lineTo(b.x, b.y);
                    context.stroke();
                }
            }
        }

        context.globalAlpha = 1;
        points.forEach((point) => {
            const projected = project(point);
            context.beginPath();
            context.arc(projected.x, projected.y, Math.max(projected.size, 1), 0, Math.PI * 2);
            context.fill();
        });

        frame += 1;
        if (!prefersReducedMotion) {
            requestAnimationFrame(draw);
        }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    draw();
}

function createSeededRandom(seed) {
    let value = seed;
    return () => {
        value = (value * 9301 + 49297) % 233280;
        return value / 233280;
    };
}
