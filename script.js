
const field=document.getElementById("field");

function apendToDisply(input){
    field.value +=input;
}

function clr() {
    field.value = '';
  }
function calculate(){
    try{
        let result=eval(field.value);
        field.value='';
        apendToDisply(result);
    }catch(error){
        field.value='';
        apendToDisply("Error: Invalid expression");
    }
}