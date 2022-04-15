// must contain - name, id, email, getName(), getId(), getEmail(), getRole() - getRole() returns Employee
const Employee = require('../lib/Employee.js');



test("creates a new employee object", () => {
    const employee = new Employee('Dave', 'dave@fuckmylife.org');
    
    expect(employee.name).toBe(undefined);
    expect(employee.getName()).toEqual()
    // expect(employee.role).toBe('Employee');
    // expect(employee.email).toEqual(expect.any(String));
})