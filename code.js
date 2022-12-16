// Foreach Exercise 1: iterate and output foods

const myFoods=["custard", "beans on toast","eggs","salad","cherry tomatoes","kit kats"];

console.log(`my foods are `);
myFoods.forEach( (element) => console.log(element));

// Foreach Exercise 2: Sum

const numArray=[2,5,7,3,9,1,8];

function sum(myArray){
    
    let sum=0;

    myArray.forEach( (element)=>(sum=element+sum));
    return(sum);


}

console.log(`Sum of elements is ${sum(numArray)}`);

// Foreach Exercise 3: Product

// use numArray from above 

function multiply(myArray){

    result=1;
    myArray.forEach( (element)=>(result=element*result));
    return(result);
}

console.log(`the result of multiplying array elements is ${multiply(numArray)}`);


// Maps Exercise 1 : Miles Converter

const kilometres=[ 2,8,25,75,100,220];

function toMiles(myArray){

    return(myArray.map(function(element,index,array){return(element*0.621371)}));
}

console.log(`kilometres into miles is ${toMiles(kilometres)}`);

// Maps Exercise 2: User input ages

const inputArray=["18","27",19,21,"22",NaN,undefined];

function filter(myArray){

    let filtArray=myArray.map( function(element){
         
        if ((typeof element==="number") && (!isNaN(element))){
            
            return( element);
        }
        else if (typeof element==="string"){

            let num=1*element;
            if ((typeof num==="number") && (!isNaN(num)))
               return num;
        }

       
    });
    return(filtArray);

}


console.log(`filtered array is now ${filter(inputArray)}`);

