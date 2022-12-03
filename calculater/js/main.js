 const currentValue=document.getElementById('output');
 const clear=document.getElementById("touch1");
 
 function getValue(a){

    currentValue.innerHTML+=a;
      
}

function clearAll(){
    currentValue.innerHTML=0;
}

function Equalto(){
    try{
        currentValue.innerHTML=eval(currentValue.innerHTML);
    }
    catch(err){
        alert("Ivalid")
    }
}
// function clear(){
//     currentValue.innerHTML=currentValue.value.slice(0,-1);
// }




// function Equalto(){
     
//     eval(currentValue);
// }