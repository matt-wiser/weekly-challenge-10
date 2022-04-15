// constructor class for all other employees
// must contain - name, id, email, getName(), getId(), getEmail(), getRole() - getRole() returns Employee
class Employee{
    #email;
    #name;
    #role;
    #id;
    constructor(name, email){
        this.#name = name;
        this.#role = 'Employee';
        this.#email = email;
    }
    getEmail() {
        return this.#email;
    }
}

module.exports = Employee;