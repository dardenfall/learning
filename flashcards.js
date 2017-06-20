1) how do you tell array equvalence?
  - gotta write a function
2) how to init a javascript 2d array?
  - normal way var a=[[a],[b]];
3) forEach signature
  -
4) filter signature
  - array.filter(function(element, index, array), thisContext);
5) what is the signature for array.every and why use array.every or array.some?
  - array.every(function(currentValue, indes, array), thisContext);
6) what's the best way to iterate over all the letters of a string?
  - normal loop
7) does array have a contains?
  - includes
8) how do you declare use strict in node
  - "use strict";
9) how to lowercase a string?
  - str.toLowerCase()
10) what is the signature to tokenize string
  -
11) how to parse a expr into postfix notation

12) check if an array is empty
  - array.length > 0
13) what does Array.prototype.shift do?
  - returns the first member of the array and removes it
14) what does Array.prototype.unshift do?
  - pushes an object or objects to the front of an array
15) how do you parse an int/float
  - parseInt() parseFloat()
16) um... how do you multiply things?

17) What is polymorphism
  - "When classes have different functionality while sharing the same interface"
18) give an example of real life polymorphism
  - a dvd/blueray player - the interface is the same (a slot) but the right thing
    happens for each disk
19) what is composition vs aggregation?
  - both: when an object is made up of different types, and both are containment

  Aggregation implies a relationship where the child can exist independently of the parent.
  Example: Class (parent) and Student (child). Delete the Class and the Students still exist.

  Composition implies a relationship where the child cannot exist independent of the parent.
  Example: House (parent) and Room (child). Rooms don't exist separate to a House.
20) what are some design patterns I've used in my work & examples

21) what is the 'having' clause for SQL
 - it's like a where clause for a sql call with group by
 example?

22) what is an inner join vs an outer join
  - joins in general: joining 2 tables of data usually with one column matching a column from another table
  - outer join - both tables contain all rows

23) what is a left/right join
  - left & right outer join, there is a row for each row in the left or right tables respectively even if there is no match for the table
  -

24) normalization vs denormalization
  - norm - elemenate duplication of data, like taking mailing & physical address out of a table to put them in an address table to reference there
  - denorm - using some duplication of data to increase performance

25) what does SOLID mean?

26) what are 5 common big o notation values?
  -O(1), O(n), O(log n), O(nlogn), O(n^2), O(c^n)

27) what's a good example of O(log n)?
 - an algorithm with a loop but the data in the loop shrinks for each iteration of the loop

28) why use closures?
 - separation of concerns,
    private functions,
    if you want to set up callbacks in a loop and have the incrementor value to reflect what it was whenthe callback was setup
   a = function(){
     function private(){
       return 5;
     }

     return{
       public(){
         private();
       }
     }
   }

29) what is seperation of concerns?

30) what mathematic op happens with a shift left? How about a shift right?
