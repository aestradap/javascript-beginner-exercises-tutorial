function sing(){
    let lyrics1 = "let it be";
    let lyrics2 = "there will be an answer";
    let lyrics3 = "whisper words of wisdom";
    let allLyrics = "let it be";

const sing =()=>{
    let song ="";
    for(let i = 0; i < 11; i++){
        if(i === 4) song = song + "there will be an answer, ";
        else if(i === 10)  song = song + "whisper words of wisdom, let it be";
        else song = song + "let it be, ";
    }
    return song;
}

//Your code above ^^^

console.log(sing());