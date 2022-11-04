let addContext=document.querySelector(".band");
let lists=document.querySelector(".lists");
let input=document.querySelector(".text");
let reversebutton=document.querySelector('.btndown');
let sortbutton=document.querySelector('.btnup');

let array=[];
addContext.onclick=function(){
    if(input.value.length==0){
        alert("Xana boş buraxıla bilməz")
    }
    else{
        
        lists.innerHTML += `
        <div class="context">
           ${input.value}    
            <div class="deletebtn">
            <img src="images/Group 56.png">
           
        </div>
        </div>

    `;
    let removelist = document.querySelectorAll(".deletebtn");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}
    
}
    let check=true;
    sortbutton.addEventListener("click", (e) => {
     let contextSort = [...document.querySelectorAll(".lists .context")]
      .map((context) => context.innerHTML)
      .sort();
       
     
    if (check) {
    
    document.querySelectorAll(".lists > .context").forEach((item, i) => {
        item.innerHTML=contextSort[i];
        item.innerHTML+= ``;
    let removelist = document.querySelectorAll(".deletebtn");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    });
}

    });
    reversebutton.addEventListener("click", (e) => {
        let contextSort = [...document.querySelectorAll(".lists .context")]
         .map((context) => context.innerHTML)
         .sort().reverse();
       if (check) {

       
       document.querySelectorAll(".lists > .context").forEach((item, i) => {
           item.innerHTML=contextSort[i];
           item.innerHTML+= ``;
    let removelist = document.querySelectorAll(".deletebtn");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
        });
    }
   
});