alert("hello");
var a=document.getElementById('photo');
      var i=true;
      a.onclick=function(){
          if(i){
            a.style.background='#00f';
            a.style.color='#fff';
            a.style.height='10px';
            i=false;
          }else{
            a.style.background='#0f0';
            a.style.color='#000';
            a.style.height='10000px';
            a.style.display='none';
            i=true;
          }
           

      }