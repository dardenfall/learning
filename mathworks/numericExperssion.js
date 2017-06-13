"use strict";

function calculate(expr){
  expr = expr.toLowerCase();
  var operators = ['x', '/'];
  var tokens = expr.split(' ');

  var answerStack = [];
  var opStack = [];
  tokens.forEach(function(token){
    if(token !== 'x' && token !== '/'){
      answerStack.push(token);
    }
    else{
      if(token === 'x'){
        if(opStack.length === 0){
          opStack.push(token);
        }
        else{
          answerStack.push(opStack.pop());
          opStack.push(token);
        }
      }
      else{ // is /
        if(opStack.length === 0){
          opStack.push(token);
        }
        else{
          while(opStack[opStack.length-1] === 'x'){
            answerStack.push(opStack.pop());
          }

          opStack.push(token);
        }

      }
    }
  });
  //console.log(answerStack,opStack)
  answerStack = answerStack.concat(opStack);
  console.log(answerStack);
}

const expr = [{
    q: "1 x 2 x 3",
    a: 6
},
{
    q: "1 X 2 X 3",
    a: 6
},
{
    q: "6 / 2",
    a: 3
}];

expr.forEach( function(test){

  var ans = calculate(test.q);
  if(ans === test.a){
    console.log("test passed!");
  }
  else{
    console.log("test failed:",test.q," != ", ans);
  }

});
