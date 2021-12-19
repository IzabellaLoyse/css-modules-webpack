import Main from './main/Main';
import Header from './header/Header';
import '../styles/reset.css';
import '../styles/colors.css';

const app = document.querySelector('#app');

app.appendChild(Header);
app.appendChild(Main);
