let dept = Array.from('Computer Science and Engineering')
console.log(dept)
console.log('--------------------------------')

console.log("Array From Set")
const set = new Set(['CSE', 'CE', 'IT', 'CSE'])
console.log(Array.from(set))
console.log('--------------------------------')

console.log("Array From Map")
const map = new Map([[1, 2], [2, 4], [4, 8]])
console.log(Array.from(map))
console.log('--------------------------------')

const mapper = new Map([['1', 'a'], ['2', 'b']])
console.log(Array.from(mapper.values()))
console.log((Array.from(mapper.keys())))

console.log("Array from a Array from an Array-like object")
function f1(){
    return console.log(Array.from(arguments))
}

f1(1, 2, 3, 4)
console.log('--------------------------------')

console.log("Using arrow functions and Array.from()")
console.log((Array.from([1, 2, 3], (x) => x * x)))
console.log('--------------------------------')


console.log([1,2,3,4,5].copyWithin(-2))

console.log([1,2,3,4,5].copyWithin(0,3))

console.log([1,2,3,4,5].copyWithin(0,3,5))

console.log([1,2,3,4,5].copyWithin(-2,-3,-1))


//--------------------------------------
var arr = [10,20,25,12,30,25];
var result = arr.find(x=>x>20);
console.log(result);

//--------------------------------------
const deparetment = [
    {name: 'CSE', institute: 'cspit'},
    {name: 'CSE', institute: 'dpstar'},
];

function iscse(dept) {
    return dept.institute === 'cspit' ;

}

console.log(deparetment.find(iscse));

const deparetment1 = [
    {name: 'CSE', institute: 'cspit'},
    {name: 'CSE', institute: 'dpstar'},
]

const result1 = deparetment1.find(({institute}) => institute === 'depstar');
console.log(result1)

//Itereting with index and element
const depts = ["CSE","CE","IT"];

for ([index, element] of dept.entries()) {
    console.log(index, element);
}

const dept2 = ["CSE", "CE", "IT"];
var deparetments = dept2.entries();
console.log(...deparetment);

//copy to clipboard
//using a for loop
const dept1 = ["CSE", "CE", "IT"];
const arrayEntries = dept1.entries();

for (const element of arrayEntries) {
    console.log(element);
}

var deparetment2 = ["CSE", "CE", "IT", "CILVIL", "MECHANICAL", "EC", "EE"];

//Destructuring assignment
var[dep1, dep2, dep3] = deparetment

console.log(dep1);
console.log(dep2);
console.log(dep3);

var deparetment3 = ["CSE", "CE", "IT", "CILVIL", "MECHANICAL", "EC", "EE"];

//Destructuring assignment
var[dep4, ,dep5, ,dep6] = deparetment  //Leave spce for unpick element

console.log(dep4);
console.log(dep5);
console.log(dep6);

var deparetment3 = ["CSE", "CE", "IT", "CILVIL", "MECHANICAL", "EC", "EE"];

//Destructuring assignment
var[a,b,...ab] = deparetment

console.log(a);
console.log(b);
console.log(ab);

//parsing returned array from functions
console.log("Parsing returned array from Functions");
function array() {
    return [1,2];
}

var[x,y] = array();
console.log(x);
console.log(y);

//ESP MAP
var map1 = new Map()
console.log(map1.set('Univerity', "Charusat"))
console.log(map1.set('Institute', 'Cspit'))
console.log(map1.set('Department', 'Cse'))

console.log(map1.size);

//---------------------------------------------------
let deparetment5 = new Set(['CSE', 'CE', 'IT', 'CIVIL'])
console.log(deparetment5.size);
console.log(deparetment5);

console.log('------------------------------');
console.log('after Adding');
deparetment5.add('MECHANICAL');
deparetment5.add('EC');
console.log(deparetment5.size);
console.log(deparetment5);

console.log('------------------------------');
console.log('After Deleting');
deparetment5.delete('EC');
console.log(deparetment5.size);
console.log(deparetment5);

console.log('------------------------------');
console.log(deparetment5.has('CSE'));
console.log(deparetment5.has('IT'));
console.log(deparetment5.has('EC'));

console.log('------------------------------');
var itr = deparetment5.keys();
var itr2 = deparetment5.entries();
var itr3 = deparetment5.values();
console.log(itr.next());
console.log(itr2.next());
console.log(itr3.next());

//---------------------------------------------

var department6 = 'dep_name';
var emp = {
    id : 102,
    name : 'Anil',
    [department6]:'Production'
}

console.log(emp);

//---------------------------------------------
let user = {
    firstname : "sunil",
    lastname : "kumar",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
};

console.log(user);

//----------------------------------------------
const student = {university: 'CHARUSAT', institute: 'CSPIT', depart: 'CSE'};
const {university, institute, depart} = student;
console.log(university);
console.log(institute);
console.log(depart);

//----------------------------------------------
class students{
    constructor(fname, lanme){
        this.fn = fname;
        this.ln = lanme;
    }
    Stu() {
        console.log("The first Name of the studnet is:", this.fn)
        console.log("The last Name of the studnet is:", this.ln)
        console.log("Full name is:", this.fn+ " "+this.ln)
    }
    me() {
        console.log("Hello my name is:", this.fn+" "+this.ln);
    }
}

var stuobj = new students('Siddhit', 'Kale');
stuobj.Stu();
stuobj.me();

//-------------------------------------------------

const person = 'Siddhit';
const age = 19;

function taggediteral(String, personexp, ageexp){
    const str0 = String[0];
    const str1 = String[1];
    const str2 = String[2];

    const agestr = ageexp > 18 ? 'Apper for voting!!' : 'not appear for voting!!'; 
    console.log(String);
    console.log(personexp);
    console.log(ageexp);

    return `$(str0)$(personexp)$(str1)$(ageStr)$(str2)`;
    
}

const output = taggediteral `that[$person] can[$age]`;
console.log(output);

//-------------------------------------------------

