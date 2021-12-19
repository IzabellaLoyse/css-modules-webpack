import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import headerStyle from '../../styles/header/header.css';

const { header, h1 } = helpers(h);

const titleHeader = h1({ className: headerStyle.titleHeader }, 'Card Gallery');
const headerMain = header({ className: headerStyle.header }, [titleHeader]);

export default headerMain;
