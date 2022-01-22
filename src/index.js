import './style.css';
import initLoad from './loader';
import menuLoad from './menu';
import meLoad from './me';

const mein = document.getElementById('mein');
const menu = document.getElementById('menu');
const me = document.getElementById('me');
const div = document.querySelector('div#content');

initLoad();

mein.addEventListener('click',()=>{
    div.style.flexDirection = 'column';
    div.innerHTML = " ";
    initLoad();
})

menu.addEventListener('click',()=>{
    div.style.flexDirection = 'column';
    div.innerHTML = " ";
    menuLoad();
})

me.addEventListener('click',()=>{
    div.style.flexDirection = 'row';
    div.innerHTML = " ";
    meLoad();
})

                                                                