"use strict"
/*
    IIFE:
    정의하자마자 즉시 실행되는 함수

*/
/* function prt()
{
    console.log('prt!!!!');
}

prt(); //일반 함수
//////////////////////////////////////////////
(function prtNow()
{
    console.log('prt now!!!!');
})(); //즉시 실행 함수

////////////////////////////////////////////
// ``=> 변수 표현 할 때 쓰는..

let fnprt=function(x,y){
    console.log(`test fnprt ${x}, ${y} `);
}
fnprt(1,2); 

//둘이 같은 함수 표현
let fnprt2 = (x,y) => console.log(`test fnprt ${x}, ${y} `);
/////////////////////////////////////////////
((x,y) => {
    console.log(`test fnprt ${x}, ${y} `)
})(1,2) 
//즉시 함수(I2FE)로 표현 */


/* const addcount=(function()
{
    let count=0;

    let fn=function(){
        count++;
        return count;
    };
    return fn;
})();
//클로져 함수 
/*
    장점: 함수 유지는 가능
    단점: 오버플로우 발생, memory leak 가능성..


document.getElementById('btn').onclick=function(){
    document.getElementById('result').innderHTML=addcount();
} */


/* const addcount=(function(){
    let count=0;

    let fn=function(){
        count++;
        return count;
    }; //중첩 함수
    return fn;
})(); 



document.getElementById('btn').onclick=function(){
    document.getElementById('result').innerHTML=addcount();
} */

/* let result=''
let eleIrum = document.getElementById('irum');


document.getElementById('btn').onclick=function(){
    let irum = eleIrum.value; //값 받아오기
    result += (`<li>${irum}</li>`);
    document.getElementById('irumList').innerHTML = result;
}



/////////////////////////////////////////////////////////////////////
//element의 조건은 태그 <p class="속성..(attribute)">content</p>

//자료에서의 value는 vlaue라는 속성을 갖고있는 자료를 의미하는거
//단순히 값이 아님

document.getElementById('btn2')
    .onclick=function(){
        let txtirum = document.getElementById('irum2');
        let irumvalue = txtirum.value; //get
        document.getElementById.innerHTML +=irumvalue;


        txtirum.value="eee"; //set

    } */

//생성자: 객체 만들어줄 수 있는 애
//Object으로 객체 만들어줄 수 있어

/* 
    객체 생성
    1. Function 생성자 함수
    2. Object 생성자 함수 //object객체를 가지고 각각의 제품들을 만들거야!
    3. 생성자 함수 
            => 내가 ~~한 애들로 구성을 시키면 좋겠네 하고 틀을 만들었는데
                그 틀에 대한 정보가 생성자 함수
    4. 객체 리터럴
    5. 클래스

*/

/* //1. Function 생성자 함수 - 거의 쓰지는 않음
const op=new Function("a","b","return a+b");

let result=op(10,20);
console.log('result',result);

 */

/* //프로토타입: 모형화 시켜놓은 것
//자바에서는 모형화 된 객체들을 갖다가 실제 객체를 만들어감
//예제품, 시제품을 갖고 객체를 만들어 나가는 거

//->프로토타입 객체

let person1 = new Object();
person1.name="홍길동";
person1.age=20;
person1.addr="서울";


console.log(`name:${person1.name}, age:${person1.age},${person1.addr}`);

console.log(person1);

person1.prt=function(){
    console.log('prt function!!');
}

console.log(person1); //prt:f가 생김

console.log(typeof person1); //객체다
console.log(Array.isArray(person1)); //배열은 아님
 */

/* function Man(irum, age)
{
    this.irum = irum; // this._irum처럼 _를 써야함
    this.age = age;
    this.prt=function()
    {
        console.log(`name: ${this.irum}, age:${this.age}`);
    }

}

let p1 = new Man('서',22);
let p2 = new Man('박',20);

console.log(p1);
console.log(p2);

console.log(p1.irum, p1.age);
p1.prt();
p2.prt();
console.log('================');
console.log(p1['irum'],p2['irum']); */


/* //객체 리터럴
const m1={irum:'hong',age:20,addr:'서울'};
const m2={irum:'park',age:10,addr:'경기'};

console.log(typeof m1,m1);
console.log(typeof m2,m2); 
console.log(m1.irum,m1.age,m1.addr);
console.log(m2.irum,m2.age,m2.addr); */

