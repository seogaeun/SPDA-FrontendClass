"use strict" //자바가 유연하다보니 조금 더 엄격한 규칙을 적용하기 위해
//선언에 대한 자료형을 강화시킴

/* a=20; //use strict으로 규칙이 엄격해져서 콘솔창에 에러 뜸 */
/* console.log('a',a);
 */

/*
    let
    const
    var

*/

/* var a = 20; //호이스팅이 일어나서 a에다가 undefined값을 집어넣음
let a = 20; //호이스팅은 일어나는데, a에다가 undefined값을 집어넣진 않음
 */
//block scope


/* let a = 40;
{
    let a=10;
    console.log('block-a',a);

} //중괄호를 block scope :

console.log('global-a',a);
//function scope


var su=100;
{
    var su =10;
    console.log('block su',su);
}

console.log('global su',su);

//둘다 10이 나옴 var을 써서 범위 모호해짐
//따라서 const나 let을 쓰는게 좋음
 */


/* for(var i=1; i<5; i++){
    console.log(i);
}
console.log('i....',i); //i is not defined
//바깥에서도 인식 가능


console.log('i....',i);
let tf='';

if(tf)
    console.log('true');
else
    console.log('false'); */

/* 
let arr=[10,20,30]; //배열

let fn=function(){ //함수 선언
    console.log('function!!!');
}

fn(); //호출
console.log(arr.length);

for(let i=0; i<arr.length; i++)
    console.log(arr[i]);


console.log(typeof arr);
console.log(typeof(arr)); //두 방식 다 활용 가능
console.log(typeof fn);
console.log(typeof (fn)); //함수도 가능

let person={}; //객체타입 선언

console.log(typeof(person)); //배열은 object

console.log(Array.isArray(arr)) //배열 여부 체크, true나옴
console.log(Array.isArray(person)) //배열 여부 체크, false나옴
console.log(person===null); //유형 일치하는지 보려면 ===

 */

/* let a='10';
let b=20;
let c=a+b;

console.log(typeof c, c); 
console.log(typeof(10/2), 10/2);
console.log(typeof('10'/2), '10'/2); //자료타입이 number로 바뀜
console.log(typeof('a'/2), 'a'/2); //계산은하는데, 계산이 안됨, NaN으로 뜸 

console.log(Boolean(''),Boolean('')); //false
console.log(Boolean(0),Boolean(0)); //false
console.log(Number('10'),Number('aa'),Number(null),Number(undefined)) // 10 NaN 0 NaN
console.log(String(0));
/**
 * 숫자형 praseInt praseFloat Number
 */


/* let names = 'hong gil dong';
let jumsu = 100;
console.log('aaa');
console.log('name:'+names+'jumsu',jumsu);
console.log('name:'+names+'jumsu',jumsu);
console.log(`name: ${names}, jumsu:${jumsu}`); // 물결 표시밑에 있는 역슬래쉬 ` 이용해서 표시 가능
 */

/* 
단항 연산자
    ++(증감연산), --(감소연산)

    let x=20;
    let y=++x; (전위 연산)

    let z=x++; (후위 연산)

    연산 먼저하고, 대입 하고 그런...

    let a = 10;
    let b= a++;

    안보여..

    a를 b에다가 대입하고 ++하는 그런..

    b=10 a=11

이항 연산자


삼항 연산자

*/

/* let a=10;
let b=++a;
console.log(`a:${a}, b${b}`); //a:11, b:11

let c=10;
let d=c++;
console.log(`c:${c}, d${d}`); //c:11, d:10

 */

/* console.log('----------------------');

let t1=10;
let t2=5;

console.log(t1+t2); //15
console.log(t1-t2); //5
console.log(t1*t2); //50
console.log(t1/t2); //2
console.log(t1%t2); //0
console.log(t1**t2); //100000

console.log('aa'+10); //계산이 아니라 연결이 됨
console.log(10+20+'aaa'); //숫자는 계산을 해서 연결
console.log('aaa'+10+20); //앞이 문자라 그냥 연결
 */


/*
비교연산
*/

/* console.log(10>10); //f
console.log(10>=10); //t
console.log(10<10); //f
console.log(10==10); //t
console.log(10!=10); //f
console.log(10===10); //t
console.log('---------------------------------------------------');
let a='10';
let b=10;

console.log(a==b); //true
console.log(a===b); //false 값과 type 둘 다 똑같아야 함

 */


