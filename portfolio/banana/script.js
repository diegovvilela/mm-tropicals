// Banana specific translations
const bananaTranslations = {
    'pt-BR': {
        'banana.title': 'Banana',
        'banana.subtitle': 'Fruta tropical rica em potássio, vitaminas e fibras. Versátil e nutritiva, é consumida <em>in natura</em> ou processada, sendo uma das frutas mais populares do mundo.',
        'banana.seasonality.title': 'Sazonalidade',
        'banana.seasonality.high': 'Alta Disponibilidade',
        'banana.seasonality.medium': 'Média Disponibilidade',
        'banana.regions.title': 'Nossos Parceiros pelo Brasil',
        'banana.regions.oeste.title': 'Oeste da Bahia',
        'banana.regions.oeste.description': 'Região emergente na bananicultura brasileira, com grandes propriedades tecnificadas e potencial crescente para exportação.',
        'banana.regions.bomjesus': 'Principal polo produtor de banana da região, com fazendas de grande escala e tecnologia de ponta para atender demandas internacionais.',
        'banana.varieties.title': 'Variedades',
        'banana.varieties.cavendish.title': 'Grupo Cavendish',
        'banana.varieties.cavendish.description': 'Grupo que inclui as variedades Grande Naine, Nanica, Nanicão e Williams. Bananas de alta qualidade, ideais para exportação e consumo interno.',
        'banana.varieties.cavendish.period': 'O ano todo',
        'banana.commercialization.title': 'Comercialização',
        'banana.commercialization.pallet.title': 'Pallet',
        'banana.commercialization.pallet.boxes': 'Caixas por Pallet:',
        'banana.contact.title': 'Interessado em Banana?',
        'banana.contact.subtitle': 'Entre em contato conosco para mais informações sobre disponibilidade, preços e especificações técnicas.',
        'banana.contact.cta': 'Solicitar Cotação',
        'months.jan': 'Jan',
        'months.feb': 'Fev',
        'months.mar': 'Mar',
        'months.apr': 'Abr',
        'months.may': 'Mai',
        'months.jun': 'Jun',
        'months.jul': 'Jul',
        'months.aug': 'Ago',
        'months.sep': 'Set',
        'months.oct': 'Out',
        'months.nov': 'Nov',
        'months.dec': 'Dez'
    },
    'en': {
        'banana.title': 'Banana',
        'banana.subtitle': 'Tropical fruit rich in potassium, vitamins and fiber. Versatile and nutritious, consumed fresh or processed, being one of the world\'s most popular fruits.',
        'banana.seasonality.title': 'Seasonality',
        'banana.seasonality.high': 'High Availability',
        'banana.seasonality.medium': 'Medium Availability',
        'banana.regions.title': 'Our Partners Across Brazil',
        'banana.regions.oeste.title': 'Western Bahia',
        'banana.regions.oeste.description': 'Emerging region in Brazilian banana cultivation, with large technified properties and growing potential for export.',
        'banana.regions.bomjesus': 'Main banana production hub in the region, with large-scale farms and cutting-edge technology to meet international demands.',
        'banana.varieties.title': 'Varieties',
        'banana.varieties.cavendish.title': 'Cavendish Group',
        'banana.varieties.cavendish.description': 'Group that includes Grande Naine, Nanica, Nanicão and Williams varieties. High quality bananas, ideal for export and domestic consumption.',
        'banana.varieties.cavendish.period': 'Year-round',
        'banana.commercialization.title': 'Commercialization',
        'banana.commercialization.pallet.title': 'Pallet',
        'banana.commercialization.pallet.boxes': 'Boxes per Pallet:',
        'banana.contact.title': 'Interested in Banana?',
        'banana.contact.subtitle': 'Contact us for more information about availability, prices and technical specifications.',
        'banana.contact.cta': 'Request Quote',
        'months.jan': 'Jan',
        'months.feb': 'Feb',
        'months.mar': 'Mar',
        'months.apr': 'Apr',
        'months.may': 'May',
        'months.jun': 'Jun',
        'months.jul': 'Jul',
        'months.aug': 'Aug',
        'months.sep': 'Sep',
        'months.oct': 'Oct',
        'months.nov': 'Nov',
        'months.dec': 'Dec'
    },
    'es': {
        'banana.title': 'Plátano',
        'banana.subtitle': 'Fruta tropical rica en potasio, vitaminas y fibra. Versátil y nutritiva, se consume fresca o procesada, siendo una de las frutas más populares del mundo.',
        'banana.seasonality.title': 'Estacionalidad',
        'banana.seasonality.high': 'Alta Disponibilidad',
        'banana.seasonality.medium': 'Disponibilidad Media',
        'banana.regions.title': 'Nuestros Socios por Brasil',
        'banana.regions.oeste.title': 'Oeste de Bahía',
        'banana.regions.oeste.description': 'Región emergente en la bananicultura brasileña, con grandes propiedades tecnificadas y potencial creciente para exportación.',
        'banana.regions.bomjesus': 'Principal polo productor de plátano de la región, con fincas de gran escala y tecnología de punta para atender demandas internacionales.',
        'banana.varieties.title': 'Variedades',
        'banana.varieties.cavendish.title': 'Grupo Cavendish',
        'banana.varieties.cavendish.description': 'Grupo que incluye las variedades Grande Naine, Nanica, Nanicão y Williams. Plátanos de alta calidad, ideales para exportación y consumo interno.',
        'banana.varieties.cavendish.period': 'Todo el año',
        'banana.commercialization.title': 'Comercialización',
        'banana.commercialization.pallet.title': 'Pallet',
        'banana.commercialization.pallet.boxes': 'Cajas por Pallet:',
        'banana.contact.title': '¿Interesado en Plátano?',
        'banana.contact.subtitle': 'Contáctanos para más información sobre disponibilidad, precios y especificaciones técnicas.',
        'banana.contact.cta': 'Solicitar Cotización',
        'months.jan': 'Ene',
        'months.feb': 'Feb',
        'months.mar': 'Mar',
        'months.apr': 'Abr',
        'months.may': 'May',
        'months.jun': 'Jun',
        'months.jul': 'Jul',
        'months.aug': 'Ago',
        'months.sep': 'Sep',
        'months.oct': 'Oct',
        'months.nov': 'Nov',
        'months.dec': 'Dic'
    }
};

