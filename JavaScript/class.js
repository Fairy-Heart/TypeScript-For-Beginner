var Person = /** @class */ (function () {
    function Person() {
        this.PersonName = 'Mavis';
    }
    Person.prototype.showName = function () {
        return this.PersonName;
    };
    return Person;
}());
var DisplayName = new Person();
console.log(DisplayName.showName());
