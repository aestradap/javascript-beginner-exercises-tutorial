let total = prompt('How many km are left to go?');

// Your code below:

function compare(total){
    let msg = "";
    if(total <= 50)
      msg = "I'm parking. I'll see you right now";
    else if(total > 50 && total <= 100)
           msg = "We'll be there in 5 minutes";
    else msg = "We still have a bit of driving left to go";

    return msg;
}
console.log(compare(total));