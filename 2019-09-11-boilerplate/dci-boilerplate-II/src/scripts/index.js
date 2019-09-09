// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { myTitle, myText } from './text.js';


// \/ All of your javascript should go here \/

//import '../styles/style.css';

//const divElement = document.createElement('div');
//divElement.className = 'myclass';

//document.body.appendChild(divElement);

// document.getElementById("main").appendChild(divElement);

document.getElementById('title').innerHTML = myTitle;
document.getElementById('text').innerHTML = myText;