/* let m1={name:'seo',age:20};
let m2=m1;
let m3={name:'seo',age:20};

console.log(typeof m1, typeof m2, typeof m3); //셋 다 object임

console.log(m1==m2,m1===m2); //트루트루
//똑같은 곳을 가리키는거라 값이 true
console.log(m1==m3,m1===m3); //펄스펄스
//똑같은 곳을 가리키는게 아니라서 값이 false */


/* console.log('------------------------')
console.log(null==undefined); //값은 같음
console.log(null===undefined); //타입은 다름
console.log(false==''); //값은 같음
console.log(false==0); //값은 같아
console.log(false===0); //타입이 다름 */

/*
    복합 대입 연산자
    a+=10;
    //a=a+10;


    a=b; 얘가 대입 연산자


 */


/* let a=10;
console.log(a);//10
a+=30;
console.log(a);//40
a/=4;
console.log(a);//10

let t1=10;
let t2=20;
let t3=4;

t3*=t1+t2; 
//t3=t3*(t1+t2);
//t1,t2를 먼저 계산하고 난 뒤, t3를 계산함

console.log(t3);

/**
 * alert창 요즘은 안쓴다고..


let max;
let su1=10;
let su2=20;
max=(su1>su2)? su1:su2; //삼항연산자
console.log(max); //20
 */


/* let a=11; //1011(2)
console.log(a>>2); // 10(2) -> 2(10)
console.log(a<<2); // 101100(2) -> 44(10) */

//10진수 0~9
//  ___  ___  ___  ___
// 10^3 10^2 10^1 10^0

//2진수 0,1
//  ___  ___  ___  ___
//  2^3  2^2  2^1  2^0

//내년에 정처기 따기


//연산자 우선순위
//[] () 가장 높은게 이거니깐 헷갈리면 걍 괄호 붙여버리기


//분기와 반복문

//제어문
/**
 * 블록문 {}
 * 조건문 if...  switch.. case
 * 반복문 for while     do while
 */




/**
 * 합격 불합격
 */



/* //조건문 -if
let kor=45;

if(kor>=90)
    console.log('수');
else if(kor >=80)
    console.log('우'); */






/**
 * 논리연산
 * 
 * and or not
 * 
 * 
 */

/* 
    빵하고 우유하고 샐러드 and (&&)

    빵이나 우유나 샐러드  or (||)

*/


/* console.log(10>=10 && 10!=10); //true && false이므로 false
console.log(10!=10 && 10>=10); // false && true이므로 false
console.log(10==10 && 10>=10); // true && true이므로 false

console.log(10==10 || 10!=10); // true || false이므로 true
console.log(10!=10 || 10>=10); //false || true이므로 true
console.log(10<10 || 10!=10); // false || false이므로 false

 */

/* if(kor>=90)
    console.log('수');
else if(kor>=80)
    console.log('우');
else if(kor>=70)
    console.log('미');
else if(kor>=60)
    console.log('양');
else
    console.log('가'); */

//받아오기
/* document.getElementById('btn') //html의 id가 가리키는 값을 받을 때 사용
    .onclick=function(){
        let elekor=document.getElementById('kor');
        let kor=Number(elekor.value); //값 받아오기
        let result='';

        if(kor>=90)
            result='수';
        else if(kor>=80)
            result='우';
        else if(kor>=70)
            result='미';
        else if(kor>=60)
            result='양';
        else
            result='가';

        document.getElementById('result')
        .innerHTML='국어 점수: '+kor+' 결과: '+result; //js는 대소문자 구별함

        //console.log(kor, typeof(kor));
        elekor.value=''; //값 받아오고 다시 지워짐
    }
 */

/*     document.getElementById('btn').onclick=function(){ //onclick을 했을 때, 함수 실행
            let elekor=document.getElementById('kor'); //elekor은 html에서 id가 kor에 해당되는 객체
            let eleeng=document.getElementById('eng');
            let elemath=document.getElementById('math');

            let kor=Number(elekor.value); //kor은 elekor객체에서 value에 해당되는 값 불러온거
            let eng=Number(eleeng.value);
            let math=Number(elemath.value);

            let result = ''; //result 초기화
            let avg= Number((kor+eng+math)/3);;

/*             if(kor>=90 && eng>=90 && math>=90  )
                result='very good';
            else if(kor>=90 || eng>=90 || math>=90)
                result = 'good';
            else
                result = 'bad'; 

            if(kor>=90 && eng >=90 && math >=90)
                result+="<li>very good!!</li>";
            else if(kor>=90 || eng >=90 || math >=90)
                result+="<li>good</li>";
            else
                result+="<li>bad</li>";



            document.getElementById('result')
            .innerHTML='국어 점수: '+kor+'수학 점수: '+math+'영어 점수: '+eng+'평균'+avg+'<br>'+result;
            //innerHtml로 html의 result객체의 내용을 수정하게끔
            
            elekor.value="";
            eleeng.value="";
            elemath.value="";
        }
 */

