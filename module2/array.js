// decalre array

// var _myArr = [12, 'Amar', true, 23.6];
// console.log(_myArr) 

// fetch array items
// console.log(_myArr[3]);

// pop
// var _myArr1 = [12, 'Amar', true, 23.6];
// var out = _myArr1.pop();
// console.log(_myArr1);
// console.log(out);

// shift
// var _myArr2 = [12, 'Amar', true, 23.6];
// var out = _myArr2.shift();
// console.log('shift ' + _myArr2);
// console.log(out);

// push
// var _myArr3 = [12, 'Amar', true, 23.6];
// _myArr3.push('push');
// var out = console.log(_myArr3);
// console.log(out);

// // unshift
// var _myArr4 = [12, 'Amar', true, 23.6];
// _myArr4.unshift(2);
// var out = console.log(_myArr4);
// console.log(out);

// // slice
// var _myArr1 = [12, 'Amar', true, 23.6];
// _myArr1.pop();
// console.log(_myArr1);

// // splice
// var _myArr1 = [12, 'Amar', true, 23.6];
// _myArr1.pop();
// console.log(_myArr1);

// // toString
// var _myArr1 = [12, 'Amar', true, 23.6];
// _myArr1.pop();
// console.log(_myArr1);

// // length
// var _myArr1 = [12, 'Amar', true, 23.6];
// _myArr1.pop();
// console.log(_myArr1);

// // join
// var _myArr1 = [12, 'Amar', true, 23.6];
// var _myArr2 = _myArr1.join(' MKL ');
// console.log(_myArr2);

// // concat
// var _myArr1 = [12, 'Amar', true, 23.6];
// var _myArr2 = ['deepak', [24,25], 32, false];
// var _myArr3 = _myArr2.concat(_myArr1);
// console.log(_myArr3);

// // flat
// array.flat(depth)
// var _myArr1 = [1,2,[3,4,5,[6,7,8,9,[10,11,12]],13],[14,15,16]];
// var _myArr10 = _myArr1.flat(3);
// console.log(_myArr1);
// console.log(_myArr10);

// // sort
// var _myArr11 = [22, 'Amar', true, 100.6];
// _myArr11.sort();
// // var _myArr11A = _myArr11.reverse();
// console.log(_myArr11);
// console.log(_myArr11A);

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// const points = [40, 100, 1, 5, 25, 10];
// // points.sort();
// points.sort(function(a, b){return b - a});
// console.log(points);

// // Program to compare 2 arrays
// // Program to compare 3 arrays



// Array awesome
function duplicate(array) {
    for (var i = 0; i < array.length; i++) {
      array.push(array[i]);
    }
    return array;
  }
  
  const arr = [1, 2, 3];
  const newArr = duplicate(arr);
  console.log(newArr);