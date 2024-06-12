let display =document.getElementById('inputbox');
let buttons =document.querySelectorAll('button');

let buttonsArray =Array.from(buttons);
// console.log(buttonsArray);
let string='';
// functions short form =>

buttonsArray.forEach(btn => {
// console.log(btn);

btn.addEventListener('click',function(event){
if(event.target.innerHTML=='DEL'){
    string = string.substring(0,string.length-1)
    display.value = string;
}else if(event.target.innerHTML=='AC'){
    string='';
    display.value = string;
}else if(event.target.innerHTML=='='){
    string = eval(string);
    display.value = string;
}
else{
    string += event.target.innerHTML;
    display.value = string;
};
  
// console.log(event.target.innerHTML);
})    
});


// event ko hum only e bhi pass kr sakhte hai;
// only e pass kr k aero function use kr sakhte hai;