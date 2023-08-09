"use strict"

/* let a1 = [10,20,30];
let a2=a1;

console.log(a1===a2);

a1.forEach(item => {
    console.log(item);
});
a2[1]=100;
console.log("=============")
a1.forEach(item=>{
    console.log(item);
}) */


/* //assign통해 객체 하나 만들어서 이쪽에 넘겨줌

let a=[10,20,30];
let newA=Object.assign([],a); //새로운 곳에 a를 복사해서 새로운 객체를 만들게
console.log(a===newA) //false

newA[1]=100;

a.forEach(element => {
    console.log(element);
});

console.log("================")

a.forEach(element => {
    console.log(element);
});

//각각에 대한 자료가 참조변수
//요소에 대한 것들은 각각의 요소를 복사해야함

 */


/* let p1={name:'hong'}
console.log(p1);

Object.assign(p1,{age:10});
console.log(p1);
Object.assign(p1,{name:'park'});
console.log(p1);

//여러개 객체 한번에 묶어서 새로운 객체 만들기 가능
*/

/* //is라는 거 사용해서 객체의 
//0번쨰와 0번째를 비교해서 각각의 객체가 같은지를 확인
let o=new Object([10,20,30])
let o2=new Object([10,20,30])

console.log(o, ...o2);
 */




//String -> 객체 만들어서 써야함

//

/* let emailFull="aaa@aaa.com";
//출력 결과


//    이메일: aaa
//    도매인: aaa.com



let emailSplit = emailFull.split('@');
console.log(emailSplit)
let email = emailSplit[0];
let domain = emailSplit[1];

console.log(`이메일: ${email}`);
console.log(`도매인: ${domain}`); */


//String, Number도 primitive type은 맞는데, 각각에 대한 자료표현을 객체로 바꿈
/* let email='seo@naver.com';

let result = email.split("@");
console.log(`이메일 ${result[0]} 도매인 ${result[1]}`) */

//잘

/* let email='seo@naver.com';

let witch = email.indexOf('@'); //indexOf는 첫 번째 발생하는 자료의 위치만 나타냄!
//자료들에 대한 indexOf는 0부터 시작함
console.log(witch);

let e1 = email.substring(0,witch);
//혹은 email.slice
let e2 = email.substring(witch+1);
console.log(`이메일 ${e1} 도매인 ${e2}`) */



/* let arr = [10,20,30]; //기존 정보들
let arr2 = new Array(100,200,300);

let newArr = arr.concat(arr2, ['t1','t2']); //arr+arr2+[t1,t2]

console.log(arr);
console.log(newArr); */


//    arr.find(callback[, thisArg])
//callback은 함수 만들어서 다시 넘겨주는 거
//callback은 경우에 따라 세 인자를 받을 수 있음
    //현재 요소
    //현재 요소의 인덱스
    // 추출할 자료의 배열




/* 
//회사는 jQuery를 쓴다..
//그 중에서도 콜백은 많이 씀...

let data=[10,50,40,30,100,50];

let result = data.filter(function(element){
    return element>=50; //element가 자료에 대하여 50인게 있으면 리턴을 시킬게
    //반환 값: 주어진 판별 함수를 만족하는 첫 번째 요소의 값
});

console.log(result);

 */



/* //join
let arrName = ['hong', 'kim', 'lee'];

let result = arrName.join("/"); //가운데에 공백 없애서 <li>처리 용이하게 함

console.log(result); */


/* //push
let arr=[];
arr.push("aaa");
arr.push("bbb");
arr.push("ddd");

console.log(arr, arr.length);
console.log("==============");

arr.forEach(item=>console.log(item));
console.log(arr.length); //길이를 보면 알듯이, forEach 그냥 하나하나 보여주는 것 뿐
console.log("==============");
let d1=arr.pop("bbb");
console.log(`삭제요소 ${d1}, 전체요소 ${arr}`)
console.log(arr.length);
//stack */


/* let irums=['홍','김','이','박','나'];
 */
/* document.getElementById('view_btn')
.onclick=function(){
     irums.forEach(element => {
       document.getElementById('result').innerHTML
        +=('<li>'+element+'</li>'); 
    }); 




    let liList = irums.map((item)=>`<li>${item}</li>`);
    document.getElementById('result').innerHTML=liList; 
    
}
 */

