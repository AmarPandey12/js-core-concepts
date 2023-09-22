var car = {
    firstChoice : 'xuv700',
    secondChoice: 'scorpio',
    thirdChoice: 'thar'
};

for(var choice in car){
    // console.log(`${choice} -> ${car[]}`);
    console.log(choice + '->' + car[choice]);
}

console.log(car);

// Can be used with arrays also. 

var carChoiceArray = ['xuv700', 'scorpio', 'thar'];

for (var carChoice in carChoiceArray){
    console.log(carChoice + '->' + carChoiceArray[carChoice]);
}