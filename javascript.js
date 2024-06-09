
//input = string
//Prompt the user for a list of froyo flavors separated by commas//
const userInputStr = prompt(
    "Please enter a list of froyo flavors separated by commas.");

//Split the list of strings into an array of strings

const stringArray = userInputStr.split(",");


//create an object variable to store flavors

let flavorObj = {};

//loop through the array of split flavors

for (let i = 0; i < stringArray.length; i++){

    let flavor = stringArray[i];
    if (flavorObj[flavor]){
        flavorObj[flavor]+=1
    } else {
        flavorObj[flavor]=1
    }
    console.log(flavorObj)
}




//if the loop is encountering the flavor for the first time initialize a count and set it to the flavor at 1 
//if the loop is encountering the flavor after the first time, add to the count and increment 

//output = object
