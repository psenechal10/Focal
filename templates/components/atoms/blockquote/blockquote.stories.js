import { TwigComponent } from '@/twig';

const TwigPath = require('./blockquote.html.twig').default;

export default {
    component: TwigComponent(TwigPath),
    title: 'Atoms/Blockquote',
    excludeStories: /.*(Data|Path)$/,
};

export const blockquote = () => (TwigComponent(TwigPath, {
    data() {
        return {
            blockquote_content: '“Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”'
        };
    },
}));