/*
        switch...

*/



/* 
switch(변수 || 식) //변수나 식이 괄호 안에 들어감
{
    case 값
    //break를 굳이 쓸 필요는 없음, 필요할 때만

}

*/
/* let su=4; //4로 진입 -> 못빠져나감 -> 3진입 -> 못나감 ->2->1->break로 빠져나감
let data='';
switch(su) //변수나 식이 괄호 안에 들어감
{
    case 5:
        data+='5';
    case 4:
        data+='4';
    case 3:
        data+='3';    
    case 2:
        data+='2';
    case 1:
        data+='1';
        break;
    default:
        data+='나머지경우';
}

console.log(data);

//뭔가를 빠져나가고 싶을 때, break
//따라서 굳이 break를 매번 쓸 필요는 없음
 */


/* let su='f';
let data='';
switch(a) //변수나 식이 괄호 안에 들어감
{
    case 'f':
        data+='f';
    case 'a':
        data+='a';
    case 't':
        data+='t';    
    case 'h':
        data+='h';
    case 'e':
        data+='e';
    default:
        data+='r';
}

console.log(data); */


//과제는 prompt나 alert창 쓰지 않기 
//과제는 Dom구조 받아와야하고, console창 혹은 브라우져에 띄워야함
/* let a=Number(prompt('숫자를 입력하세요',0))
let message='';
switch(a%3) //여기에 식을 쓸 수도 있음
{
    case 0: //case에는 식을 쓰면 안됨!! 값만!!
        message='3의 배수';
        break;
    case 1:
        message='나머지 값은 1';
        break;
    case 2:
        message='나머지 값은 2';
        break;
    default:
        message='이게 뭐지 오류가 발생한듯..?';
}

console.log(message);
 */

/* for(let i=10; i>20; i++){
    console.log(i);
} //for문 범위 주의하자....
 */


/* for(let i=10; i<30; i+=3){
    console.log('i: ',i);
}
 */
//iterable: 반복 열거 가능한 객체 (순서(index)가 있는 정보)
//Array, String, Map, Set, NodeList

/* //배열을 출력하는 방법
let arr=['a1','a2','a3'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log('=======================');
//1. for문 이용
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}
console.log('=======================');
//2. item 이용
for(let item of arr)
{
    console.log(item);
}

console.log('=====================');

//3. forEach이용
arr.forEach(item=>{
    console.log(item);
});
 */

/* console.log('================================')

let man={
    irum:'홍길동',
    age:20,
    addr:'서울'
};

console.log(typeof man,man); //object {irum: '홍길동', age: 20, addr: '서울'}
console.log(man.irum);
console.log(man.age);
console.log(man.addr);

console.log('===============================')

for(let key in man){
    console.log(key);
} //속성을 다 뽑아낼 수 있음 */

/* console.log('=================================')

//배열에는 in을 사용하지 말자
for(let index in arr){
    console.log(index);
} */


/* 
let data='hello, javascript!';
/* console.log(data[1]);//e

data[1]='T';
console.log(data[1]);//error
//string에 대한 정보들은 읽기만 해야 함
//할당 안됨 

for(let item of data)
{
    console.log(item);
};

//배열을 표현하기 위해서 of를 써주자 */

/* 
 * while문: 참일 동안
 * 거의 대부분은 for문...을 사용함
 * 
 

let i =10; 
let result='';
while(i>0)
{
    result+=(i+'  ');
    i-=2;
}
console.log(result); */


/**
 * 
 */
/* let i=1;
while(true){
    console.log(i);
    if(i==5)break; //순서에 따라서도 다름
    i++;


}
console.log('짜잔 break로 빠져나갔습니다~');
 */

/* for(let i=1; i<10; i++)
{

    if(i%3==0)
        continue; //바로 위로 다시 올라감
    console.log(i);
}


 */


