import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import CardCarousel from './CardCarousel';
import CardVideo from './CardVideo';
import CardInfo from './CardInfo';
import '../styles/main-global.css';

const { main } = helpers(h);

const mainPage = main({ className: 'main' }, [CardCarousel, CardVideo, CardInfo]);

export default mainPage;
