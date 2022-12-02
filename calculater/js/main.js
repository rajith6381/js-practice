 const currentValue=document.getElementById('output');
 const clear=document.getElementById("touch1");
 
 function getValue(a){

    currentValue.innerHTML+=a;
      
}

function clearAll(){
    currentValue.innerHTML=0;
}


function clear(){
    currentValue.innerHTML=-1
}

