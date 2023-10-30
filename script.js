const heart=document.querySelector("i");
const con=document.querySelector("#container1");
const btn = document.querySelector("#addFriend");

var check=0;
btn.addEventListener("click", function() {
    if(check==0)
    {
const name=document.getElementById("strange");
name.innerHTML="Friends";
name.style.color="red";
btn.innerHTML="removeFriend";
btn.style.backgroundColor="cornflowerblue";
btn.style.color="black";
check=1
    }
    else{
        const name=document.getElementById("strange");
        name.innerHTML="RemoveFriend";
        name.style.color="green"; 
        btn.innerHTML="AddFriend";
        btn.style.color="cadetblue";
        btn.style.color="white";
        check=0; 
    }
});

con.addEventListener("dblclick",function(){
   heart.style.transform="translate(-50%,-50%) scale(1)";
   heart.style.opacity=0.8;
   
  
   heart.style.color="red";
setTimeout(()=>{

    heart.style.opacity=0.9;
    heart.style.color="red";
},1000);

setTimeout(()=>{
    heart.style.transform="translate(-50%,-50%) scale(0)";
    heart.style.color="white";
    const music=document.getElementById("music");
    music.play();
},1000);

})

