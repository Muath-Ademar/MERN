console.log(hello); output = undefined                                  
var hello = 'world';   
// first snippet   

var hello;
console.log(hello) // output = undefined
hello = 'world'

// -------------------------------------------------------------------------------------
// second snippet
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); output = undefined, magnet
}

var needle ='haystack';

test();

function test(){
    var needle = 'magnet';
    console.log(needle);
}
//output = undefined, magnet 

//----------------------------------------------------------------

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//output = super cool
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //output = super cool

//--------------------------------------------------------------

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//output = chicken , gone

var food = 'chicken';
console.log(food);
eat();
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
     food = 'gone';
}
//output = chiken, half chicken


//-----------------------------------------------------------------------------------



mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//out put  = error, mean is not a function


mean();
console.log(food);
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
// output = error mean is not a function.


//------------------------------------------------------------

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
     genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// output = undefined, r&b, disco
var genre;
console.log(genre);
genre = "disco";
rewind();
function rewind() {
     genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// output = undefined,rock, r&b, disco


//---------------------------------------------------------------

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//output = san jose, seattle, burbank, san jose

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//output = san jose, seattle, burbank, san jose
//--------------------------------------------------------------------
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//output = Assignment to constant variable.
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));


//output = Assignment to constant variable.















