
function splitArray(source, target2dArray){

  var halfIndex = Math.floor(source.length/2);

  target2dArray.push(source.slice(0, halfIndex));
  target2dArray.push(source.slice(halfIndex));
}


var target = [];

function breakDownArray(source, target){

  while(source.length > 2){
    target.push(source.slice(0,2));
    source = source.slice(2);
  }
  target.push(source);
}

function mergeSort(source){
  var storage = [];
  breakDownArray(source, storage);

  
  for (var i = 0; i < storage.length; i++) {
    var t = storage[i];

  }

  
}

// (function(){
//   var oddArray = [1,2,3,4,5];  
//   var evenArray = [1,2,3,4];
//   var target1 = [];
//   var target2 = [];

//   breakDownArray(oddArray, target1);
//   breakDownArray(evenArray, target2);

//   console.log(target1)
//   console.log(target2)
// })()


// function create2dArray(n) {
//   var twoDArray = [];

//   for(var i=0; i < n; i++){
//     twoDArray[i] = new Array();
//   }

//   return twoDArray;
// }

// (function (){
//   var i;
//   var foo = create2dArray(3);
//   var val = 100;

//   for(i of foo){
//     i[0] = val++;
//     i[1] = val++ 
//     i[2] = val++ 
//   }

//   console.log(foo);

//   var target = [];
//   for(i of foo){
//     splitArray(i,target);
//   }

//   console.log(target);

// })()
