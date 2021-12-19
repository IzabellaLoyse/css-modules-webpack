import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import '../styles/card/card-global.css';
import common from '../styles/card/card-common.css';
import carousel from '../styles/card/card-carousel.css';
import dogImg from '../assets/images/dog.jpg';
import firstAvatar from '../assets/images/photo-profile.jpeg';
import iconLike from '../assets/icons/like.png';
import iconComment from '../assets/icons/comment.png';
import iconShare from '../assets/icons/share.png';
import iconCarousel from '../assets/icons/carousel.png';

const {
  section, div, img, h3, p,
  article, span,
} = helpers(h);

const photo = img({ className: common.cardImage, src: dogImg });
const icon = img({ src: iconCarousel });
const iconContainer = div({ className: carousel.cardIcon }, [icon]);
const dots = div({ className: carousel.cardDots }, [
  span(),
  span(),
  span(),
  span(),
]);

const photoContainer = section({ className: common.photoContainer }, [
  photo,
  iconContainer,
  dots,
]);

const avatar = img({ className: common.cardAvatar, src: firstAvatar });
const name = h3({ className: common.cardTitle }, 'Izabella.loyse');
const user = div({ className: common.cardUser }, [avatar, name]);

const like = img({ src: iconLike });
const comment = img({ src: iconComment });
const share = img({ src: iconShare });

const actionIcons = div({ className: common.cardActionIcons }, [
  like,
  comment,
  share,
]);
const contentHeader = div({ className: common.cardHeader }, [
  user,
  actionIcons,
]);

const text = p(
  'É maravilhoso ter um companheiro como você...muito obrigado por estar sempre ao meu lado  #dog #amorPorAnimais',
);
const textContainer = div({ className: 'cardText' }, text);

const cardContent = article({ className: common.cardBody }, [
  contentHeader,
  textContainer,
]);

const Card = section({ className: 'card' }, [photoContainer, cardContent]);

export default Card;