// Wait for DOM and main script to load
document.addEventListener('DOMContentLoaded', function() {
    // Extend main translations with banana specific ones
    if (typeof translations !== 'undefined') {
        Object.keys(bananaTranslations).forEach(lang => {
            if (translations[lang]) {
                Object.assign(translations[lang], bananaTranslations[lang]);
            }
        });
    }

    // Initialize language functionality
    initializeLanguage();
    
    // Initialize Lucide icons
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
});

// Language functionality for portfolio pages
function initializeLanguage() {
    const langToggle = document.querySelector('.lang-float-toggle');
    const langMenu = document.querySelector('.lang-float-menu');
    const langOptions = document.querySelectorAll('.lang-option');

    if (!langToggle || !langMenu) return;

    // Toggle language menu
    langToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isExpanded = langToggle.getAttribute('aria-expanded') === 'true';
        langToggle.setAttribute('aria-expanded', !isExpanded);
        langMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.lang-float')) {
            langToggle.setAttribute('aria-expanded', 'false');
            langMenu.classList.remove('active');
        }
    });

    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
            
            // Update UI
            langOptions.forEach(opt => opt.setAttribute('aria-selected', 'false'));
            this.setAttribute('aria-selected', 'true');
            
            // Update toggle button
            const flagClass = selectedLang === 'pt-BR' ? 'lang-flag--br' : 
                             selectedLang === 'en' ? 'lang-flag--en' : 'lang-flag--es';
            const langCode = selectedLang === 'pt-BR' ? 'PT' : 
                            selectedLang === 'en' ? 'EN' : 'ES';
            
            langToggle.querySelector('.lang-flag').className = `lang-flag ${flagClass}`;
            langToggle.querySelector('.lang-code').textContent = langCode;
            
            // Close menu
            langToggle.setAttribute('aria-expanded', 'false');
            langMenu.classList.remove('active');
            
            // Save preference when user chooses (Sistema Híbrido)
            localStorage.setItem('preferredLanguage', selectedLang);
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt-BR';
    const savedOption = document.querySelector(`[data-lang="${savedLang}"]`);
    if (savedOption) {
        savedOption.click();
    }
}

function changeLanguage(lang) {
    if (!translations || !translations[lang]) return;
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            // Handle HTML content (for elements that might contain <em> tags)
            if (translation.includes('<em>') || translation.includes('</em>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update document language
    document.documentElement.lang = lang;
}
