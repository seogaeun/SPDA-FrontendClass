
//className
//selectQuery

let acc=document.getElementsByClassName('acordian');


for(let i=0; i<acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle('active');
        let pannel = this.nextElementSibling;
        if(pannel.style.maxHeight)
        {
            pannel.style.maxHeight=0;
        }else{
            pannel.style.maxHeight = "10vh";
        }
    });
}