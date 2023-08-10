document.getElementById('append')
    .addEventListener('click',function(e){ 

        e.preventDefault(); //원래의 버튼 성격 제거용 //서버 안올라감 안에서만 처리하게..
        //console.log(e.target); //e.target: 버튼 정보들의 element

                //li 만들고 text정보 노드 만들어서 둘이 붙이고 그걸 ul에 붙이면 됨!
        let irum = document.getElementById('irum');
        let data =irum.value;
        let ele_li = document.createElement('li'); //createElement: 요소 추가 



        let txt=document.createTextNode(data); //데이터 값을 집어넣으면 텍스트 노드 만들어줌


        ele_li.appendChild(txt);

        let result = document.getElementById('result');
        result.appendChild(ele_li);

        irum.value="";
    });

    const result = document.getElementById('result');

    result.addEventListener('click',function(e){
        e.target.classList.toggle('bg');
    });

    result.addEventListener('dblclick',function(e){

        let parent = e.target.parentElement;
        parent.removeChild(e.target);
    });
