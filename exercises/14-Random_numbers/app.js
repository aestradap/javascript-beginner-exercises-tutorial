function getRandomInt()
{
	let randomNumber = Math.random();
	return Math.floor((randomNumber*10) + 1);
	// return parseInt(randomNumber*10);
}


console.log(getRandomInt());