/* document.getElementById('view_btn')
    .addEventListener('click',function(){
        let elements='';
        irums.forEach(element => {
            elements+=`<li>${element}</li>`;
        });
        document.getElementById('result').innerHTML=elements;
    });
 */


/* document.getElementById('view_btn')
    .addEventListener('click', function(){
        let irumList = irums.map((item)=>`<li>${item}</li>`).join(''); //join써야 , 안나온다...
        document.getElementById('result').innerHTML = irumList;
    });
 */

/* document.getElementById('view_btn')
    .addEventListener('click', function(){
        let result = irums.map(item => `<li>${item}</li>`);
        console.log(result); //배열로 들어가게 됨
        document.getElementById('result').innerHTML=result.join('') //j
    }); */


//예외처리

/* try{
    console.log('test');
    console.log('test2');
    let arr=new Array(-1); //자기가 알아서 던짐
    console.log('test3'); //동작 안함


} catch(e) //java에서는 Exception e하는거 여기서는 걍 e만 해도..
{
    console.log(e); //캐치해서 받아냄

}finally{
    console.log('finally'); //정상적이건 아니건 finally는 동작함
} */

/* 
let a=10;

try{
    if(a>20)
        console.log('a가 20보다 큽니다');
    else if(a==20)
        throw new Error("20와 동일");  //에러 발생시키고 싶을 때 throw로 던져버렷
    else
        throw new Error("20보다 작다"); //강력하게 에러 표시하고 싶을 때 new Error()

}catch(e)
{
    console.log(e);
}finally{
    console.log('end!!');
}
 */



/* 
let irum='홍길동';
let age=-'fdjklf';

console.log(typeof age,age)
try{
    if(typeof(age)!='number' || age=='NaN')
        throw new Error("옳지 않은 형태입니다.");
    else if(age<0)
        throw new Error("유효하지 않은 숫자입니다.");
    else
        console.log(`이름:${irum}  나이:${age}`);
}
catch(e){
    console.log(e);
}finally{

} */

/* document.getElementById('submit').addEventListener('click',function(){
    const irum = document.getElementById('irum');
    const txtage = document.getElementById('age');
    console.log(txtage.value); */
    /* 
        숫자: 숫자형 숫자: 10 20 ...
              문자형 숫자: "10" "20"...
    */
/*     try{
        let age=Number(txtage.value); //진짜 문자형을 쓰면 NaN이 나옴
        if(Number.isNaN(age)){ //isNaN 써서 자료형에 대한 판별을 하게 하기
            throw new Error('숫자형 자료가 아님');
        }else{
            if(age < 0){
                throw new Error('0보다 작습니다.');
            }else{
                console.log(`이름: ${irum.value} 나이:${txtage.value}`);
            }
           
         }

    }catch(e){
        console.log(e);
    }finally{
        console.log('done');
    }


    irum.value = "";
    age.value = "";
}); */


/**
 * <script defer></script>
 * <script async></script>
 * 
 * 
 *  async : 브라우저가 페이지를 파싱하는 동안에도 스크립트가 실행
 *  defer : 브라우저가 페이지의 파싱을 모두 끝내면 스크립트가 실행
 *  async와 defer 모두 선언하지 않을 경우 :
 *          브라우저가 페이지를 파싱하기 전에 스크립트를 가져와서 바로 실행
 */
/* 
document.getElementById('win_open')
    .onclick=function()
    {
        location.herf="http://www.naver.com";
        document.write("hello"); //다큐먼트
    } */

let d = document.body;
console.log(d);

let list_id=document.getElementById('listId');
console.log(list_id);

let li_class=document.getElementsByClassName('listClass');
console.log(li_class);

let tagname = document.getElementsByTagName('li');

console.log(tagname);

let names = document.getElementsByName('listname');
console.log(names);


let child1 = document.body.children; //각각에 대한 자식 정보들을 받아오는 children
console.log(child1);



/* let lis=document.getElementsByTagName('li')[2].textContent; //list 3의 값을 받아오고 싶을 때, textcontent쓰기 */
//let lis = document.getElementsByTagName('li')[2].className; //클래스 이름을 받아오고 싶을 때
let lis = document.getElementsByTagName('li')[2].tagName; //태그 이름 받아올 때...
console.log(lis);