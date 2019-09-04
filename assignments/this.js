/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This happens when you bind the window elements to a variable name
* 2. This form of binding exists for a this enclosed within a function
* 3. This involves the use of an existing "instance creation template" 
     as a model to create an instance of the object using the new keyword
* 4. This involves executing a function with the use of call & apply,
     and also using bind to duplicate an existing function with giving it 
     a different name
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var universe = this;

// Principle 2
var rich = false;

function checkRich(){
    return this.rich;
}

// code example for Implicit Binding
var human = {
    rich: true,
    age: 12,
    isRich: checkRich,
}

console.log(checkRich());

// Principle 3
function show(name, pro, ant){
    this.name = name;
    this.protangonist = pro;
    this.antagonist = ant;
}

// code example for New Binding
const tomAndJerry = new show('Tom & Jerry','Jerry','Tom');

console.log(tomAndJerry);
// Principle 4
function cast(name, costume) {
    return `${name}\'s role is a ${this}, costume is ${costume}`;
}
// code example for Explicit Binding
console.log(cast.call('Clown', 'Finch', 'Clown Suit'));
console.log(cast.apply('Dancer', ['Rupert', 'Dancing Gear']));
