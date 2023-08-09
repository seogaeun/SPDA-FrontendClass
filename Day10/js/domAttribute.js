"use strict"

/* let layoutImgs = document.getElementsByClassName('layout');
let viewImgs = document.getElementById('view');
console.log(layoutImgs);

//event쓸땐 forEach를 쓰지 않음

//배열에다간 of
for(let layoutImg of layoutImgs)
{
    layoutImg.addEventListener('mouseover',function(){
        console.log(this);
        for(let i=0; i < layoutImgs.length; i++){
            layoutImgs[i].style.border = '';

//            layoutImgs[i].src, view.src = view.src,layoutImgs[i].src;
        }
        this.style.border = '3px solid red';
        let v=document.getElementById('view');

        v.setAttribute('src',this.src);
        v.setAttribute('alt',this.alt);


    })
}
 */

let ele_red1 = document.querySelectorAll('.red'); //쿼리셀렉터 전체 선택
/* for(let layout of ele_red1){
    layout.className="green";
} */

/* for(let i=0; i < ele_red1.length; i++){ 
    //요렇게 하면 하나 해결할 때마다 길이 줄어들면서 인덱스가 조정되버림
    ele_red1[i].className="green";
} */

/* for(let i = ele_red1.length; i>=0; i--){ //역순으로 반영하면 문제 해결!
    ele_red1[i].className='green';
}
 */

[...ele_red1].forEach(item=>item.className="green"); //return을 안해도 이케 쓰면 상관없음

console.log(ele_red1);


document.querySelectorAll('.red')
.forEach(item=> item.className='green');