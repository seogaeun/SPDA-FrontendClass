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













































