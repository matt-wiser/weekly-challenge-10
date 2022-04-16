const Employee = require("./Employee");

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