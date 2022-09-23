import { TwigComponent } from '@/twig';

const TwigPath = require('./content.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Molecules/Content',
    excludeStories: /.*(Data|Path)$/,
};

export const content = () => (TwigComponent(TwigPath, {
    data() {
        return {
            title_content: 'About Me',
            paragraph_content: 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri.'
        };
    },
}));
