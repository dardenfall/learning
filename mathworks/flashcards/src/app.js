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

  const Card = (props) => {
  	return (
      <div className="card">
        <div className="card-header">
          {props.name}
        </div>
        <div className="card-block">
          <p className="card-text">{props.question}</p>
          <a href="#" className="btn btn-primary">Get Answer</a>
          <p className="answer">{props.answer}</p>
        </div>
      </div>
    )
  }

  const data = [
  { "name":"javascript",
  "question": "how do you tell array equvalence?",
    "answer": "gotta write a function"
  },
  { "name":"javascript", "question": "how to init a javascript 2d array?",
    "answer":"normal way var a=[[a],[b]];"},
  { "name":"javascript", "question": "forEach signature",
    "answer":"------"},
  { "name":"javascript", "question": "filter signature",
    "answer":"array.filter(function(element, index, array), thisContext);"},
  { "name":"javascript", "question": "what is the signature for array.every and why use array.every or array.some?",
    "answer":"array.every(function(currentValue, indes, array), thisContext);"},
  { "name":"javascript", "question": "what's the best way to iterate over all the letters of a string?",
    "answer":"normal loop"},
  { "name":"javascript", "question": "does array have a contains?",
    "answer":"includes"},
  { "name":"javascript", "question": "how do you declare use strict in node",
    "answer":"\"use strict\";"},
  { "name":"javascript", "question": "how to lowercase a string?",
    "answer": "str.toLowerCase()"},
  { "name":"javascript", "question": "what is the signature to tokenize string",
    "answer":"------"},
  { "name":"javascript", "question": "how to parse a expr into postfix notation",
    "answer":"------"},
  { "name":"javascript", "question": "check if an array is empty",
    "answer":"array.length > 0"},
  { "name":"javascript", "question": "what does Array.prototype.shift do?",
    "answer":"returns the first member of the array and removes it"},
  { "name":"javascript", "question": "what does Array.prototype.unshift do?",
    "answer":"pushes an object or objects to the front of an array"},
  { "name":"javascript", "question": "how do you parse an int/float",
    "answer":"parseInt() parseFloat()"},
  { "name":"javascript", "question": "um... how do you multiply things?",
    "answer":"-----"},
  { "name":"javascript", "question": "What is polymorphism",
    "answer":"When classes have different functionality while sharing the same interface"},
  { "name":"javascript", "question": "give an example of real life polymorphism",
    "answer":"a dvd/blueray player - the interface is the same (a slot) but the right thing happens for each disk"},
  { "name":"javascript", "question": "what is composition vs aggregation?",
    "answer": "both: when an object is made up of different types, and both are containment<br><br> Aggregation implies a relationship where the child can exist independently of the parent. Example: Class (parent) and Student (child). Delete the Class and the Students still exist. <br><br>Composition implies a relationship where the child cannot exist independent of the parent.<br><br>Example: House (parent) and Room (child). Rooms don't exist separate to a House."},
  { "name":"javascript", "question": "what are some design patterns I've used in my work & examples",
   "answer":"-----"},
  { "name":"javascript", "question": "what is the 'having' clause for SQL",
   "answer":"it's like a where clause for a sql call with group by example?"},
  { "name":"javascript", "question": "what is an inner join vs an outer join",
    "answer": "joins in general: joining 2 tables of data usually with one column matching a column from another table- outer join - both tables contain all rows"},
  { "name":"javascript", "question": "what is a left/right join",
    "answer":"left & right outer join, there is a row for each row in the left or right tables respectively even if there is no match for the table"},
  { "name":"javascript", "question": "normalization vs denormalization",
   "answer": "norm - elemenate duplication of data, like taking mailing & physical address out of a table to put them in an address table to reference there <br>- denorm - using some duplication of data to increase performance"},
  { "name":"javascript", "question": "what does SOLID mean?",
   "answer":"-----"},
  { "name":"javascript", "question": "what are 5 common big o notation values?",
   "answer":"O(1), O(n), O(log n), O(nlogn), O(n^2), O(c^n)"},
  { "name":"javascript", "question": "what's a good example of O(log n)?",
   "answer":"an algorithm with a loop but the data in the loop shrinks for each iteration of the loop"},
  { "name":"javascript", "question": "why use closures?",
   "answer": "separation of concerns,<br>private functions,<br>if you want to set up callbacks in a loop and have the incrementor value to reflect what it was whenthe callback was setup<br>a = function(){<br>function private(){<br>return 5;<br>}<br><br>return{<br>public(){<br>private();<br>}<br>}<br>}"},
  {"name":"javascript","question": "what is seperation of concerns?",
   "answer":"-----"},
  {"name":"javascript","question": "what mathematic op happens with a shift left? How about a shift right?",
  "answer":"-----"}

  ]

  ReactDOM.render(<App cards={data} />, document.getElementById('container'));
})()
