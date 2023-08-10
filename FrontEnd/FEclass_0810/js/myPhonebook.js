"use strict"

/* let textarea = document.getElementById('myInput');
let arrays = document.getElementsByTagName('li');

function updateValue(e){
    console.log("input: ",e.target.value);
    for(let item of arrays){
        let txt=item.textContent;
        if(txt.includes(e.target.value))
            item.style.display = 'inline';
        else
            item.style.display = 'none';
    }
    
}

textarea.addEventListener("input",updateValue);
 */

const searchfn=(e)=>{
    e.preventDefault();
    let inputValue = e.target.value;
    let element_li = document.getElementsByTagName('li');
    [...element_li].forEach(item=>{
        let ele_a = item.getElementsByTagName('a')[0];
        let a_content = ele_a.textContent;
        console.log(a_content);

        if(a_content.indexOf(inputValue)>-1)
        {
            item.style.display="";
        }
        else
        {
            item.style.display="none";
        }
    });
}

document.getElementById("myInput")
    .addEventListener("input",searchfn);