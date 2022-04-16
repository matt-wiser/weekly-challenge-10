const Employee = require("./Employee");

class Intern extends Employee{
    #school;
    constructor(data) {
        super(data);
        this.role = 'Intern';
        this.#school = data.school;
    }
    
    getSchool() {
        return this.#school;
    }
}

module.exports = Intern;