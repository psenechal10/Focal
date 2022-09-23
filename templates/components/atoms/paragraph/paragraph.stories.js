import { TwigComponent } from '@/twig';

const TwigPath = require('./paragraph.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Paragraph',
    excludeStories: /.*(Data|Path)$/,
};

export const paragraph = () => (TwigComponent(TwigPath, {
    data() {
        return {
            paragraph_content: 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
        };
    },
}));