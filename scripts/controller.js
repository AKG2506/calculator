window.addEventListener('load',buttons);
 document.getElementById('calculate').addEventListener('click',docalc);

function buttons(){
    var a=[0,1,2,3,4,5,6,7,8,9,'/','*','+','-','C'];
    for(var i=0;i<a.length; ++i)
    { 
      createbuttons(a[i]);
    } 
}
function createbuttons(number){
    var buttons = document.createElement("button");
    buttons.innerHTML=number;
    buttons.addEventListener("click", function ()
    {
        if (number == "C") 
          {
            to_cal = "";
            document.getElementById("inputs").innerHTML = "";
          } 
        else 
          {
            add_to_cal(number);
            document.getElementById("inputs").innerHTML = to_cal;
          }
    });
    document.getElementById('digits').appendChild(buttons);
}

function docalc() {
    var result = eval(to_cal);
    document.getElementById("inputs").innerHTML = result;
    to_cal = "";
  }

  
