import Trello from './Trello';
import data from './data';
import '../css/style.css';

const trello = new Trello(data);
trello.init();
