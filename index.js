function calculateAge(){

    const inputValue = document.getElementById("display").value;
    const result = document.getElementById("results");



    const inputYear = parseInt(inputValue);

    const currentYear = new Date().getFullYear();

    const age = currentYear - inputYear;


    console.log(inputYear);
    console.log(currentYear);


  if(isNaN(inputYear) || inputYear > currentYear || inputYear < 1900){
    result.innerText = "Enter a valid year!!";
  }
  else{
    result.innerText = `You are ${age} years old.`;
  }
}
