import restPic from './images/rest-pic.jpg';

let initLoad= () => {
    const div = document.querySelector('div#content'); //only div if not work
    /*let navBar = document.createElement('ul');
    let mainNode = document.createElement('li');
    let menuNode = document.createElement('li');
    let meNode = document.createElement('li'); */
    let imago = new Image();
    let heading = document.createElement('h1');
    let para = document.createElement('p');
    
imago.id = 'main-img';
imago.src = restPic; //maybe problem

heading.id = 'heading';
heading.textContent = 'Mars-taurant!';

para.id = 'main-p';
para.innerHTML = `Tired of walking in endless monotonous orange? Want something homemade
after a long night of mining? You now have options. And by options we meant
us!We provide 24/7 service on Mars. No jokes, no pranks. Come eat homemade,
smelly(in a good way), fresh food. We don't import our ingredients from Earth, 
thus guaranteeing our food remains fresh and young.<br>
So what are you waiting for. Come eat! Eat till you die!`;
/*
mainNode.innerHTML = 'Main';
menuNode.innerHTML = 'Menu';
meNode.innerHTML = 'Me';

div.appendChild(navBar);
navBar.appendChild(mainNode);
navBar.appendChild(menuNode);
navBar.appendChild(meNode);*/
div.appendChild(imago);
div.appendChild(heading);
div.appendChild(para);
}

export default initLoad;