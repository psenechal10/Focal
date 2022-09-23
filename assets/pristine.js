import Alpine from 'alpinejs';

import './styles/app.scss';
import '@/js/swiper';

window.Alpine = Alpine;
Alpine.start()

const templatesContext = require.context(
    '@root/templates',
    true,
    /\.(runtime|asset|style)\.(.*?)$/,
);

templatesContext.keys().forEach(templatesContext);