let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
let powerbtn=document.querySelector(".power-btn")
let string = ''
let ans=document.querySelector(".Ans")
ans.style.display='none';

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            ans.style.display='block'
            string = String(eval(string))
            inputBox.value = string;
        }
        else if (b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else{
            ans.style.display='none'
            string += b.target.innerText
            inputBox.value = string
        }
    })
})
function power() {
    var x = document.getElementById("display-content");
    if (x.style.display === "none") {
      x.style.display = "block";
      
      
    } else {
      x.style.display = "none";
      inputBox.value = '0';
      string=''
      ans.style.display='none';

    }
  }