/* let i=0;
//while문 자료를 사용할 때 데이터부터 확인해야 함.

while(i<10) 
{
    i++;
    if(i%3==0)
        continue; //바로 위로 다시 올라감 => 증감연산자 더 위에 작성될 필요 있음
    console.log(i);

} */

/* let sungjuckarr=[60,90,70,100,75];

sungjuckarr.forEach(function(item,index){
    console.log(item);
});
 */






/* function go1(){ //함수이름은 동사로 적어줘야함
    
}

go1(); */



/* 
function fn_move1(){ //선언적 함수
    console.log('fn_move-1');
    console.log('fn_move-2');
}

fn_move1(); //함수 호출

console.log('=================');

fn_move1();


function fn_move2(irum, age)
{
    console.log(`name: ${irum},age:${age}`);
    console.log('움직입니다!!')
}

fn_move2('hong',20);

console.log("================")

function getSu()
{
    let su = 100;
    return su;
}

let su=getSu();

console.log('값은: '+su)

let su1=10;
let su2=10;

function add(a,b){
    console.log(a+b);
}
let result=add(su1,su2)
console.log('처리결과는'+result)


//call by value
//값을 복사해서 주는거 

//call by reference
//주소를 복사해서 주는거

function prt2(arg){
    console.log(arg,typeof arg);
}

let arr=[10,20,30];
prt2(arr); */


/* 
let a=10;
let b=20;
let irum='kim'; //전체 page에 대한 scope => 전역변수

function prt(su1, su2){
    var test='hong'; //var에 대한 scope가 함수 scope
    console.log(irum,test); //지역변수

    for(var i=1; i<10; i++){
        console.log(i);
    }
    console.log('test...',i);
}

prt();
console.log('=======================');

console.log(irum,test); //error


//local scope && global scope 잘 파악하기
 */



/* 
const prt=function(){
    console.log('prt');
}
prt();

const prt2=function(irum='hello',age=0)
{
    console.log('irum : ',irum);
    console.log('age : ',age);
}

prt2('test',20);
console.log("----------")
prt2(); //default값으로(암것도 안넣으면 undefined로)

 */

/* const show=function(...irum){ 
    //...irum : 파라미터 개수 상관 없이 받아줄 수 있다 (rest parameter라고도 함)
    for(let i=0; i < irum.length; i++)
    {
        console.log(irum[i]);
    }
    console.log("------------------------");

    for(let a of irum)
    {
        console.log(a);
    }
}
//가변적으로 매개변수를 만들 수 있다.
show();
console.log("==============parameter1============");
show('a1');
console.log("==============parameter2============");
show('a1','a2');
 */

/* //배열이나 문자열 같이 반복 가능한 문자를 0개 인수 or 요소로 확장하여..

let arr1=[10,20,30];
let arr2=[100,200,300];

let arr3=[...arr1,...arr2];
let prt=function(arr3)
{
    console.log(arr3[1]);
}

prt(arr3); //20

//...을 씀으로써, let arr3=[10,20,30,100,200,300]
 */


/* let add=function(a,b){
    console.log(a+b);
    return a+b;
}

let tot=add(10,20);
console.log(tot); */


/* let prt=()=>"seo"; //함수가 한줄인 경우

let result = prt();
console.log(result); //seo */

/* let prt2=()=>{
    console.log('test1');
    console.log('test2');
    
}

prt2(); //return 타입이 없어서 void

let prt3=(a,b)=>{
    console.log('a: ',a,'b: ',b);
}

prt3('test1','test2') //a,b는 어떤 값이든 상관 없다!

//function안쓰려면 매개변수 넣고 괄호 안에 중괄호 넣는

//lo연산자 많이 씀, fuction잘 안씀, const a도 씀
//함수에다가 function쓰면 정적에다가 호이스팅도 일어나기 때문에  */

/* let fn=function(a, b, t1) //여기서 t1이 콜백함수 (매개변수로 넘겨지는 함수가 콜백 함수)
{
    console.log(a,b);
//    console.log(t1);
    t1(a,b);
}

let add=function(su1, su2)
{
    console.log('add function', (su1+su2));
}

fn(10,20,add);
//변수 처럼 집어넣은 함수를 callback함수라고 함 */


[10,20,30].forEach(function(item){ //function으로도
    console.log(item);
});

console.log('=======================');

[10,20,30].forEach((item)=>{ //lo연산자로도 만들 수 있다!
    console.log(item);
});












