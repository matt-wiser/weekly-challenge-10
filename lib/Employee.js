class Employee{
    #email;
    #name;
    #role;
    #id;
    constructor(data){
        this.#name = data.name;
        this.#email = data.email;
        this.#id = data.id;
        this.#role = 'Employee';
    }
    getName() {
        return this.#name;
    }
    
    getId(){
        return this.#id;
    }
    
    getEmail() {
        return this.#email;
    }

    getRole() {
        return this.#role;
    }
}

module.exports = Employee;