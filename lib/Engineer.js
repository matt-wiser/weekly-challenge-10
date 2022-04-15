const Employee = require("./Employee");

// extends Employee class and also includes github, getGithub(), and getRole() - getRole() returns engineer
class Engineer extends Employee{
    #github;
    constructor(data) {
        super(data);
        this.role = 'Engineer';
        this.#github = data.github;
    }
    
    getGithub() {
        return this.#github;
    }
}

module.exports = Engineer;