var person = {
    name: "John",                //String
    lastName: "Doe",
    age: 35,                     //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], //Array
    significantOther: person2   //Object, yes, the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; 

  for(let i = 0 ; i < anArray.length; i++){
    for(let y = 0; y < anArray[i].luckyNumbers.length; y++){
        sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + anArray[i].luckyNumbers[y];
    }
  }
  
  return sumOfAllLuckyNumbers;
}


//Enter all your code here:
function changeLuckyNumber(myPerson, position){
    myPerson.luckyNumbers[position] = 33;
    console.log(myPerson.luckyNumbers);
}
changeLuckyNumber(person, 3);

var person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

function addPerson (myPerson){
    family.members.push(myPerson);
    console.log(family.members);
}
addPerson(person3);


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
