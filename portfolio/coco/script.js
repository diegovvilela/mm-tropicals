// Coconut specific translations
const coconutTranslations = {
    'pt-BR': {
        'coconut.title': 'Coco',
        'coconut.subtitle': 'Fruto tropical versátil, valorizado pela água refrescante e polpa nutritiva. Rico em eletrólitos naturais e com múltiplas aplicações comerciais.',
        'coconut.seasonality.title': 'Sazonalidade',
        'coconut.seasonality.high': 'Alta Disponibilidade - Ano Todo',
        'coconut.regions.title': 'Nossos Parceiros pelo Brasil',
        'coconut.regions.ceara.title': 'Ceará - Paraipaba',
        'coconut.regions.ceara.description': 'Região privilegiada com clima tropical úmido, localizada na zona costeira do Ceará. Paraipaba oferece condições ideais para o cultivo de coco com alta produtividade durante todo o ano.',
        'coconut.regions.paraipaba': 'Principal polo produtor de coco da região costeira, beneficiando-se da proximidade com o oceano, águas subterrâneas de qualidade e clima tropical ideal para produção ano todo.',
        'coconut.varieties.title': 'Variedades',
        'coconut.varieties.green.title': 'Coco Verde',
        'coconut.varieties.green.description': 'Coco jovem com água abundante e refrescante, ideal para consumo direto da água natural.',
        'coconut.contact.title': 'Interessado em Coco?',
        'coconut.contact.subtitle': 'Entre em contato conosco para mais informações sobre disponibilidade, preços e especificações técnicas.',
        'coconut.contact.cta': 'Solicitar Cotação',
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
        'coconut.title': 'Coconut',
        'coconut.subtitle': 'Versatile tropical fruit valued for its refreshing water and nutritious pulp. Rich in natural electrolytes with multiple commercial applications.',
        'coconut.seasonality.title': 'Seasonality',
        'coconut.seasonality.high': 'High Availability - Year Round',
        'coconut.regions.title': 'Our Partners Across Brazil',
        'coconut.regions.ceara.title': 'Ceará - Paraipaba',
        'coconut.regions.ceara.description': 'Privileged region with humid tropical climate, located in the coastal zone of Ceará. Paraipaba offers ideal conditions for coconut cultivation with high productivity year-round.',
        'coconut.regions.paraipaba': 'Main coconut production hub in the coastal region, benefiting from ocean proximity, quality groundwater and ideal tropical climate for year-round production.',
        'coconut.varieties.title': 'Varieties',
        'coconut.varieties.green.title': 'Green Coconut',
        'coconut.varieties.green.description': 'Young coconut with abundant and refreshing water, ideal for direct consumption of natural water.',
        'coconut.contact.title': 'Interested in Coconut?',
        'coconut.contact.subtitle': 'Contact us for more information about availability, prices and technical specifications.',
        'coconut.contact.cta': 'Request Quote',
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
        'coconut.title': 'Coco',
        'coconut.subtitle': 'Fruto tropical versátil valorado por su agua refrescante y pulpa nutritiva. Rico en electrólitos naturales con múltiples aplicaciones comerciales.',
        'coconut.seasonality.title': 'Estacionalidad',
        'coconut.seasonality.high': 'Alta Disponibilidad - Todo el Año',
        'coconut.regions.title': 'Nuestros Socios por Brasil',
        'coconut.regions.ceara.title': 'Ceará - Paraipaba',
        'coconut.regions.ceara.description': 'Región privilegiada con clima tropical húmedo, ubicada en la zona costera de Ceará. Paraipaba ofrece condiciones ideales para el cultivo de coco con alta productividad durante todo el año.',
        'coconut.regions.paraipaba': 'Principal polo productor de coco de la región costera, beneficiándose de la proximidad al océano, aguas subterráneas de calidad y clima tropical ideal para producción todo el año.',
        'coconut.varieties.title': 'Variedades',
        'coconut.varieties.green.title': 'Coco Verde',
        'coconut.varieties.green.description': 'Coco joven con agua abundante y refrescante, ideal para consumo directo del agua natural.',
        'coconut.contact.title': '¿Interesado en Coco?',
        'coconut.contact.subtitle': 'Contáctenos para más información sobre disponibilidad, precios y especificaciones técnicas.',
        'coconut.contact.cta': 'Solicitar Cotización',
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
    // Extend main translations with coconut specific ones
    if (typeof translations !== 'undefined') {
        Object.keys(coconutTranslations).forEach(lang => {
            if (translations[lang]) {
                Object.assign(translations[lang], coconutTranslations[lang]);
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
            
            // Save preference when user chooses
            localStorage.setItem('preferredLanguage', selectedLang);
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt-BR';
    const savedOption = document.querySelector(`[data-lang="${savedLang}"]`);
    if (savedOption) {
        savedOption.click();
    } else {
        // Apply default language
        changeLanguage('pt-BR');
    }
}
