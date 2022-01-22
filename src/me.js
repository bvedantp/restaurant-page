let meLoad = ()=>{
const div = document.querySelector('div#content');

let div1 = document.createElement('div');
let div2 = document.createElement('div');
let para1 = document.createElement('h3');
let para2 = document.createElement('p');
let butto = document.createElement('button');

para1.innerHTML = `Timing`;
let timetable = document.createElement('p');
timetable.innerHTML = `Mon: 6pm-8pm <br>
                        Tue: 7pm-8pm <br>
                        Wed: 8pm-9pm <br>
                        Thu: 9pm-10pm <br>
                        Fri: 10pm-11pm <br>
                        Eon: ㄥpm-ㄣpm`;
para2.innerHTML = 'Order Online!';
butto.innerHTML = 'OK';

div1.classList.add('onecolumn');
div2.classList.add('twocolumn');

div.appendChild(div1);
div.appendChild(div2);

div1.appendChild(para1);
div1.appendChild(timetable);

div2.appendChild(para2);
div2.appendChild(butto);

//div.style.flexDirection = 'row'; //change in index.js to column
}

export default meLoad;