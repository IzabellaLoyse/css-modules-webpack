import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import CardCarousel from '../card/CardCarousel';
import CardVideo from '../card/CardVideo';
import CardInfo from '../card/CardInfo';
import CardPhoto from '../card/CardPhoto';
import '../../styles/main/main-global.css';

const { main } = helpers(h);

const mainPage = main({ className: 'main' }, [
  CardCarousel,
  CardVideo,
  CardPhoto,
  CardInfo,
]);

export default mainPage;
