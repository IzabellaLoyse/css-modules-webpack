import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import '../../styles/card/card-global.css';
import common from '../../styles/card/card-common.css';
import info from '../../styles/card/card-info.css';
import notificationImg from '../../assets/icons/notification.png';

const {
  section, div, img, h3, p,
  article, span, button,
} = helpers(h);

const title = h3('Ative as notificações');

const icon = img({ className: info.notificationIcon, src: notificationImg });
const badge = span('7');
const iconContainer = div({ className: info.iconContainer }, [badge, icon]);

const text = p(
  'Receba notificações sempre que este perfil publicar um novo conteúdo!',
);
const textContainer = div({ className: info.cardText }, [title, text]);
const actionButton = button({ className: info.actionButton }, 'Ativar');

const cardContent = article({ className: common.cardBody }, [
  textContainer,
  actionButton,
]);

const Card = section({ className: `card ${info.cardInfo}` }, [
  iconContainer,
  cardContent,
]);

export default Card;
