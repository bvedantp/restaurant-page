import men1 from './images/men1.jpg';
import men2 from './images/men2.jpeg';
import men3 from './images/men3.jpg';
import men4 from './images/men4.jpg';
import men5 from './images/men5.jpeg';
import men6 from './images/men6.jpg';

let menuLoad = ()=> {
const div = document.querySelector('div#content');
//div.innerHTML = " ";
/*
let div1 = document.createElement('div');
let img1 = new Image();
let p1 = document.createElement('para');
img1.src = men1;
*/
function creator(diva,img,para,sors,paratxt){
    diva = document.createElement('div');
    diva.classList.add("menu-class"); //css class
    img = new Image();
    para = document.createElement('p');
    para.textContent = paratxt;
    img.src = sors;
    div.appendChild(diva);
    diva.appendChild(img);
    diva.appendChild(para);
}

creator('div1','img1','p1',men1,'Blue halwa for 7.90ᵯ only');
creator('div2','img2','p2',men2,'Baby vines for 8.29ᵯ only');
creator('div3','img3','p3',men3,'Egg of mindworms for 12.90ᵯ only');
creator('div4','img4','p4',men4,'Three eyed venoballs for 66.99ᵯ only');
creator('div5','img5','p5',men5,'Pure black hole for 99.99ᵯ only');
creator('div6','img6','p6',men6,'Human head for 0.3ᵯ only');
}

export default menuLoad;