/* class Student {
    constructor(StudentId,irum,age) //생성자 구현해야 함
    {
        this.StudentId=StudentId;
        this.irum=irum;
        this.age=age;
    }
}


let s1=new Student(1, 'seo', 20);
let s2=new Student(2, 'ga', 10);

console.log(s1 , typeof s1);
console.log(s2 , typeof s2);

/*
    속성 추가

s1.addr='서울';
s1.sayHello=function(){
    console.log('hello');
};

console.log(s1);

console.log('===============속성 삭제===================')

delete s1.age;

console.log(s1); */

/* 
    대괄호만 사용하는 경우
    여러개의 속성으로 한 값을 정의

    런타임시 결정되는 속성
*/

/* //속성이 여러개가 움직일 때
//s1.nick1 nick2='eee'; //속성이 여러개가 움직일 때 요렇게 쓰면 안됨
s1['nick1 nick2'] ='hello';
console.log(s1);
console.log(s1['nick1 nick2']); //얘는 .을 써서는 작동 안됨
 */

/* let a='age';
//변수의 값에 따라서 동적으로 부여되는 정보는 대괄호를 적어야함
const user={
    name:'seo',
    [a]:20
}

console.log(user);
//user.a && user.age 안됨!!

 */


/* class Student {
    constructor(StudentId,irum,age) //생성자 구현해야 함
    {
        this.StudentId=StudentId;
        this.irum=irum;
        this.age=age;
    }
}
let s1=new Student(1, 'seo', 20);

console.log(s1 , typeof s1);



s1.addr='서울';
s1.sayHello=function(){
    console.log('hello');
};

console.log("---------s1 객체 확인!!!-----------")
console.log(s1);

for(let item in s1){ //use strict 붙였는데 let 선언 안하면 에러뜸
//    console.log(s1.item); //s1.item 이케하면 아이템이라는 이름의 속성을 받아옴 
    console.log(item, s1[item]); //s1[item]요렇게 해야 값을 갖고올 수 있음
} */

/* 
class Student{
    constructor(irum,age){
        this.irum=irum;
        this.age=age;
    }
    prt=function(){
        console.log('prt method');
    };
}

Student.prototype.prt=function(){
    console.log('PRT!!!');
}

let ins1 = new Student("a1",20);
let ins2 = new Student("a2",20);
 */

/* let ins1=new Student("a1",20);

console.log(ins1);
console.log('--------------');
console.dir(ins1); */







/* 
document.getElementById('sum')
    .onclick=function(){
        let su1 = Number(document.getElementById('su1').value);
        let su2 = Number(document.getElementById('su2').value);

        let sumValue = su1 + su2;

        document.getElementById('sumValue')
            .innerHTML=sumValue;

    } 


document.getElementById('sum')
.addEventListener('click',function(){
    let su1 = document.getElementById('su1');
    let su2 = document.getElementById('su2');

    let result=Number(su1.value) + Number(su2.value);
    console.log(result)


    su1.value="";
    su2.value="";
})


let su1=Number('10');
let data=su1.toString();

console.log(typeof su1, su1);
console.log(typeof data, data);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
 */

/* let date = new Date();
let endDate = new Date(2023,8,8,17,0,0);
let elapsed =new Date(endDate - date);

let date = new Date();

console.log(date, typeof date);
console.log(endDate, typeof endDate);
console.log(elapsed, typeof elapsed)

let y = date.getUTCFullYear();
let M = date.getMonth()+1;
let d = date.getDate();
let h = date.getHours();
let m = date.getMinutes();

console.log(`${y}년 ${M}월 ${d}일 ${h}시 ${m}분 `) */


/* let a; //밖에 선언하고
document.getElementById('timer')
    .onclick=function()
{
    a=setInterval(() => { //받아오기
        
        let date = new Date();

        let y = date.getUTCFullYear();
        let M = date.getMonth()+1;
        let d = date.getDate();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        if(s==0){
            document.getElementById('result')
            .innerHTML = `${y}년 ${M}월 ${d}일 ${h}시 ${m}분`

        }
        else{
            document.getElementById('result')
            .innerHTML = `${y}년 ${M}월 ${d}일 ${h}시 ${m}분 ${s}초`

        }

    }, 1000);


}


document.getElementById('stop')
    .onclick=function()
{
    clearInterval(a);
    
} */






