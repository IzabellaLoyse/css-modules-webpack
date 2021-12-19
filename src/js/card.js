import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import {
  card,
  cardImage,
  cardBody,
  cardAvatar,
  cardTitle,
  cardActionIcons,
  cardText,
} from '../styles/card-carousel.css';
import dogImg from '../assets/images/dog.jpg';
import firstAvatar from '../assets/images/photo-profile.jpeg';
import iconLike from '../assets/icons/like.png';
import iconComment from '../assets/icons/comment.png';
import iconShare from '../assets/icons/share.png';

const {
  section, div, img, h3, p,
} = helpers(h);

const photo = img({ className: cardImage, src: dogImg });
const avatar = img({ className: cardAvatar, src: firstAvatar });

const name = h3({ className: cardTitle }, 'Izabella Loyse');
const like = img({ src: iconLike });
const comment = img({ src: iconComment });
const share = img({ src: iconShare });

const actionIcons = div({ className: cardActionIcons }, [like, comment, share]);
const text = p(
  'É maravilhoso ter um companheiro como você...muito obrigado por estar sempre ao meu lado ',
);
const textContainer = ({ className: cardText }, [text]);

const cardContent = div({ className: cardBody }, [
  avatar,
  name,
  actionIcons,
  textContainer,
]);

const Card = section({ className: card }, [photo, cardContent]);

export default Card;
