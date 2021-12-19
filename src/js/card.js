import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import cardCarousel from '../styles/card/card-carousel.css';
import cardVideo from '../styles/card/card-video.css';
import cardGlobal from '../styles/card/card-global.css';
import dogImg from '../assets/images/dog.jpg';
import firstAvatar from '../assets/images/photo-profile.jpeg';
import iconLike from '../assets/icons/like.png';
import iconComment from '../assets/icons/comment.png';
import iconShare from '../assets/icons/share.png';

const {
  section, div, img, h3, p, article,
} = helpers(h);

const photo = img({ className: cardCarousel.cardImage, src: dogImg });

const avatar = img({ className: cardCarousel.cardAvatar, src: firstAvatar });
const name = h3({ className: cardCarousel.cardTitle }, 'Izabella.loyse');
const user = div({ className: cardCarousel.cardUser }, [avatar, name]);

const like = img({ src: iconLike });
const comment = img({ src: iconComment });
const share = img({ src: iconShare });

const actionIcons = div({ className: cardCarousel.cardActionIcons }, [like, comment, share]);
const contentHeader = div({ className: cardCarousel.cardHeader }, [user, actionIcons]);

const text = p(
  'É maravilhoso ter um companheiro como você...muito obrigado por estar sempre ao meu lado  #dog #amorPorAnimais',
);
const textContainer = div({ className: cardCarousel.cardText }, text);

const cardContent = article({ className: cardCarousel.cardBody }, [
  contentHeader,
  textContainer,
]);

const Card = section({ className: 'card' }, [photo, cardContent]);

export default Card;
