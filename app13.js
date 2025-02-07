
let qr1=document.getElementById("imgBox");
let image=document.getElementById("qr");
let input=document.getElementById("qrtext");
function generate(){
    if(input.value.length>0){
image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    qr1.classList.add("showimg");
    }
    else{
        input.classList.add("error");
       setTimeout(()=>{
        input.classList.remove("error");

       },1000);
       

}

}