// Constructor function 
//Function is same as class in cpp
function person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);

    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }

    this.getFullName = function () {
        return `${this.firstname} ${this.lastname}`;
    }
}

person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}
person.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname}`
}
// Instantiate objects
const person1 = new person('Ankita', 'Kumari', '2005-12-26');
const person2 = new person('Bella', 'Sharma', '2006-01-26');

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1);