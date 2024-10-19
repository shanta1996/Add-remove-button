const sts = document.querySelector("h3");
const btn = document.querySelector("#add");
let val=0

btn.addEventListener("click", () => {
    if(val==0){
        sts.innerHTML='Friends'
        sts.style.color='#0f2340'
        btn.innerHTML='remove friend'
        btn.style.backgroundColor='#c3c6c9'
        btn.style.color='#000'
        val=1
    }
    else{
        btn.innerHTML='Add friend'
        btn.style.backgroundColor='#2b93ab'
        btn.style.color='#fff'
        sts.innerHTML=''
        val=0
    }
  
  
});