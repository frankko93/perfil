# Franco Aballay - Portfolio Landing Page

Una landing page personal moderna y multiidioma para mostrar mi experiencia como Software Engineer.

## 🚀 Características

- **Diseño responsive** - Se adapta perfectamente a cualquier dispositivo
- **Multiidioma** - Soporte para Español, Inglés e Italiano
- **Sistema de traducciones mantenible** - Un solo archivo HTML con sistema de internacionalización
- **Navegación suave** - Scroll suave entre secciones
- **Optimizado para SEO** - Meta tags y estructura semántica
- **Contador de visitas secreto** - Funcionalidad oculta activable con código

## 🛠️ Estructura del Proyecto

```
perfil/
├── index.html              # Archivo HTML principal (único archivo necesario)
├── translations.json       # Traducciones externas (opcional)
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── main.js             # JavaScript con sistema de traducciones
├── img/
│   ├── profile.jpg         # Foto de perfil
│   └── kotlin.svg          # Iconos adicionales
├── favicon.svg             # Favicon personalizado
└── README.md               # Este archivo
```

## 🌐 Sistema de Traducciones

El sistema de traducciones ha sido completamente reestructurado para ser más mantenible:

### Antes (Problemático):
- ❌ Tres archivos HTML separados (`index.html`, `index-en.html`, `index-it.html`)
- ❌ Duplicación de código
- ❌ Difícil mantenimiento
- ❌ Cambios requerían editar múltiples archivos

### Ahora (Mejorado):
- ✅ Un solo archivo HTML (`index.html`)
- ✅ Sistema de atributos `data-i18n`
- ✅ Traducciones centralizadas en JavaScript
- ✅ Opción de archivo JSON externo para traducciones
- ✅ Fácil mantenimiento y escalabilidad

### Cómo Funciona:

1. **HTML con atributos data-i18n:**
```html
<h2 data-i18n="hero.rol">Software Engineer | Consultor IT</h2>
<p data-i18n="hero.resumen">Texto por defecto en español...</p>
```

2. **JavaScript maneja las traducciones:**
- Carga traducciones desde `translations.json` (si existe)
- Fallback a traducciones embebidas en `main.js`
- Aplica traducciones basándose en los atributos `data-i18n`

3. **Agregar nuevas traducciones:**
- Añadir el atributo `data-i18n="clave.subclave"` al elemento HTML
- Agregar la traducción en `translations.json` o en el objeto `translations` en `main.js`

## 📝 Cómo Agregar Contenido

### Para agregar una nueva sección:
1. Crear el HTML con atributos `data-i18n`
2. Agregar las traducciones en los tres idiomas
3. ¡Listo! El sistema se encarga del resto

### Ejemplo:
```html
<!-- HTML -->
<div class="nueva-seccion">
    <h3 data-i18n="nuevaSeccion.titulo">Título por defecto</h3>
    <p data-i18n="nuevaSeccion.descripcion">Descripción por defecto</p>
</div>
```

```json
// En translations.json
{
  "es": {
    "nuevaSeccion": {
      "titulo": "Mi Nuevo Título",
      "descripcion": "Mi nueva descripción"
    }
  },
  "en": {
    "nuevaSeccion": {
      "titulo": "My New Title",
      "descripcion": "My new description"
    }
  },
  "it": {
    "nuevaSeccion": {
      "titulo": "Il Mio Nuovo Titolo",
      "descripcion": "La mia nuova descrizione"
    }
  }
}
```

## 🚀 Desarrollo Local

```bash
# Clonar el repositorio
git clone [url-del-repo]
cd perfil

# Servir localmente (cualquier servidor HTTP)
python3 -m http.server 8000
# o
npx serve .
# o
php -S localhost:8000

# Abrir en el navegador
open http://localhost:8000
```

## 🎯 Funcionalidades Especiales

### Contador de Visitas Secreto
- Escribe "franco" en cualquier momento para mostrar/ocultar el contador
- Se guarda en localStorage del navegador

### Navegación Inteligente
- Detección automática de la sección activa
- Scroll suave entre secciones
- Menú móvil responsive

### Persistencia de Idioma
- El idioma seleccionado se guarda en localStorage
- Se restaura automáticamente en la próxima visita

## 🔧 Personalización

### Cambiar Colores:
Editar las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #10B981;
    --secondary-color: #1F2937;
    /* ... más variables */
}
```

### Agregar Nuevos Idiomas:
1. Agregar el botón en el HTML:
```html
<button data-lang="fr">FR</button>
```

2. Agregar las traducciones en `translations.json`

## 📱 Compatibilidad

- ✅ Chrome/Edge (último)
- ✅ Firefox (último)
- ✅ Safari (último)
- ✅ Dispositivos móviles
- ✅ Tablets

## 🤝 Contribuciones

Si encuentras algún bug o tienes sugerencias:
1. Abre un issue
2. Crea un pull request
3. Contacta directamente

## 📄 Licencia

© 2023 Franco Luciano Aballay. Todos los derechos reservados.

---

**Nota:** Esta reestructuración hace que el mantenimiento sea mucho más simple. Ahora solo necesitas editar un archivo HTML y las traducciones están centralizadas. ¡No más sincronización entre múltiples archivos! 🎉
