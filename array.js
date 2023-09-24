const country = "Bangladesh";
const age = 52;
const Friends = [10, 22, 12, 14, 15, 18];
const isIndependent = true;
const student = {
    name: "Rimel",
    id: 1617,
    class: 12
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof Friends);
console.log(typeof isIndependent);
console.log(typeof student);


// Check array

console.log(Array.isArray(Friends));
console.log(Array.isArray(Friends));


// includes section

console.log(Friends.includes(21));
console.log(Friends.includes(10));



// concat section

const newFriends = [32, 44, 63, 21, 16, 18, 11, 12, 14];
const allFriends = newFriends.concat(Friends);
console.log(allFriends);

