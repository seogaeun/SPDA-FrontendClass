"use strict"
/* let ele_td = document.getElementsByTagName('td');

for(let i = ele_td.length-1; i >= 0; i--){
    console.log('test');
    ele_td[i].addEventListener('click',function(){
        this.parentElement.classList.toggle('yellow');
    });
} */

let ele_table = document.querySelector('table>tbody');

ele_table.addEventListener('click',function(e){
    e.target.parentElement.classList.toggle('yellow');
});
