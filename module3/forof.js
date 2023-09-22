var car = ['xuv700', 'scorpio', 'thar'];
for(var carChoice of car){
    console.log(carChoice);
}

// Here carChoice will pickup values. in Forin, it picks up keys or indexes.

// If you want indexes - method entries()
var car = ['xuv700', 'scorpio', 'thar'];

for(var [index, carChoice] of car.entries()){
    console.log(index +' -> '+carChoice);
}

// Using strings

var myName = 'amar nath pandey';

for(var ch of myName){
    console.log(ch);
}
