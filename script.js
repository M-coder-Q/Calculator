// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
      diplay.value = eval(display.valve);
  }
  catch(error){
    diplay.value = "Error";
  }
}
