function sing(){
    let lyrics1 = "let it be";
    let lyrics2 = "there will be an answer";
    let lyrics3 = "whisper words of wisdom";
    let allLyrics = "let it be";

   
    for(let i = 0; i < 11; i++){
    
         if( i < 3) {allLyrics = allLyrics + ", " + lyrics1;}
         else if(i == 3) allLyrics = allLyrics + ", " + lyrics2;
         else if(i > 3  &&  i < 9) allLyrics = allLyrics +  ", " + lyrics1;
         else if(i == 9) allLyrics = allLyrics +  ", " + lyrics3;
         else allLyrics = allLyrics + ", " + lyrics1;
        
    }
    return allLyrics;
}

//Your code above ^^^

console.log(sing());