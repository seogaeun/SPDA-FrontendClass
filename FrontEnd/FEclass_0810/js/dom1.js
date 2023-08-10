document.querySelectorAll('.red')
    .forEach(item=>item.classList='green');

/* 
 haschildnode



//ul은 li앞에 화이트스페이스가 있는데 그걸 공백을로 인식함
 
const ul_ele = document.getElementsByTagName('ul')[0];
console.log(ul_ele.children);
console.log(ul_ele.hasChildNodes());
console.log(ul_ele.firstElementChild);//따라서 그 공백을 텍스트 제거하기 위하여
console.log(ul_ele.lastElementChild);

let ele_m3 = document.getElementById('m3');
let next_ele_m3 = ele_m3.nextElementSibling;
console.log(next_ele_m3);

next_ele_m3.style.backgroundColor = 'yellow'; //nextSibling에 스타일 적용
ele_m3.previousElementSibling.style.color = 'red'; */


/* 
    className : class attribute 값을 변경하거나 얻어올 때
    classList : add remove toggle replace 매서드 사용

*/
/* 

*/
/* ele_li.forEach(item => {
    if(item.classList.contains("red")) //contains:해당하는 자료형에 있는지 확인하는 방법
        item.classList.replace('red','green');
})
 */


/* ele_li.forEach(item=>{
    if(item.className == 'red')
        item.class = 'green';
}) */


ele_li.forEach(item=>{
    if(item.classList ==='red')
        item.className = 'green';
})

