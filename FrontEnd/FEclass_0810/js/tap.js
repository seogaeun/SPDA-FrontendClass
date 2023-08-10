/* let lists = document.getElementsByClassName('tabItem');
let listContents = document.getElementsByClassName('tabpanel');


for(let i=0; i< lists.length; i++){
    lists[i].addEventListener('click',function(){
            console.log(lists[i]);
            lists[i].style.backgroundColor = 'royalblue'; //camel 표시
            listContents[i].classList.append('.visit');
        });
}
 */


const mytabs =document.querySelectorAll('.tabItem');
const tabpanels =document.querySelectorAll('.tabpanel');


const init=function() {

    let initli = mytabs[0].firstElementChild;
    let initA=initli.parentElement.getAttribute('aria-controls');
    console.log(initli);
    initli.classList.add('bgpannel');
    initli.focus();
    let initId = document.getElementById(initA);
    console.log(initId);
    initId.classList.add('visit');
    
}

init();


