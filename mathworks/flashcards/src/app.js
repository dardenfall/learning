(function(){
  'use strict';
  // write code here and click the execute button
  const App = (props) => {
   	return (
    	<div>
        {props.cards.map( card => <Card name={card.name} question={card.question} answer={card.answer}/>)}
      </div>
    )
  }

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {isAnswered:false};
  }

  showAnswer() {
    this.setState((prevstate) => ({
      isAnswered:true
    }));
  }

  render(){
    let answer = null;

    if(this.state.isAnswered){
      answer = <p className="answer">{this.props.answer}</p>
    }
    else{
      answer = <button onClick={this.showAnswer.bind(this)}>get answer</button>
    }

    return (
      <div className="card">
        <div className="card-header">
          {this.props.name}
        </div>
        <div className="card-block">
          <p className="card-text">{this.props.question}</p>
            {answer}
          <input type="text"></input>
        </div>
      </div>
    )
  }
}

  const data = [
  { "name":"javascript",
  "question": "how do you tell array equvalence?",
    "answer": "gotta write a function"
  },
  { "name":"javascript", "question": "how to init a javascript 2d array?",
    "answer":"normal way var a=[[a],[b]];"},
  { "name":"javascript", "question": "forEach signature",
    "answer":"Array.prototype.forEach(function(item, index, currentArray), thisContext)"},
  { "name":"javascript", "question": "filter signature",
    "answer":"array.filter(function(element, index, array), thisContext);"},
  { "name":"javascript", "question": "what is the signature for array.every and why use array.every or array.some?",
    "answer":"array.every(function(currentValue, indes, array), thisContext);"},
  { "name":"javascript", "question": "what's the best way to iterate over all the letters of a string?",
    "answer":"normal loop"},
  { "name":"javascript", "question": "does array have a contains?",
    "answer":"includes Array.prototype.includes(element, fromIndex)"},
  { "name":"javascript", "question": "how do you declare use strict in node",
    "answer":"\"use strict\";"},
  { "name":"javascript", "question": "how to lowercase a string?",
    "answer": "str.toLowerCase()"},
  { "name":"javascript", "question": "what is the signature to tokenize string",
    "answer":"str.split(separator, limit of separations)"},
  { "name":"javascript", "question": "how to parse a expr into postfix notation",
    "answer":"------"},
  { "name":"javascript", "question": "check if an array is empty",
    "answer":"array.length > 0"},
  { "name":"javascript", "question": "what does Array.prototype.shift do?",
    "answer":"returns the first member of the array and removes it"},
  { "name":"javascript", "question": "what does Array.prototype.unshift do?",
    "answer":"pushes an object or objects to the front of an array"},
  { "name":"javascript", 
    "question": "how do you parse an int or float",
    "answer":"parseInt() parseFloat()"},
  { "name":"javascript", "question": "um... how do you multiply things?",
    "answer":"*"},
  { "name":"cs", "question": "What is polymorphism",
    "answer":"When classes have different functionality while sharing the same interface"},
  { "name":"cs", "question": "give an example of real life polymorphism",
    "answer":"a dvd or blueray player - the interface is the same (a slot) but the right thing happens for each disk"},
  { "name":"cs", "question": "what is composition vs aggregation?",
    "answer": "both: when an object is made up of different types, and both are containment<br><br> Aggregation implies a relationship where the child can exist independently of the parent. Example: Class (parent) and Student (child). Delete the Class and the Students still exist. <br><br>Composition implies a relationship where the child cannot exist independent of the parent.<br><br>Example: House (parent) and Room (child). Rooms don't exist separate to a House."},
  { "name":"cs", "question": "what are some design patterns I've used in my work & examples",
   "answer":"Factory - I had to guess which character set it was and then instantiated the correct one for each, Factory - attributes for segments, Observers for state mgmt (look into this and say why what we did was better)"},
  { "name":"sql", "question": "what is the 'having' clause for SQL",
   "answer":"it's like a where clause for a sql call with group by, Select count(ID), country from customer groupby country having(count(id) > 10"},
  { "name":"sql", "question": "what is an inner join vs an outer join",
    "answer": "joins in general: inner is the intersection, outer (full, left, right) has some rows with null"},
  { "name":"sql", "question": "what is a left/right join",
    "answer":"left & right outer join, there is a row for each row in the left or right tables respectively even if there is no match for the table"},
  { "name":"sql", "question": "what is a cross product or cross join",
    "answer": "table where the number of rows is equal to the number of rows in on product x num of rows in another"},
  { "name":"sql", "question": "normalization vs denormalization",
   "answer": "norm - elemenate duplication of data, like taking mailing & physical address out of a table to put them in an address table to reference there <br>- denorm - using some duplication of data to increase performance"},
  { "name":"cs", "question": "what are 5 common big o notation values?",
   "answer":"O(1), O(n), O(log n), O(nlogn), O(n^2), O(c^n)"},
  { "name":"cs", "question": "what's a good example of O(log n)?",
   "answer":"an algorithm with a loop but the data in the loop shrinks for each iteration of the loop"},
  { "name":"javascript", "question": "why use closures?",
   "answer": "data encapsulation,<br>private functions,<br>if you want to set up callbacks in a loop and have the incrementor value to reflect what it was whenthe callback was setup<br>a = function(){<br>function private(){<br>return 5;<br>}<br><br>return{<br>public(){<br>private();<br>}<br>}<br>}"},
  {"name":"javascript","question": "what is seperation of concerns?",
   "answer":"-----"},
  {"name":"javascript","question": "what mathematic op happens with a shift left? How about a shift right?",
   "answer":"left: 2^n, dividing by 2^n"},
  {"name":"javascript",
   "question": "What is event delegation",
   "answer":"if you have a list of li's, setting the event handler to the parent UL"},
  {"name":"css",
   "question": "what does the & param do in sass?",
   "answer":".parent{.child{}} -> .parent .child {}, .parent{ &.child{}} -> .parent.child "},
  {"name":"css",
   "question": "what does 'div, p' select?",
   "answer":"selects all div and p elements"},
  {"name":"css",
   "question": "what does 'div p' select?",
   "answer":"selects all p elements inside div elements"},
  {"name":"css",
   "question": "what does 'div > p' select?",
   "answer":"selects all p elements where div is the parent"},  
  {"name":"css",
   "question": "what does 'div + p' select?",
   "answer":"selects all p elements immediately next to a div"},
  {"name":"css",
   "question": "How do you select for an attribute with a particular value",
   "answer": "([element=value])"},
  {"name":"javascript",
   "question": "write the cannonical currying example?",
   "answer":"see code"},

// function myAddEventListener(e, index)
//   console.log(e,index)
//   e.addEventListener('click', function(){
//     console.log("Hey this is the nth thing", index);
//   })
// }

// var elements = document.querySelectorAll('div');

// for(let i=0; i < elements.length; i++){
//     myAddEventListener(elements[i], i);
// }
  {"name":"javascript",
   "question": "how do you check to see if something is null, undefined, or undeclared?",
   "answer":"variable == null works for null and undefined because null == undefined, but null === undefined is false.  typeof('var') === 'undefined' for undeclared"},
  {"name":"javascript",
   "question": "What is AMD? What is CommonJS?",
   "answer":"Async Module Def, Node's require and exports thing"},
  {"name":"javascript",
   "question": "What are implementations of each? ",
   "answer":"requirejs & node"},
  {"name":"javascript",
   "question": "Compare and contrast them",
   "answer":"AMD is better: Async, tho harder to read. Common is opposite that"},
  {"name":"javascript",
   "question": "What is significant about javascript primitives",
   "answer":"they have no properties"},
  {"name":"javascript",
   "question": "What are the examples?",
   "answer":"null, undefined, number, string, boolean"},
  {"name":"javascript",
   "question": "Which ones can be wrapped by native javascript objects?",
   "answer":"n(N)umber, s(S)tring, b(B)oolean"},
  {"name":"javascript",
   "question": "How to add an event in JS and what is the signature?",
   "answer":"element.addEventListner('click', function(element){ this is element}, false)  boolean true stops bubbling up" },
  {"name":"javascript",
   "question": "Why use the above function?",
   "answer":"allows multiple listeners, specify capturing" },
  {"name":"javascript",
   "question": "Describe javascript event model",
   "answer":"bubbling (start bottom goes up), capturing (starts high goes down)" },
  {"name":"javascript",
   "question": "Write a randomizer function",
   "answer":"function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min;}" },
  {"name":"javascript",
   "question": "What is the signature of reduce and what would use it for?",
   "answer":"arr.reduce(function(accumulator,currentVal,currentIndex,arr)) example: iterating over objects with an array as a member and creating an array of of all of the objects" },
  {"name":"javascript",
   "question": "How do you find something in an array?",
   "answer":"Array.prototype.find(function) - first true returned from callback " },
  {"name":"javascript",
   "question": "How do you replace something in a string?",
   "answer":"str.replace(regexp|substr, newSubstr|function)" }, 
  {"name":"MATLAB",
   "question": "What does whos do?",
   "answer":"shows what type a var is and how much memory is used for it" },   
  {"name":"MATLAB",
   "question": "What is the default type for variables",
   "answer":"double" },   
  {"name":"MATLAB",
   "question": "What are 'cell arrays'",
   "answer":"like standard arrays in programming" },   
  {"name":"MATLAB",
   "question": "What is the concat operator for strings?",
   "answer":"['foo' e.message]" },   
  {"name": "javascript",
   "question": "How to split an array in half",
   "answer": "var newArr = arr.slice(0, Math.ceil(arr.length / 2))" },
  {"name": "javascript",
   "question": "What is the function signature for sPlice?",
   "answer": "var removedElements = arr.splice(indexToInsertBefore, howMany, arrayToInsert)" },
  {"name": "javascript",
   "question": "how do you export something from a js module with a different name?",
   "answer": "export {x as y}" },
  {"name": "javascript",
   "question": "how do you import something from a js module with a different name?",
   "answer": "import {y as z} from foo.js" },
  {"name": "javascript",
   "question": "how do you turn json into an object",
   "answer": "JSON.parse" },
  {"name": "javascript",
   "question": "what is the signature for creating a promise?",
   "answer": "var p = new Promise( function(resolve,reject){ //call resolve and reject})" },
  {"name": "javascript",
   "question": "How do you iterate over object's keys in es6",
   "answer": "for (let [key, value] of Object.entries(myObj)) {" },  
   {"name": "javascript",
   "question": "Merge properties of two objects in ES6 ",
   "answer": "Object.assign(obja, objb)" },
   {"name": "es6",
   "question": "Types of for loops",
   "answer": "----" },
   {"name": "es6",
   "question": "Name 4 Set functions and the constructor signature?",
   "answer": "----" },
   {"name": "javascript",
   "question": "can functions be called that are defined after?",
   "answer": "----" },
   {"name": "javascript",
   "question": "what order does a set maintain?",
   "answer": "insertion" },
   {"name": "javascript",
   "question": "What is the O(n) best and worst case for insertion, deletion and search for a binary tree",
   "answer": "O(log n), O(n)" },
   {"name": "es6",
   "question": "define a class that extends something",
   "answer": "class Foo extends Bar{" },
   {"name": "es6",
   "question": "define a constructor with a class variable",
   "answer": "constructor(arg){ super(arg); this.x = 0" },



  ]

  ReactDOM.render(<App cards={data} />, document.getElementById('container'));
})()
