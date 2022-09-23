import { TwigComponent } from '@/twig';

const TwigPath = require('./services.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Molecules/Services',
    excludeStories: /.*(Data|Path)$/,
};

export const services = () => (TwigComponent(TwigPath, {
    data() {
        return {
            icon_name: 'seo',
            title_content: 'SEO',
            paragraph_content: 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.'
        };
    },
}));