import { TwigComponent } from '@/twig';

const TwigPath = require('./testimonials.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Molecules/Testimonials',
    excludeStories: /.*(Data|Path)$/,
};

export const testimonials = () => (TwigComponent(TwigPath, {
    data() {
        return {
            blockquote_content: '“Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”',
            figcaption_content: 'John Doe'
        };
    },
}));
