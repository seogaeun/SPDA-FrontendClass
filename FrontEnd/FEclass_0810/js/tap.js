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

mytabs.forEach(item=>{
    item.firstChild.addEventListener('focus',function(e){ //e라는 이벤트 발생
        e.preventDefault();
/*         for(let i=0; i < mytable){} */

        //이벤트에 대한 정보를 받았으니
        //e는 a태그를 포커스해서 발생한 정보니깐, 아까 썼던 classlist를 add만해주기
        //나머지는 삭제해야하니깐 for문 돌려서 나머지 active된건 삭제
        //visit와 visit패널
        //이벤트 정보들은 add
        //나머지는 지워야함
        //add remove
    })
})