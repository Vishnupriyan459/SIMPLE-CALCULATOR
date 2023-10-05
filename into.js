const display_content=document.querySelector(".display-content");
const powerbtn=document.querySelector(".power")
console.log(display_content,powerbtn);

// display_content.style.display="none";
powerbtn.addEventListener('click',()=>{
    if(display_content.style.display=='none'){
        display_content.style.display="block";
        console.log(display_content.style.display);
    }
    else if(display_content.style.display=='block'){
        display_content.style.display=="none";
        console.log(hi);
    }
})