/* 
class Man
{
    constructor(irum, age)
    {
        console.log('constructer');
        this._irum = irum;
        this._age = age;
    }
    get irum()
    {
        console.log('getter irum')
        return this.irum;
    }
    set irum(irum)
    {
        console.log('setter irum');
        this._irum=irum;
    }
    get age()
    {
        return this.age;
    }
    set age(age)
    {
        console.log('setter age');
        return this._age=age;
    }
    get age()
    {
        console.log('getter age');
    }
}

let m1 = new Man('hong',20); //setter 들도 호출되는 것을 볼 수 있음
//요렇게 쓰면 해당하는 age의 setter가 호출됨
//따라서 this.irum처럼 그대로 쓰면 안됨, this._irum처럼 써야함

console.log(m1.age);
 */

/* class P1
{

    constructor(age){
        this._age=age;
    }

    prt = function(){ //나는 p1 prt 매소드야!
        console.log('P1-prt method'); 
    }
}

class c1 extends P1
{
    constructor(irum, age)
    {
        super(age); //p1에게 넘기기 위하여 super 사용
        this._irum=irum;
    }

    //상속받은걸 내 입맛대로 다시 정의하는거 => 오버라이딩
    //prt라는 정보를 가지고 이름을 똑같이 정의를 내린다
    prt = function(){
        console.log("c1-prt method");
    }

    show = function(){
        console.log("c1 show method");
    }

}
let ins = new P1(10);
ins.prt();
//ins.show(); //매서드 선언안됨!

let ins2= new c1('hong',20);
ins2.prt();
ins2.show(); */

/* 
    구조분해 할당:
    배열이나 객체 속성을 해체해서 개별 변수에 담는 것

*/

/* let [a,b] = [10,20];

console.log('a:',a);
console.log('b:',b);


let [t1,t2,...t3]=[100,200,300,400]; 
//...은 나머지 정보를 상관없이 다 받겠다는 뜻이라, ...은 항상 맨 마지막에 붙여야 함
console.log(t1);
console.log(t2);
console.log(t3);

console.log('-------------------------');
let [su1, su2]=[100,200];

//변수 값 서로 바꾸고 싶을 때
[su2, su1] = [su1, su2];
console.log(`su1: ${su1} su2: ${su2}`)

let man = {
    irum : 'hong',
    age : 20 ,
    addr : 'seoul'

}

let {irum, age, addr}=man;
console.log(`irum: ${irum} age: ${age} addr: ${addr}`);
 */
/* console.log('---------------------ppt----------------------');

let [a,b,c]=[1,2]; //1 2 undefined
console.log(a,b,c);


let[t1=10, t2=10,t3=10]=[1,2];
console.log(t1);
console.log(t2);
console.log(t3);
//1 2 10


console.log('----------------------------');
let[a1,,b1]=['test1','test2','test3','test4']
console.log(a1,b1); //test1 test3

console.log('----------------------------');
let[a2,...b2]=['test1','test2','test3','test4']
console.log(a2,b2);//test1 [test2,test3,test4]
 */

/* let arr=[];
let arr2=new Array(3);

console.log(typeof arr);
console.log(typeof arr2);
console.log(Array.isArray(arr));
console.log(Array.isArray(arr2)); */

/* let len;
let arr=[];
len=arr.push("a1");

console.log(`len ${len}, arr ${arr}`);
console.log('-----------------------')
len=arr.push("a2");

console.log(`len ${len}, arr ${arr}`); */






/* let arr=[];
document.getElementById('add').onclick=function(){
        let irum = document.getElementById('irum').value;
        let age = document.getElementById('age').value;
        arr.push(`${irum},${age}`);
        console.log(arr)
    }


document.getElementById('total').onclick=function(){
    document.getElementById('irumList').innerHTML = ''
    for (let item of arr){
        document.getElementById('irumList').innerHTML += `<li>${item}</li>`;
    }

}
 */

let arrinfo=[];

document.getElementById('add').addEventListener('click',function(){
    let txtname = document.getElementById('irum');
    let txtage = document.getElementById('age');

    let irum = txtname.ariaValueMax;
    let age = Number(txtage.value);

    let info={irum:irum, age:age};
    arrinfo.push(info);

    txtname="";
    txtage="";
});

document.getElementById('total').onclick=function()
{

    //array에서 forEach는 return을 하는 용도가 아님..단지 출력하는 용도
    //return을 하는 용도 => map
    
    let liList = 
    arrinfo.map((item)=>`<li>${item.irum},${item.age}</li>`)
    console.log(liList)
    document.getElementById('irumList').innerHTML=liList;


}











