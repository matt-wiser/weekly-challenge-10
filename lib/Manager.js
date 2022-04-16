const Employee = require("./Employee");

class Manager extends Employee{
    #officeNumber;
    constructor(data) {
        super(data);
        this.role = 'Engineer';
        this.#officeNumber = data.officeNumber;
    }
    
    getOfficeNumber() {
        return this.#officeNumber;
    }
}

module.exports = Manager;