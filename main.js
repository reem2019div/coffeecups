var quation = document.getElementsByClassName(".quation");
 var i ;

 for ( i = 0; i < quation.length; i++){
    quation[i].addEventListener("click",function(){
        var des = this.nextElementSibling;
        if(des.style.display == "block"){
            des.style.display = "none" ;
        }
        else{
            des.style.display = "block";
        }

});
}

let myName = "coffee cups";
let index = 1;

function writeText() {
  document.querySelector(".coffe").textContent = myName.slice(0,index);

  index++
  if(index > myName.length){
    index = 1;
  }

}
setInterval(function(){
    writeText();
    
},100);


