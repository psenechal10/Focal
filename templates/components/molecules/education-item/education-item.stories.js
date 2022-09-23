import { TwigComponent } from '@/twig';

const TwigPath = require('./education-item.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Molecules/Education-item',
    excludeStories: /.*(Data|Path)$/,
};

export const education = () => (TwigComponent(TwigPath, {
    data() {
        return {
            title_content: 'Graphic Design Diploma',
            paragraph_content: 'Reeves College / June 2008 - May 2010',
            tag_content: '4.0 GPA',
            paragraph_content2: 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei.'

        };
    },
}));