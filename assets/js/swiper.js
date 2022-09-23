import Swiper from 'swiper/bundle';
import Ready from '@ryanmorr/ready';
import 'swiper/css/bundle';

Ready('[data-ref="swiper"]', (el) => {
    const options = el.hasAttribute('data-options') ? JSON.parse(el.getAttribute('data-options')) : {};
    const swiper = new Swiper(el, {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        ...options,
    });
})